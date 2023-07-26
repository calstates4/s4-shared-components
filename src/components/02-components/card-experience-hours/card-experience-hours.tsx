import { Button, Box, Paper, Typography, useTheme } from '@mui/material';

export type CardExperienceHoursProps = {
  hours: number;
  cta: string;
  position: string;
};

export default function CardExperienceHours({
  hours,
  cta,
  position,
}: CardExperienceHoursProps) {
  const theme = useTheme();

  // Variables according to the variant of position
  const positionOrientation = position === 'row' ? 'row' : 'column';
  const bodySize =
    position === 'row' ? theme.typography.h3 : theme.typography.h4;
  const spacingText = position === 'row' ? '0' : theme.spacing(2);
  const spacingRight = position === 'row' ? theme.spacing(2) : '0';
  const paddingSize = position === 'row' ? theme.spacing(2) : theme.spacing(5);

  // Styles.
  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    p: paddingSize,
    mb: theme.spacing(5),
    backgroundColor: 'primary.light',
    [theme.breakpoints.up('sm')]: {
      flexDirection: positionOrientation,
    },
  };

  const textStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: positionOrientation,
    },
  };

  const hoursStyles = {
    fontWeight: '700',
    mb: spacingText,
    [theme.breakpoints.up('sm')]: {
      mr: spacingRight,
    },
  };

  const subHeadingStyles = {
    mb: theme.spacing(2),
    fontSize: bodySize,
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      mb: spacingText,
      mr: spacingRight,
    },
  };

  const buttonStyles = {
    backgroundColor: 'primary.main',
    color: 'white',
    fontWeight: '700',
    '&:focus, &:hover, &:active': { backgroundColor: 'primary.dark' },
  };

  // Render functions.
  const renderedHours = (
    <Typography sx={hoursStyles} variant="h1">
      {hours || 0}
    </Typography>
  );

  const renderedHoursText = (
    <Typography sx={subHeadingStyles} variant="h4">
      Hours Logged
    </Typography>
  );

  return (
    <Paper sx={contentStyles}>
      <Box sx={textStyles}>
        {renderedHours}
        {renderedHoursText}
      </Box>
      <Button sx={buttonStyles} href={cta}>
        Log Time
      </Button>
    </Paper>
  );
}
