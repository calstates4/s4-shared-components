import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Pager from '../../01-elements/pager/pager';
import { ElementType, useState } from 'react';

export type TimeLogEntryProps = {
  dateTime: string;
  goals: string;
  hour: number;
  id: string;
  learningOutcomes: string;
  status: string;
};

export type TimeLogTableProps = {
  cta: string;
  currentPage: number;
  FormElement?: ElementType;
  itemsPerPage: number;
  timeLogInfo: TimeLogEntryProps[];
  totalItems: number;
  url: string;
};

export type TimeEntryRevisionProps = {
  date: string;
  message: string;
  status: string;
};

type DialogData = {
  dialogType?: 'form' | 'list';
  dialogTitle?: string;
  dialogMessage?: string;
  dialogFormData?: {
    formId: string;
    formAction: string;
    submitButtonText: string;
  };
  dialogListData?: TimeEntryRevisionProps[];
};

export default function TimeLogTable({
  cta,
  currentPage,
  FormElement,
  itemsPerPage,
  timeLogInfo,
  totalItems,
  url,
}: TimeLogTableProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [dialogData, setDialogData] = useState<DialogData>({});
  const pagerCount = Math.ceil(totalItems / itemsPerPage);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  // Style
  const contentStyles = {
    p: theme.spacing(5),
  };

  const headerWrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  };

  const iconWrapperStyles = {
    display: 'flex',
    gap: theme.spacing(2),
  };

  const iconStyles = {
    color: theme.palette.secondary.dark,
  };

  const tableStyles = {
    td: {
      p: theme.spacing(3),

      '&:first-child': {
        pl: 0,
      },
    },
    th: {
      p: theme.spacing(3),
      fontWeight: 700,

      '&:first-child': {
        pl: 0,
      },
    },
  };

  const renderedPager = pagerCount > 1 && (
    <Pager
      baseUrl={url}
      count={pagerCount}
      page={currentPage}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        pt: theme.spacing(3),
      }}
    />
  );

  // Components
  const renderedBody = timeLogInfo.map((row) => {
    return (
      <TableRow>
        <TableCell>{row.dateTime}</TableCell>
        <TableCell>{row.hour}</TableCell>
        <TableCell>{row.goals}</TableCell>
        <TableCell>{row.learningOutcomes}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>
          <Box sx={iconWrapperStyles}>
            <IconButton
              onClick={() => {
                setDialogData({
                  dialogType: 'form',
                  dialogTitle: 'Duplicate time entry',
                  dialogMessage: 'Do you want to continue?',
                  dialogFormData: {
                    formId: row.id,
                    formAction: 'duplicate',
                    submitButtonText: 'Duplicate',
                  },
                });
                handleClickOpen();
              }}
            >
              <FileCopyIcon sx={iconStyles} />
            </IconButton>
            <IconButton
              onClick={() => {
                setDialogData({
                  dialogType: 'form',
                  dialogTitle: 'Delete time entry',
                  dialogMessage: 'This action cannot be undone',
                  dialogFormData: {
                    formId: row.id,
                    formAction: 'delete',
                    submitButtonText: 'Delete',
                  },
                });
                handleClickOpen();
              }}
            >
              <DeleteIcon sx={iconStyles} />
            </IconButton>
            <IconButton onClick={() => {}}>
              <EditIcon sx={iconStyles} />
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>
    );
  });

  const renderedTable = (
    <TableContainer>
      <Box sx={headerWrapperStyles}>
        <Typography variant="h2">Time log</Typography>
        <Button variant="outlined" href={cta}>
          Request approval of hours
        </Button>
      </Box>
      <Table sx={tableStyles}>
        <TableHead>
          <TableRow>
            <TableCell>Date/Time</TableCell>
            <TableCell>Hours Calculated</TableCell>
            <TableCell>
              How have you contributed to the goals/mission of the organization?
            </TableCell>
            <TableCell>Learning outcomes</TableCell>
            <TableCell>Status</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>{renderedBody}</TableBody>
      </Table>
      {renderedPager}
    </TableContainer>
  );

  const renderedDialogFormContentInner = (
    <>
      <DialogContent>
        {dialogData.dialogMessage && (
          <DialogContentText sx={{ mb: theme.spacing(1) }}>
            {dialogData.dialogMessage}
          </DialogContentText>
        )}
        <input
          type="hidden"
          name="time-entry-id"
          value={dialogData.dialogFormData?.formId}
        />
        <input
          type="hidden"
          name="time-entry-action"
          value={dialogData.dialogFormData?.formAction}
        />
      </DialogContent>
      <DialogActions>
        <Button sx={{ fontWeight: 700 }} onClick={handleClose}>
          Cancel
        </Button>
        <Button
          sx={{ fontWeight: 700 }}
          variant="contained"
          onClick={handleClose}
          type="submit"
        >
          {dialogData.dialogFormData?.submitButtonText}
        </Button>
      </DialogActions>
    </>
  );

  const renderedDialogFormContent = FormElement ? (
    <FormElement method="post">{renderedDialogFormContentInner}</FormElement>
  ) : (
    <form>{renderedDialogFormContentInner}</form>
  );

  const renderedDialog = (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      scroll="paper"
      fullWidth
    >
      <DialogTitle variant="h3">{dialogData.dialogTitle}</DialogTitle>
      {renderedDialogFormContent}
    </Dialog>
  );

  return (
    <Paper sx={contentStyles}>
      {renderedTable}
      {renderedDialog}
    </Paper>
  );
}
