import { Box, Button, Stack, Paper, Typography, useTheme } from '@mui/material';
import { ElementType, ReactNode } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export type StudentExperienceFormStep6Props = {
  experienceId: string;
  term: string;
  opportunityName: string;
  programName: string;
  courseName?: string;
  estimatedHours: number;
  stepsBar: ReactNode;
  FormElement: ElementType;
};

export default function StudentExperienceFormStep6({
  experienceId,
  opportunityName,
  programName,
  courseName,
  term,
  estimatedHours,
  stepsBar,
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
            {courseName && (
              <Stack direction="row" spacing={1} sx={{ mb: theme.spacing(1) }}>
                <Typography variant="body1" sx={label}>
                  Course:
                </Typography>
                <Typography variant="body1">{courseName}</Typography>
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
                you have two weeks from today's date to do so. You can access
                your process from the experience list and make any necessary
                updates.
              </Typography>
            </Stack>
            <Box sx={{
              display: 'flex',
              justifyContent: 'left',
            }}>
              <Button
                type="button"
                href={`/update-experience/duration?experience=${experienceId}`}
                variant="outlined"
                sx={{ mr: 1, float: 'right' }}
              >
                Edit Experience
              </Button>
              <Button type="button" variant="contained" href="/experiences">
                VIEW MY EXPERIENCES
              </Button>
            </Box>
          </Box>
        </Stack>
      </Paper>
    </>
  );
}
