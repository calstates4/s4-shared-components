import {
  Autocomplete,
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { ChangeEvent, ElementType, useRef, useState, ReactNode } from 'react';
import AutocompleteField, {
  type AutocompleteOptionType,
} from '../autocomplete-field/autocomplete-field';

export type StudentExperienceFormStep2Props = {
  opportunityId: string;
  opportunityCourseId: string;
  programId: string;
  programName: string;
  courseValues?: AutocompleteOptionType[];
  defaultCourse: string | null;
  stepsBar: ReactNode;
  FormElement: ElementType;
};

export default function StudentExperienceFormStep2({
  opportunityId,
  opportunityCourseId,
  programId,
  programName,
  courseValues,
  defaultCourse,
  stepsBar,
  FormElement,
}: StudentExperienceFormStep2Props) {
  const theme = useTheme();

  // Styles.
  const contentContainerStyles = {
    width: '100%',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    fontSize: '1rem',
  };

  const formFieldStyles = {
    mb: theme.spacing(3),
    display: 'block',
    width: '300px',
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
            selected={defaultCourse}
            sx={formFieldStyles}
          />
        )}
      </Paper>
      <input type="hidden" name="opportunityId" value={ opportunityId } />
      <input type="hidden" name="opportunityCourse" value={ opportunityCourseId } />
      <input type="hidden" name="programId" value={ programId } />
      <Button type="button" variant="outlined" sx={{ mr: 1, float: 'left' }}>Cancel</Button>
      <Button type="submit" variant="contained" sx={{ mr: 1, float: 'right' }}>Continue</Button>
      <Button type="button" variant="outlined" sx={{ mr: 1, float: 'right' }}>Back</Button>
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