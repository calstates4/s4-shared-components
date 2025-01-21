import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { ElementType, useState, ReactNode, useEffect } from 'react';
import AutocompleteField, {
  type AutocompleteOptionType,
} from '../autocomplete-field/autocomplete-field';
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export type StudentExperienceFormStep2UpdateProps = {
  experienceId: string;
  opportunityCourseId: string;
  programName?: string;
  courseValues?: AutocompleteOptionType[];
  defaultCourse: string | null;
  stepsBar: ReactNode;
  FormElement: ElementType;
  courseSelected: string;
  errorMsg: boolean;
};

export default function StudentExperienceFormStep2Update({
  experienceId,
  opportunityCourseId,
  programName,
  courseValues,
  defaultCourse,
  stepsBar,
  FormElement,
  courseSelected,
  errorMsg,
}: StudentExperienceFormStep2UpdateProps) {
  const theme = useTheme();
  const [currentOpportunityCourseId, setCurrentOpportunityCourseId] = useState(opportunityCourseId || '');

  // Styles.
  const contentContainerStyles = {
    width: '100%',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    fontSize: '1rem',
  };

  const formFieldStyles = {
    mb: theme.spacing(1),
    display: 'block',
    width: '300px',

    '& .MuiFormLabel-root:not(.Mui-focused)': {
      color: '#000000CC',
    }
  };

  const definitionListStyles = {
    mt: 0,
    mb: theme.spacing(1),
    dt: {
      display: 'inline',
      fontWeight: '700',
    },
    dd: {
      display: 'inline',
      ml: 0,
    },
    [theme.breakpoints.up('sm')]: {
      mb: 0,
    },
  };
  const timeEntryStatusLabelStyles = {
    display: 'flex',
    columnGap: theme.spacing(1),
    mb: theme.spacing(1),
    color: '#D32F2F',
    fontSize: '10px',
    fontWeight: '400',
  };

  const defaultSelect =
  courseValues && parseInt(courseSelected) > 0
    ? courseValues[parseInt(courseSelected) - 1]?.id
    : defaultCourse;

  const [selectedValue, setSelectedValue] = useState(defaultSelect);

  useEffect(() => {
    setSelectedValue(defaultSelect);
    setCurrentOpportunityCourseId(defaultSelect || '');
  }, [defaultSelect]);

  const formInner = (
    <>
      <Paper sx={contentContainerStyles} component="article">
        <Box sx={{ mb: theme.spacing(3) }}>
          <Typography variant="h2" color="primary.main">Program and Course</Typography>
          Select Course that you want to associate your experience to.
        </Box>
        <Box sx={{ mb: theme.spacing(3) }}>
          <Box sx={definitionListStyles} component="dl">
            <dt>Program: </dt>
            <dd>{programName}</dd>
          </Box>
        </Box>
        {courseValues && (
          <AutocompleteField
            id="courseId"
            name="courseId"
            label="Course"
            options={courseValues}
            selected={selectedValue}
            sx={formFieldStyles}
            onChange={(_, value) => {
              if (value && !Array.isArray(value) && 'id' in value) {
                setSelectedValue(value.id);
                setCurrentOpportunityCourseId(value.id);
              }
            }}
          />
        )}
        {errorMsg && (
          <Box sx={timeEntryStatusLabelStyles}>
            <ErrorOutlineIcon sx={{ color: '#D32F2F'}} />
            <Typography>
              The opportunity you have selected is not part of this course. Please select another one to continue.
            </Typography>
          </Box>
        )}
      </Paper>
      <input type="hidden" name="experienceId" value={ experienceId } />
      <input type="hidden" name="opportunityCourse" value={currentOpportunityCourseId} />
      <Button type="button" href="/experiences" variant="outlined" sx={{ mr: 1, float: 'left' }}>Cancel</Button>
      <Button type="submit" variant="contained" sx={{ mr: 1, float: 'right' }}>Continue</Button>
    </>
  );

  const form = FormElement ? (
    <FormElement method="post">{formInner}</FormElement>
  ) : (
    <form>{formInner}</form>
  );

  return (
    <>
      <Paper sx={contentContainerStyles} component="article">
        <Typography variant="h1" color="primary.main" sx={{ mb: theme.spacing(2) }}>Create your Experience</Typography>
        This simple process will guide you through the steps to sign up for your selected experiential learning opportunity.
      </Paper>
      {stepsBar}
      {form}

    </>
  );
}
