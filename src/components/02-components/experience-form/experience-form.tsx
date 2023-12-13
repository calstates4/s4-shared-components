import * as React from 'react';
import {
  Paper,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  Typography,
  useTheme, Divider, TextField,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState, ElementType, ReactNode } from 'react';
import PropTypes from "prop-types";

export type ExperienceCourseProps = {
  FormElement?: ElementType;
  course: string;
  membersList: string;
  studentsListValues: {
    id: string;
    fullname: string;
  }[];
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
  course,
  membersList,
  studentsListValues,
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

  const [org, setOrg] = React.useState('');
  const [opport, setOpport] = React.useState('');
  const [isValid, setValid] = React.useState(0);
  const validate = () => {
    return org.length & opport.length;
  }
  useEffect(() => {
    const isValid = validate();
    setValid(isValid);
  }, [org, opport]);

  const formInner = (
    <>
      <input type="hidden" name="action" value="createExperience" />
      <input type="hidden" name="course" value={course} />
      <input type="hidden" name="members" value={membersList} />
      <Typography variant="h2" mb={0} color="primary.main">
        You are creating an experience for the following student(s):
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 2 }}>
        {studentsListValues.map((item) => (
          <ListItem sx={{ display: 'list-item' }} key={item.id} disablePadding>
            <ListItemText>{item.fullname}</ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider sx={dividerStyles}/>
      <Typography variant="h4" color="primary.main">
        General details
      </Typography>
      <Box sx={containerStyles}>
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
            defaultValue={org}
            onChange={(e) => setOrg(String(e.target.value))}
          >
            <option key="0" value="0">
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
            value={opport}
            onChange={(e) => setOpport(String(e.target.value))}
          >
            <option key="0" value="0">
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
          id='btn-create'
          variant="contained"
          sx={{
            flexShrink: 0,
            fontWeight: 700,
          }}
          disabled={!isValid}
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
        {form}
      </Box>
    </Paper>
  );
}

ExperienceForm.propTypes = {
  FormElement: PropTypes.element,
  course: PropTypes.string,
  membersList: PropTypes.string,
  studentsListValues: PropTypes.array,
  courseFilterValues: PropTypes.array,
  programFilterValues: PropTypes.array,
  termFilterValues: PropTypes.array,
  organizationFilterValues: PropTypes.array,
  opportunityFilterValues: PropTypes.array,
  currentFilters: PropTypes.array
};
