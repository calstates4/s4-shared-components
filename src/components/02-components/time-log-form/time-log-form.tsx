import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ChangeEvent, ElementType, useMemo, useState } from 'react';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import { differenceInHours } from 'date-fns';
import AutocompleteField, { AutocompleteOptionType } from '../autocomplete-field/autocomplete-field';

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
  FormElement?: ElementType;
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
  learningOutcomes,
  defaultActivity,
  defaultEndDate,
  defaultFocusArea,
  defaultStartDate,
  defaultFocusPopulation,
  defaultActivities,
  defaultLearningOutcomes,
  defaultState,
}: TimeLogFormProps) {
  const theme = useTheme();
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [workflow, setWorkflow] = useState(defaultState);

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
    [theme.breakpoints.up('md')]: {
      minWidth: '300px',
    },
  };

  const startDateFieldStyles = {
    ...formFieldStyles,
    [theme.breakpoints.up('md')]: {
      mr: theme.spacing(3),
      pr: theme.spacing(6),
      borderRight: `1px solid ${theme.palette.secondary.main}`,
    },
  };

  const endDateFieldStyles = {
    ...formFieldStyles,
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
    ...formFieldStyles,
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

  function handleStartDateOnChange(event: ChangeEvent<HTMLInputElement>) {
    setStartDate(event.target.value);
  }

  function handleEndDateOnChange(event: ChangeEvent<HTMLInputElement>) {
    setEndDate(event.target.value);
  }

  const calculatedHours = useMemo<string>(() => {
    if (startDate && endDate) {
      return differenceInHours(
        new Date(endDate),
        new Date(startDate),
      ).toString();
    }
    return '';
  }, [startDate, endDate]);

  // Render.
  const formInner = (
    <>
      <Paper sx={paperStyles}>
        <Typography variant="h2" mb={5}>
          Time Details
        </Typography>
        <Box sx={timeDetailsStyles}>
          <Box sx={startDateFieldStyles}>
            <TextField
              required
              label="Time In"
              type="datetime-local"
              id="time-log-start-date"
              name="time-log-start-date"
              onChange={handleStartDateOnChange}
              defaultValue={defaultStartDate ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                pattern: 'd{4}-d{2}-d{2}',
              }}
              sx={formFieldStyles}
              fullWidth
            />
          </Box>
          <Box sx={endDateFieldStyles}>
            {startDate && (
              <TextField
                required
                label="Time Out"
                type="datetime-local"
                id="time-log-end-date"
                name="time-log-end-date"
                onChange={handleEndDateOnChange}
                defaultValue={defaultEndDate ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  min: startDate,
                  pattern: 'd{4}-d{2}-d{2}',
                }}
                sx={formFieldStyles}
                fullWidth
              />
            )}
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
              rows={5}
              InputLabelProps={{
                shrink: true,
              }}
              sx={formFieldStyles}
              id="time-log-activities"
              name="time-log-activities"
              defaultValue={defaultActivities}
            />
          </Box>
        </Box>
      </Paper>
      <Paper sx={paperStyles}>
        <Typography variant="h3" mb={2}>
          Teacher Performance Assessment
        </Typography>
        <Typography mb={3}>
          Select the Major Learning Outcomes you met during this experience
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
            />
          )}
        </Box>
      </Paper>
      <Paper sx={{ ...paperStyles, mb: theme.spacing(10) }}>
        <Typography variant="h3" mb={2}>
          Self reflections assesment
        </Typography>
        <Typography mb={3}>
          Please share any self-reflections or observations you have regarding your experience and its connection to your course work/major
        </Typography>
        <TextField
          rows={8}
          multiline
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          sx={formFieldStyles}
          id="time-log-description"
          name="time-log-description"
          defaultValue={description || ''}
        />
      </Paper>
      <input
        type="hidden"
        value={workflow}
        name="time-log-workflow"
      />
      <Box sx={actionButtonsContainerStyles}>
        <Button
          type="submit"
          variant="outlined"
          sx={{ flexShrink: 0 }}
          onClick={() => {
            setWorkflow('draft');
          }}
        >
          Save as draft
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{ flexShrink: 0 }}
          onClick={() => {
            setWorkflow('submit');
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );

  const form = FormElement ? (
    <FormElement method="post">{formInner}</FormElement>
  ) : (
    <form>{formInner}</form>
  );

  return (
    <article>
      <Breadcrumbs items={breadcrumb} />
      <Typography variant="h1" sx={titleStyles}>
        Log time for {experienceName}
      </Typography>
      {form}
    </article>
  );
}
