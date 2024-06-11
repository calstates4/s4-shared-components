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

export type StudentExperienceFormStep5Props = {
  opportunityId: string;
  programId: string;
  opportunityCourseId: string;
  healthSafetySelected: string;
  stepsBar: ReactNode;
  FormElement: ElementType;
  term: string;
  estimatedHours: number;
};

export default function StudentExperienceFormStep5({
  opportunityId,
  programId,
  opportunityCourseId,
  healthSafetySelected,
  stepsBar,
  FormElement,
  term,
  estimatedHours,
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
      </Paper>
      <input type="hidden" name="opportunityId" value={opportunityId} />
      <input
        type="hidden"
        name="opportunityCourse"
        value={opportunityCourseId}
      />
      <input type="hidden" name="programId" value={programId} />
      <input
        type="hidden"
        name="healthSafetyInformation"
        value={healthSafetySelected}
      />
      <input type="hidden" name="estimatedHours" value={estimatedHours} />
      <Button
        type="button"
        href="/create-experience"
        variant="outlined"
        sx={{ mr: 1, float: 'left' }}
      >
        Cancel
      </Button>
      <Button type="submit" variant="contained" sx={{ mr: 1, float: 'right' }}>
        Save and Submit
      </Button>
      <Button
        type="button"
        href={`/create-experience/health-safety?opportunity=${opportunityId}&program=${programId}&course=${opportunityCourseId}&healthSafety=${healthSafetySelected}`}
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
