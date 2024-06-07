import { Box, Button, Stack, Paper, Typography, useTheme } from '@mui/material';
import { ElementType, ReactNode } from 'react';

export type StudentExperienceFormStep4Props = {
  opportunityId: string;
  opportunityName: string;
  opportunityCourseId: string;
  opportunityCourseName: string;
  programId: string;
  programName: string;
  stepsBar: ReactNode;
  FormElement: ElementType;
  healthSafetySelected: string;
  approvalState: boolean;
};

export default function StudentExperienceFormStep4({
  opportunityId,
  opportunityName,
  opportunityCourseId,
  opportunityCourseName,
  programId,
  programName,
  stepsBar,
  FormElement,
  healthSafetySelected,
  approvalState,
}: StudentExperienceFormStep4Props) {
  const theme = useTheme();

  const approvalStatus = approvalState ? 'approved' : 'reviewing';

  const approvalStates: Record<
    string,
    {
      label: string;
      backgroundColor: string;
    }
  > = {
    approved: {
      label: 'approved',
      backgroundColor: 'success.dark',
    },
    reviewing: {
      label: 'reviewing',
      backgroundColor: 'warning.main',
    },
  };

  // Styles.
  const contentContainer = {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
  };

  const statusStyles = {
    borderRadius: theme.spacing(0.5),
    textTransform: 'uppercase',
    fontSize: '0.875rem',
    fontWeight: '700',
    px: theme.spacing(1),
    py: theme.spacing(0.5),
    mt: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      mt: 0,
    },
  };

  // Form.
  const formInner = (
    <>
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
      <Button
        type="button"
        href="/create-experience"
        variant="outlined"
        sx={{ mr: 1, float: 'left' }}
      >
        Cancel
      </Button>
      <Button
        type="submit"
        variant="contained"
        sx={{ mr: 1, float: 'right' }}
        disabled={approvalState ? false : true}
      >
        Continue
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
      <Paper sx={contentContainer}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h2"
            color="primary.main"
            sx={{ mb: theme.spacing(1) }}
          >
            You have successfully started your Experience creation process.
          </Typography>
          <Typography
            sx={{
              ...statusStyles,
              backgroundColor: approvalStates[approvalStatus].backgroundColor,
            }}
            component="span"
          >
            {approvalStates[approvalStatus].label}
          </Typography>
        </Stack>
        <Box>
          <Typography variant="body1" sx={{ mb: theme.spacing(2) }}>
            We are reviewing the details and once approved, you’ll be able to
            continue the process to finalize your Experience.
          </Typography>
          <Typography variant="h3" sx={{ mb: theme.spacing(2) }}>
            Experience in Review
          </Typography>
          {opportunityName && (
            <Stack direction="row" spacing={1}>
              <Typography variant="body1" sx={{ fontWeight: '700' }}>
                Opportunity:
              </Typography>
              <Typography variant="body1">{opportunityName}</Typography>
            </Stack>
          )}
          {programName && (
            <Stack direction="row" spacing={1}>
              <Typography variant="body1" sx={{ fontWeight: '700' }}>
                Program:
              </Typography>
              <Typography variant="body1">{programName}</Typography>
            </Stack>
          )}
          {opportunityCourseName && (
            <Stack direction="row" spacing={1}>
            <Typography variant="body1" sx={{ fontWeight: '700' }}>
              Course:
            </Typography>
            <Typography variant="body1">{opportunityCourseName}</Typography>
          </Stack>
          )}
          <Stack direction="row" spacing={1}>
            <Typography variant="body1" sx={{ fontWeight: '700' }}>
              Health and Safety Information:
            </Typography>
            <Typography variant="body1">Accepted</Typography>
          </Stack>
        </Box>
      </Paper>
      {form}
    </>
  );
}
