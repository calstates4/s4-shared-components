import {
  Paper,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  Typography,
  useTheme, Divider, TextField,
} from '@mui/material';
import { ElementType, ReactNode } from 'react';
import PropTypes from "prop-types";

export type ExperienceCourseProps = {
  FormElement?: ElementType;
  courseFilterValues: {
    id: string;
    label: string;
  }[];
  programFilterValues: {
    id: string;
    label: string;
  }[];
  termFilterValues: {
    id: string;
    label: string;
  }[];
  organizationFilterValues: {
    id: string;
    label: string;
  }[];
  opportunityFilterValues: {
    id: string;
    label: string;
  }[];
  currentFilters: {
    course: string | null;
    program: string | null;
    term: string | null;
    organization: string | null;
    opportunity: string | null;
    estimated: string | null;
  };
};

export default function ExperienceForm({
   FormElement,
   courseFilterValues,
   programFilterValues,
   termFilterValues,
   organizationFilterValues,
   opportunityFilterValues,
   currentFilters,
 }: ExperienceCourseProps) {
  const theme = useTheme();

  // Styles.
  const contentContainerStyles = {
    width: '100%',
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  };

  const containerStyles = {
    [theme.breakpoints.down('md')]: {
      pt: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      pt: theme.spacing(2),
      pb: theme.spacing(2),
    },
  };

  const formItemStyles = {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      mr: theme.spacing(0),
      pt: theme.spacing(2),
      pb: theme.spacing(2),
    },
    [theme.breakpoints.up('sm')]: {
      flex: '0 0 25%',
      mr: theme.spacing(2),
      mb: theme.spacing(2),
    },
  };

  const dividerStyles = {
    width: '100%',
    mb: theme.spacing(2),
  };

  const btnWrapper = {
    mt: theme.spacing(2),
    mb: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    'button': {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        mb: theme.spacing(2),
      }
    }
  };

  const formInner = (
    <>
      <Typography variant="h4" color="primary.main">
        General details
      </Typography>
      <Box sx={containerStyles}>
        <FormControl size="small" sx={formItemStyles}>
          <InputLabel id="course-select-label">Course</InputLabel>
          <Select
            id="course-select"
            label="Course"
            native={true}
            name="course"
            defaultValue={currentFilters.course}
            disabled
          >
            {courseFilterValues.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={formItemStyles}>
          <InputLabel id="program-select-label">Program</InputLabel>
          <Select
            id="program-select"
            label="Program"
            native={true}
            name="program"
            defaultValue={currentFilters.program}
            disabled
          >
            {programFilterValues.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={formItemStyles}>
          <InputLabel id="term-select-label">Term</InputLabel>
          <Select
            id="term-select"
            label="Term"
            native={true}
            name="term"
            defaultValue={currentFilters.term}
            disabled
          >
            {termFilterValues.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Divider sx={dividerStyles} />
      <Typography variant="h4" color="primary.main">
        Opportunity details
      </Typography>
      <Box sx={containerStyles}>
        <FormControl size="small" sx={formItemStyles}>
          <InputLabel id="organization-select-label">Organization</InputLabel>
          <Select
            id="organization-select"
            label="Organization"
            native={true}
            name="organization"
            defaultValue={currentFilters.course}
          >
            <option key={0} value={0}>
              Organization name
            </option>
            {organizationFilterValues.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={formItemStyles}>
          <InputLabel id="opportunity-select-label">Opportunity</InputLabel>
          <Select
            id="opportunity-select"
            label="Opportunity"
            native={true}
            name="opportunity"
            defaultValue={currentFilters.program}
          >
            <option key={0} value={0}>
              Opportunity name
            </option>
            {opportunityFilterValues.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={containerStyles}>
        <TextField
          id="estimate-text"
          name="estimate-text"
          type="number"
          label="Estimated total hours"
          defaultValue={currentFilters.estimated ?? undefined}
          inputProps={{
            step: 1,
            min: 0,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box sx={btnWrapper}>
        <Button variant="outlined" type="button">
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            flexShrink: 0,
            fontWeight: 700,
          }}
          type="submit">
          Create experience
        </Button>
      </Box>
    </>
  );

  const form = FormElement ? (
    <FormElement>{formInner}</FormElement>
  ) : (
    <form>{formInner}</form>
  );

  return (
    <Paper sx={contentContainerStyles} component="article">
      <Box>
        <Typography variant="h2" mb={2} color="primary.main">
          You are creating an experience for the following student(s):
        </Typography>
      </Box>
      <Divider sx={dividerStyles} />
      <Box>
        {form}
      </Box>
    </Paper>
  );
}

ExperienceForm.propTypes = {
  FormElement: PropTypes.element,
  courseFilterValues: PropTypes.array,
  programFilterValues: PropTypes.array,
  termFilterValues: PropTypes.array,
  organizationFilterValues: PropTypes.array,
  opportunityFilterValues: PropTypes.array,
  currentFilters: PropTypes.array
};