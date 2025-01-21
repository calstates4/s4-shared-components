import {
  Box,
  Button,
  Stack,
  Paper,
  Typography,
  useTheme,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';
import { ElementType, ReactNode } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export type StudentExperienceFormStep5Props = {
  experienceId: string;
  term: string;
  estimatedHours: number;
  stepsBar: ReactNode;
  FormElement: ElementType;
  errorMsg?: boolean;
};

export default function StudentExperienceFormStep5({
  experienceId,
  stepsBar,
  FormElement,
  term,
  estimatedHours,
  errorMsg,
}: StudentExperienceFormStep5Props) {
  const theme = useTheme();

  // Styles.
  const contentContainer = {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
  };

  const label = {
    fontWeight: '700',
    color: theme.palette.primary.main,
  };

  // Form.
  const formInner = (
    <>
      <Paper sx={contentContainer}>
        <Typography
          variant="h2"
          color="primary.main"
          sx={{ mb: theme.spacing(2) }}
        >
          Duration
        </Typography>
        <Box>
          <Stack direction="row" spacing={1} sx={{ mb: theme.spacing(2) }}>
            <Typography variant="body1" sx={label}>
              Term:
            </Typography>
            <Typography variant="body1">{term}</Typography>
          </Stack>
          <Stack direction="column" spacing={0} sx={{ mb: theme.spacing(4) }}>
            <Typography variant="body1" sx={label}>
              Time Commitment
            </Typography>
            <Typography variant="body1">
              This location currently has no minimum hours requirement.
            </Typography>
            <Typography variant="body1">
              Please estimate the minimum number of hours you will serve at this
              site.
            </Typography>
          </Stack>
        </Box>
        <OutlinedInput
          type="number"
          id="estimatedHours"
          name="estimatedHours"
          defaultValue={estimatedHours || 0}
          onChange={(e) => {
            e.preventDefault();
          }}
          endAdornment={<InputAdornment position="end">Hours</InputAdornment>}
          inputProps={{ min: 0 }}
        />
        {errorMsg && (
          <Stack direction="row" spacing={1} mt={2} alignItems="center">
            <ErrorOutlineIcon sx={{ color: '#f44336' }} />
            <Typography variant="body2" sx={{ color: 'error.main' }}>
              Please enter a valid number of hours.
            </Typography>
          </Stack>
        )}
      </Paper>
      <Button
        type="button"
        href="/experiences"
        variant="outlined"
        sx={{ mr: 1, float: 'left' }}
      >
        Cancel
      </Button>
      <Button type="submit" variant="contained" sx={{ mr: 1, float: 'right' }}>
        Save
      </Button>
      <Button
        type="button"
        href={`/update-experience/approval?experience=${experienceId}`}
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
      <Paper sx={contentContainer}>
        <Typography
          variant="h1"
          color="primary.main"
          sx={{ mb: theme.spacing(2) }}
        >
          Create your Experience
        </Typography>
        <Typography variant="body1">
          This simple process will guide you through the steps to sign up for
          your selected experiential learning opportunity.
        </Typography>
      </Paper>
      {stepsBar}
      {form}
    </>
  );
}
