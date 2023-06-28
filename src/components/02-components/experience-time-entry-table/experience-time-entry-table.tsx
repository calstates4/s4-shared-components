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

export type ExperienceTimeEntriesTableProps = {
  url: string;
  FormElement?: ElementType;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  items?: {
    id: string;
    state: string;
    date: string;
    calculatedHours: number;
    description?: string;
    learningOutcomes: string;
  }[];
};

type ModalData = {
  timeEntryid?: string;
  timeEntryAction?: string;
  modalTile?: string;
  submitButtonText?: string;
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
  const [modalData, setModalData] = useState<ModalData>({});

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function renderdTimeEntryState({ id, state }: { id: string; state: string }) {
    if (state === 'submitted') {
      return (
        <>
          <Button
            variant="contained"
            onClick={() => {
              setModalData({
                timeEntryid: id,
                timeEntryAction: 'approve',
                modalTile: 'Confirm time entry approval',
                submitButtonText: 'Save and appove',
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
              setModalData({
                timeEntryid: id,
                timeEntryAction: 'reject',
                modalTile: 'Time entry needs to be updated',
                submitButtonText: 'Save and continue',
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
          <Button>View note(s)</Button>
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
          <Button>View note(s)</Button>
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
                  <div
                    dangerouslySetInnerHTML={{ __html: item.learningOutcomes }}
                  />
                </TableCell>
                <TableCell>{renderdTimeEntryState(item)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pager
          baseUrl={url}
          count={Math.ceil(totalItems / itemsPerPage)}
          page={currentPage}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: theme.spacing(3),
          }}
        />
      </TableContainer>
    ) : (
      <Paper sx={paperStyles}>
        <Typography component="h2" variant="h2">
          No time tracked yet
        </Typography>
      </Paper>
    );

  const renderedDialogContent = (
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
          value={modalData.timeEntryid}
        />
        <input
          type="hidden"
          name="time-entry-action"
          value={modalData.timeEntryAction}
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
          {modalData.submitButtonText}
        </Button>
      </DialogActions>
    </>
  );

  return (
    <>
      {renderedTable}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle variant="h3">{modalData.modalTile}</DialogTitle>
        <Button
          startIcon={<HighlightOffIcon />}
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: '',
          }}
        >
          Close
        </Button>
        {FormElement ? (
          <FormElement method="post">{renderedDialogContent}</FormElement>
        ) : (
          <form>{renderedDialogContent}</form>
        )}
      </Dialog>
    </>
  );
}
