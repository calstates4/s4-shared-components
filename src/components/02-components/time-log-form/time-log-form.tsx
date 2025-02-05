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
  useTheme,
} from '@mui/material';
import AutocompleteField, { AutocompleteOptionType } from '../autocomplete-field/autocomplete-field';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import { ElementType, useMemo, useRef, useState } from 'react';
import { differenceInMinutes, parseISO } from 'date-fns';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  DateTimePicker,
} from '@mui/x-date-pickers';

export type TimeLogFormProps = {
  activities?: AutocompleteOptionType[];
  breadcrumb: {
    title: string;
    url: string;
  }[];
  description?: string;
  experienceName?: string;
  focusAreas?: AutocompleteOptionType[];
  focusPopulations?: AutocompleteOptionType[];
  learningOutcomes?: AutocompleteOptionType[];
  enableOutcomes?: boolean;
  requireOutcomes?: boolean;
  outcomesDescription?: string;
  teacherexpectationsTerms?: AutocompleteOptionType[];
  enableTeacherExpectations?: boolean;
  requireTeacherExpectations?: boolean;
  teacherExpectationsDescription?: string;
  FormElement?: ElementType;
  formSubmit?: (a: HTMLFormElement) => void;
  defaultActivity?: string;
  defaultActivities?: string;
  defaultEndDate?: string;
  defaultFocusArea?: string;
  defaultFocusPopulation?: string;
  defaultLearningOutcomes?: string[];
  defaultStartDate?: string;
  defaultState?: string;
};

export default function TimeLogForm({
  activities,
  breadcrumb,
  description,
  experienceName,
  focusAreas,
  focusPopulations,
  FormElement,
  formSubmit,
  learningOutcomes,
  enableOutcomes,
  requireOutcomes,
  outcomesDescription,
  teacherexpectationsTerms,
  enableTeacherExpectations,
  requireTeacherExpectations,
  teacherExpectationsDescription,
  defaultActivity,
  defaultEndDate,
  defaultFocusArea,
  defaultStartDate,
  defaultFocusPopulation,
  defaultActivities,
  defaultLearningOutcomes,
}: TimeLogFormProps) {
  const theme = useTheme();
  const formRef = useRef<HTMLFormElement>(null);
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [state, setState] = useState('submitted');
  const [open, setOpen] = useState(false);

  const paperStyles = {
    p: theme.spacing(3),
    mb: theme.spacing(3),
    fontSize: '1rem',
  };

  const titleStyles = {
    color: 'primary.main',
    mb: theme.spacing(2),
  };

  const formFieldStyles = {
    mb: theme.spacing(3),
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      minWidth: '300px',
    },

    '& .MuiFormLabel-root:not(.Mui-focused)': {
      color: '#000000CC',
    }
  };

  const startDateFieldStyles = {
    mb: theme.spacing(3),
    display: 'block',
    [theme.breakpoints.up('md')]: {
      mr: theme.spacing(3),
      pr: theme.spacing(6),
      borderRight: `1px solid ${theme.palette.secondary.main}`,
    },
  };

  const endDateFieldStyles = {
    mb: theme.spacing(3),
    display: 'block',
    [theme.breakpoints.up('md')]: {
      ml: theme.spacing(3),
      pr: theme.spacing(6),
    },
  };

  const timeDetailsStyles = {
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  };

  const calculatedHoursStyles = {
    p: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: 'primary.light',
  };

  const calculatedHoursLabelStyles = {
    mb: theme.spacing(3),
    display: 'block',
    borderRadius: theme.spacing(0.5),
    backgroundColor: 'white',
    overflow: 'hidden',
  };

  const activityDetailsStyles = {
    [theme.breakpoints.up('md')]: {
      display: 'grid',
      columnGap: theme.spacing(12),
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  };

  const actionButtonsContainerStyles = {
    left: 0,
    bottom: 0,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'fixed',
    p: theme.spacing(2),
    gap: theme.spacing(1),
    justifyContent: 'flex-end',
    backgroundColor: 'secondary.main',
    zIndex: 1,
  };

  function handleStartDateOnChange(date: Date | null) {
    date && setStartDate(date.toISOString());
  }

  function handleEndDateOnChange(date: Date | null) {
    date && setEndDate(date.toISOString());
  }

  function handleClickOpen() {
    // Check if the form is valid before opening the dialog.
    if (formRef.current?.reportValidity()) {
      setOpen(true);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  function handleConfirm() {
    if (formSubmit && formRef.current) {
      formSubmit(formRef.current);
    }
    handleClose();
  }

  const calculatedHours = useMemo<string>(() => {
    if (startDate && endDate) {
      try {
        const start = parseISO(startDate);
        const end = parseISO(endDate);
        const diff = differenceInMinutes(end, start);
        return (Math.round((diff / 60 * 100)) / 100).toString();
      } catch {
        return '0';
      }
    }
    return '0';
  }, [startDate, endDate]);

  // Render.
  const renderedDialog = (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      scroll="paper"
      fullWidth
    >
      <DialogTitle variant="h3">
        Are you sure to submit?
      </DialogTitle>
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
      <DialogContent>
        <DialogContentText sx={{ mb: theme.spacing(1) }}>
          Once submitted, the time entry cannot be edited.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button sx={{ fontWeight: 700 }} onClick={handleClose}>
          Cancel
        </Button>
        <Button
          sx={{ fontWeight: 700 }}
          onClick={handleConfirm}
          variant="contained"
          type="submit"
          form="time-log-form"
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const stringNow = today.toISOString(); // "2020-06-13T18:30:00.000Z"

  const formInner = (
    <>
      <Paper sx={paperStyles}>
        <Typography variant="h2" mb={2}>
          Time Details
        </Typography>
        <Box sx={timeDetailsStyles}>
          <Box sx={startDateFieldStyles}>
            <Typography variant="h3" mb={2}>
              Time in
            </Typography>
            <DateTimePicker
              label="Time in"
              slotProps={{
                textField: {
                  name: 'time-log-start-date'
                },
                field: {
                  id: 'time-log-start-date',
                }
              }}
              sx={formFieldStyles}
              defaultValue={parseISO(startDate ?? stringNow)}
              onChange={handleStartDateOnChange}
            />
          </Box>
          <Box sx={endDateFieldStyles}>
            <Typography variant="h3" mb={2}>
              Time out
            </Typography>
            <DateTimePicker
              label="Time out"
              sx={formFieldStyles}
              slotProps={{
                textField: {
                  name: 'time-log-end-date'
                },
                field: {
                  id: 'time-log-end-date',
                }
              }}
              defaultValue={parseISO(endDate ?? stringNow)}
              onChange={handleEndDateOnChange}
            />
          </Box>
          <Box sx={calculatedHoursStyles}>
            <Typography mb={3} variant="h3">
              Calculated Hours
            </Typography>
            <Typography mb={3}>
              This is calculated based on your selections.
            </Typography>
            <TextField
              fullWidth
              id="time-log-hours"
              name="time-log-hours"
              value={calculatedHours}
              sx={calculatedHoursLabelStyles}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
        </Box>
      </Paper>
      <Paper sx={paperStyles}>
        <Typography variant="h2" mb={5}>
          Activity Details
        </Typography>
        <Box sx={activityDetailsStyles}>
          <Box>
            {focusPopulations && (
              <>
                <Typography mb={3}>
                  Which group(s) did your activites support, directly or indirectly?
                </Typography>
                <AutocompleteField
                  sx={formFieldStyles}
                  id="time-log-population"
                  options={focusPopulations}
                  name="time-log-population"
                  label="Focus Population"
                  selected={defaultFocusPopulation}
                  required
                />
              </>
            )}
            {focusAreas && (
              <>
                <Typography mb={3}>
                  What was your area of focus?
                </Typography>
                <AutocompleteField
                  options={focusAreas}
                  sx={formFieldStyles}
                  label="Focus Area"
                  id="time-log-focus-area"
                  name="time-log-focus-area"
                  selected={defaultFocusArea}
                  required
                />
              </>
            )}
            {activities && (
              <>
                <Typography mb={3}>
                  What did you accomplish during you visit?
                </Typography>
                <AutocompleteField
                  label="Activities"
                  options={activities}
                  sx={formFieldStyles}
                  id="time-log-activity"
                  name="time-log-activity"
                  selected={defaultActivity}
                  required
                />
              </>
            )}
          </Box>
          <Box>
            <Typography mb={3}>
              How have the identified activities contributed to the goals/mission of the organization?
            </Typography>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              id="time-log-activities"
              name="time-log-activities"
              defaultValue={defaultActivities}
              InputLabelProps={{
                shrink: true,
              }}
              sx={formFieldStyles}
            />
          </Box>
        </Box>
      </Paper>
      {enableOutcomes && (
        <Paper sx={paperStyles}>
          <Typography variant="h3" mb={2}>
            Learning Outcomes
          </Typography>
          <Typography mb={3}>
            {outcomesDescription}
          </Typography>
          <Box>
            {learningOutcomes && (
              <AutocompleteField
                multiple
                id="time-log-learning-objectives"
                name="time-log-learning-objectives"
                label="Learning Objectives"
                options={learningOutcomes}
                selected={defaultLearningOutcomes}
                sx={formFieldStyles}
                required={requireOutcomes}
              />
            )}
          </Box>
        </Paper>
      )}
      {enableTeacherExpectations && (
        <Paper sx={paperStyles}>
          <Typography variant="h3" mb={2}>
            Teacher Performance Expectations
          </Typography>
          <Typography mb={3}>
            {teacherExpectationsDescription}
          </Typography>
          <Box>
            {teacherexpectationsTerms && (
              <AutocompleteField
                multiple
                id="time-log-teacher-performance-expectations"
                name="time-log-teacher-performance-expectations"
                label="Teacher Performance Expectations"
                options={teacherexpectationsTerms}
                selected={defaultLearningOutcomes}
                sx={formFieldStyles}
                required={requireTeacherExpectations}
              />
            )}
          </Box>
        </Paper>
      )}
      <Paper sx={{ ...paperStyles, mb: theme.spacing(10) }}>
        <Typography variant="h3" mb={2}>
          Self reflections assesment
        </Typography>
        <Typography mb={3}>
          Please share any self-reflections or observations you have regarding your experience and its connection to your course work/major
        </Typography>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          id="time-log-description"
          name="time-log-description"
          defaultValue={description || ''}
          InputLabelProps={{
            shrink: true,
          }}
          sx={formFieldStyles}
        />
      </Paper>
      <input
        type="hidden"
        value={state}
        name="time-log-state"
      />
      <Box sx={actionButtonsContainerStyles}>
        <Button
          type="submit"
          variant="outlined"
          sx={{ flexShrink: 0 }}
          onClick={() => {
            setState('draft');
          }}
        >
          Save as draft
        </Button>
        <Button
          variant="contained"
          sx={{ flexShrink: 0 }}
          onClick={handleClickOpen}
        >
          Submit
        </Button>
      </Box>
    </>
  );

  const renderedForm = FormElement ? (
    <FormElement method="post" ref={formRef} id="time-log-form">{formInner}</FormElement>
  ) : (
    <form method="post" ref={formRef} id="time-log-form">{formInner}</form>
  );

  return (
    <article>
      <Breadcrumbs items={breadcrumb} />
      <Typography variant="h1" sx={titleStyles}>
        Log time for {experienceName}
      </Typography>
      {renderedForm}
      {renderedDialog}
    </article>
  );
}
