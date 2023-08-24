import { Box, Paper, Typography, useTheme } from '@mui/material';

type PartnerOnboardingConfirmProps = {
  title: string;
  status: {
    text: string;
    bgcolor: string;
    fgcolor: string;
  };
  message: string;
};

export default function PartnerOnboardingConfirm({
  title,
  status,
  message,
}: PartnerOnboardingConfirmProps) {
  const theme = useTheme();
  // Styles.
  const wrapperStyles = {
    py: theme.spacing(4),
    px: theme.spacing(6),
    fontSize: 16,
  };

  const titleWrapperStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: theme.spacing(1),
    mb: theme.spacing(2),
  };

  const statusStyles = {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 700,
    px: theme.spacing(1),
    borderRadius: theme.spacing(0.5),
  };

  return (
    <Paper sx={wrapperStyles}>
      <Box sx={titleWrapperStyles}>
        <Typography variant="h2" color="primary.main">
          {title}
        </Typography>
        <Typography
          component="span"
          bgcolor={status.bgcolor}
          color={status.fgcolor}
          sx={statusStyles}
        >
          {status.text}
        </Typography>
      </Box>
      <div dangerouslySetInnerHTML={{ __html: message }} />
    </Paper>
  );
}
