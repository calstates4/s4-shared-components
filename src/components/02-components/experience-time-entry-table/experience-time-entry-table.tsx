import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  TextField,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  useTheme,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Pager from '../../01-elements/pager/pager';
import { ElementType, useState } from 'react';

export type TimeEntryRevisionProps = {
  date: string;
  message: string;
  status: string;
};

export type TimeEntryProps = {
  id: string;
  state?: string;
  date?: string;
  calculatedHours?: number;
  description?: string;
  learningOutcomes?: string;
  revisions?: TimeEntryRevisionProps[];
};

export type ExperienceTimeEntriesTableProps = {
  url: string;
  FormElement?: ElementType;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  items?: TimeEntryProps[];
};

type DialogData = {
  dialogType?: 'form' | 'list';
  dialogTitle?: string;
  dialogFormData?: {
    formId: string;
    formAction: string;
    submitButtonText: string;
  };
  dialogListData?: TimeEntryRevisionProps[];
};

export default function ExperienceTimeEntriesTable({
  url,
  FormElement,
  totalItems,
  itemsPerPage,
  currentPage,
  items,
}: ExperienceTimeEntriesTableProps) {
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

  function renderdTimeEntryState({ id, state, revisions }: TimeEntryProps) {
    if (state === 'submitted') {
      return (
        <>
          <Button
            variant="contained"
            onClick={() => {
              setDialogData({
                dialogType: 'form',
                dialogTitle: 'Confirm time entry approval',
                dialogFormData: {
                  formId: id,
                  formAction: 'approve',
                  submitButtonText: 'Save and approve',
                },
              });
              handleClickOpen();
            }}
            sx={{ display: 'block', fontWeight: 700, mb: theme.spacing(1) }}
          >
            Approve
          </Button>
          <Button
            variant="outlined"
            sx={{ display: 'block', fontWeight: 700 }}
            onClick={() => {
              setDialogData({
                dialogType: 'form',
                dialogTitle: 'Time entry needs to be updated',
                dialogFormData: {
                  formId: id,
                  formAction: 'reject',
                  submitButtonText: 'Save and continue',
                },
              });
              handleClickOpen();
            }}
          >
            Needs update
          </Button>
        </>
      );
    } else if (state === 'published') {
      return (
        <>
          <Box sx={timeEntryStatusLabelStyles}>
            <CheckCircleOutlineIcon sx={{ color: 'success.dark' }} />
            <Typography sx={{ fontWeight: 700 }}>Approved</Typography>
          </Box>
          <Button
            onClick={() => {
              setDialogData({
                dialogType: 'list',
                dialogTitle: 'Time entry notes',
                dialogListData: revisions,
              });
              handleClickOpen();
            }}
          >
            View note(s)
          </Button>
        </>
      );
    } else if (state === 'declined') {
      return (
        <>
          <Box sx={timeEntryStatusLabelStyles}>
            <ErrorOutlineIcon color="warning" />
            <Typography sx={{ fontWeight: 700 }}>
              Update request sent
            </Typography>
          </Box>
          <Button
            onClick={() => {
              setDialogData({
                dialogType: 'list',
                dialogTitle: 'Time entry notes',
                dialogListData: revisions,
              });
              handleClickOpen();
            }}
          >
            View note(s)
          </Button>
        </>
      );
    }
  }

  // Styles.
  const paperStyles = {
    p: theme.spacing(3),
    mb: theme.spacing(3),
    fontSize: '1rem',
  };

  const tableStyles = {
    minWidth: '56.25rem',
    th: {
      fontWeight: 700,
    },
  };

  const timeEntryStatusLabelStyles = {
    display: 'flex',
    columnGap: theme.spacing(1),
    mb: theme.spacing(1),
  };

  const inlineDefinitionListStyles = {
    m: 0,
    mb: theme.spacing(0.5),
    dt: {
      display: 'inline',
      fontWeight: '700',
    },
    dd: {
      display: 'inline',
      ml: 0,
    },
    '> div': {
      mb: theme.spacing(1),
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

  // Render elements.
  const renderedTable =
    items && items.length ? (
      <TableContainer component={Paper} sx={paperStyles}>
        <Typography sx={{ mb: theme.spacing(2) }} component="h2" variant="h2">
          Time log
        </Typography>
        <Table sx={tableStyles}>
          <TableHead>
            <TableRow>
              <TableCell>Date/Time</TableCell>
              <TableCell>Hours Calculated</TableCell>
              <TableCell>
                How have you contributed to the goals/mission of the
                organization?
              </TableCell>
              <TableCell>Learning outcomes</TableCell>
              <TableCell sx={{ minWidth: '13.75rem' }} aria-label="actions">
                &nbsp;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.calculatedHours}</TableCell>
                <TableCell>
                  {item.description && (
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  )}
                </TableCell>
                <TableCell>
                  {item.learningOutcomes && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.learningOutcomes,
                      }}
                    />
                  )}
                </TableCell>
                <TableCell>{renderdTimeEntryState(item)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {renderedPager}
      </TableContainer>
    ) : (
      <Paper sx={paperStyles}>
        <Typography component="h2" variant="h2">
          No time tracked yet
        </Typography>
      </Paper>
    );

  const renderedDialogFormContentInner = (
    <>
      <DialogContent>
        <DialogContentText sx={{ mb: theme.spacing(1) }}>
          Please add notes regarding this time entry
        </DialogContentText>
        <TextField
          autoFocus
          fullWidth
          multiline
          maxRows={4}
          id="time-entry-description"
          name="time-entry-description"
          variant="outlined"
        />
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

  const renderedDialogListContent = (
    <>
      <DialogContent sx={{ maxHeight: '13rem' }}>
        {dialogData.dialogListData ? (
          <Box sx={inlineDefinitionListStyles} component="dl">
            {dialogData.dialogListData?.map((revision) => (
              <div>
                <dt>{`${revision.date} - ${revision.status}: `}</dt>
                <dd>{revision.message}</dd>
              </div>
            ))}
          </Box>
        ) : (
          <DialogContentText sx={{ fontWeight: 700 }}>
            There aren't notes associated with this time entry.
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          sx={{ fontWeight: 700 }}
          onClick={handleClose}
        >
          Close
        </Button>
      </DialogActions>
    </>
  );

  const renderedDialogContent =
    dialogData.dialogType === 'form'
      ? renderedDialogFormContent
      : renderedDialogListContent;

  return (
    <>
      {renderedTable}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        scroll="paper"
        fullWidth
      >
        <DialogTitle variant="h3">{dialogData.dialogTitle}</DialogTitle>
        <Button
          startIcon={<HighlightOffIcon />}
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: '',
            textTransform: 'capitalize',
          }}
        >
          Close
        </Button>
        {renderedDialogContent}
      </Dialog>
    </>
  );
}
