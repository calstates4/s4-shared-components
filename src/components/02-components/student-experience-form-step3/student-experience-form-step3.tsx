import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material';
import { ElementType, useState, ReactNode } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export type StudentExperienceFormStep3Props = {
  opportunityId: string;
  opportunityCourseId: string;
  programId: string;
  programName: string;
  defaultCourse: string | null;
  stepsBar: ReactNode;
  FormElement: ElementType;
  courseSelected: string;
  errorMsg: boolean;
  healthSafetyInformation: string;
  healthSafetyInformationValue: string;
};

export default function StudentExperienceFormStep3({
  opportunityId,
  opportunityCourseId,
  programId,
  stepsBar,
  FormElement,
  errorMsg,
  healthSafetyInformation,
  healthSafetyInformationValue,
}: StudentExperienceFormStep3Props) {
  const theme = useTheme();

  const [value, setValue] = useState(healthSafetyInformationValue);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  // Styles.
  const contentContainerStyles = {
    width: '100%',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    fontSize: '1rem',
  };

  const errorStatusLabel = {
    display: 'flex',
    columnGap: theme.spacing(1),
    mb: theme.spacing(1),
    color: '#D32F2F',
    fontSize: '10px',
    fontWeight: '400',
  };

  const formInner = (
    <>
      <Paper sx={contentContainerStyles} component="article">
        <Box sx={{ mb: theme.spacing(3) }}>
          <Typography variant="h2" color="primary.main">
            Health and Safety Information
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" sx={{ mt: theme.spacing(1) }}>
            Organization’s Requirements
          </Typography>
          {healthSafetyInformation ?? (
            <Typography variant="body1" sx={{ mt: theme.spacing(1) }}>
              {healthSafetyInformation}
            </Typography>
          )}
        </Box>
        <Box>
          <FormControl sx={{ my: 2 }} variant="standard">
            <RadioGroup
              aria-labelledby="health-and-safety-information"
              name="health-and-safety-information"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="I have read and understand the above risk associated with this site."
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="I will create the experience but I am unsure about these site requirements and would like to have someone contact me."
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="I don’t accept these site requirements and would like to choose a different Opportunity."
              />
            </RadioGroup>
          </FormControl>
        </Box>
        {errorMsg && (
          <Box sx={errorStatusLabel}>
            <ErrorOutlineIcon sx={{ color: '#D32F2F' }} />
            <Typography>Please select an option to continue.</Typography>
          </Box>
        )}
      </Paper>
      <input type="hidden" name="opportunityId" value={opportunityId} />
      <input
        type="hidden"
        name="opportunityCourse"
        value={opportunityCourseId}
      />
      <input type="hidden" name="programId" value={programId} />
      <input type="hidden" name="selectedValue" value={value} />
      <Button
        type="button"
        href="/create-experience"
        variant="outlined"
        sx={{ mr: 1, float: 'left' }}
      >
        Cancel
      </Button>
      {value === '3' ? (
        <Button
          type="button"
          variant="contained"
          sx={{ mr: 1, float: 'right' }}
          href="/opportunities"
        >
          Choose another opportunity
        </Button>
      ) : (
        <Button
          type="submit"
          variant="contained"
          disabled={value === '' || value === '0'}
          sx={{ mr: 1, float: 'right' }}
        >
          Continue
        </Button>
      )}
      <Button
        type="button"
        href={`/create-experience/program-course?opportunity=${opportunityId}`}
        variant="outlined"
        sx={{ mr: 1, float: 'right' }}
      >
        Back
      </Button>
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
        <Typography
          variant="h1"
          color="primary.main"
          sx={{ mb: theme.spacing(2) }}
        >
          Create your Experience
        </Typography>
        This simple process will guide you through the steps to sign up for your
        selected experiential learning opportunity.
      </Paper>
      {stepsBar}
      {form}
    </>
  );
}
