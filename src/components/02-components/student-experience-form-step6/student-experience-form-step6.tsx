import { Box, Button, Stack, Paper, Typography, useTheme } from '@mui/material';
import { ElementType, ReactNode } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export type StudentExperienceFormStep6Props = {
  opportunityId: string;
  programId: string;
  opportunityCourseId: string;
  healthSafetySelected: string;
  stepsBar: ReactNode;
  FormElement: ElementType;
  term: string;
  opportunityName: string;
  programName: string;
  opportunityCourseName: string;
  estimatedHours: number;
};

export default function StudentExperienceFormStep6({
  opportunityId,
  programId,
  opportunityCourseId,
  healthSafetySelected,
  stepsBar,
  FormElement,
  term,
  opportunityName,
  programName,
  opportunityCourseName,
  estimatedHours,
}: StudentExperienceFormStep6Props) {
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
      <input type="hidden" name="timeCommitment" value={estimatedHours} />
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
          sx={{ mb: theme.spacing(1) }}
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
          alignItems="flex-start"
        >
          <Box sx={{ width: '50%' }}>
            <Typography
              variant="h2"
              color="primary.main"
              sx={{ mb: theme.spacing(4) }}
            >
              Summary
            </Typography>
            {opportunityName && (
              <Stack direction="row" spacing={1} sx={{ mb: theme.spacing(1) }}>
                <Typography variant="body1" sx={label}>
                  Opportunity:
                </Typography>
                <Typography variant="body1">{opportunityName}</Typography>
              </Stack>
            )}
            {programName && (
              <Stack direction="row" spacing={1} sx={{ mb: theme.spacing(1) }}>
                <Typography variant="body1" sx={label}>
                  Program:
                </Typography>
                <Typography variant="body1">{programName}</Typography>
              </Stack>
            )}
            {opportunityCourseName && (
              <Stack direction="row" spacing={1} sx={{ mb: theme.spacing(1) }}>
                <Typography variant="body1" sx={label}>
                  Course:
                </Typography>
                <Typography variant="body1">{opportunityCourseName}</Typography>
              </Stack>
            )}
            <Stack direction="row" spacing={1} sx={{ mb: theme.spacing(1) }}>
              <Typography variant="body1" sx={label}>
                Health and Safety Information:
              </Typography>
              <Typography variant="body1">Accepted</Typography>
            </Stack>
            {term && (
              <Stack direction="row" spacing={1} sx={{ mb: theme.spacing(1) }}>
                <Typography variant="body1" sx={label}>
                  Term:
                </Typography>
                <Typography variant="body1">{term}</Typography>
              </Stack>
            )}
            {estimatedHours && (
              <Stack direction="row" spacing={1} sx={{ mb: theme.spacing(1) }}>
                <Typography variant="body1" sx={label}>
                  Time commitments:
                </Typography>
                <Typography variant="body1">
                  {estimatedHours} hours peer week
                </Typography>
              </Stack>
            )}
          </Box>
          <Box
            sx={{
              backgroundColor: '#eceff1',
              borderRadius: theme.spacing(2),
              p: theme.spacing(4),
              width: '50%',
            }}
          >
            <Typography
              variant="h2"
              color="primary.main"
              sx={{ mb: theme.spacing(2) }}
            >
              Congrats! You have created a new experience successfully.
            </Typography>
            <Typography variant="body1">
              We are excited for you to start this new opportunity and hope that
              it leads to fantastic learning outcomes. Keep up the great work
              and continue to strive for growth and development!
            </Typography>
            <Stack direction="row" spacing={1} sx={{ my: theme.spacing(2) }}>
              <Typography variant="body1" sx={label}>
                <ErrorOutlineIcon color="error" />
              </Typography>
              <Typography variant="body1">
                If you need to make any changes or updates to this experience,
                reach out to your campus program office for assistance. You can
                access your process from the experience list.
              </Typography>
            </Stack>
            <Button type="button" variant="contained" href="/experiences">
              VIEW MY EXPERIENCES
            </Button>
          </Box>
        </Stack>
      </Paper>
      {form}
    </>
  );
}
