import { Button, Box, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CardExperienceHours from '../card-experience-hours/card-experience-hours';

export type CardExperiencesProps = {
  heading: string;
  state: string;
  description: string;
  program: string;
  dateStart: string;
  dateEnd: string;
  location: string;
  cta: string;
  ctaTitle: string;
  hours: number;
  hoursCtaUrl: string;
  cardCount: number;
};

export default function CardExperiences({
  heading,
  state,
  description,
  program,
  dateStart,
  dateEnd,
  location,
  ctaTitle,
  cta,
  hours,
  hoursCtaUrl,
  cardCount,
}: CardExperiencesProps) {
  const theme = useTheme();

  // Variables according to the variant of the number of items
  const position = cardCount >= 2 ? 'column' : 'row';
  const contentPadding = cardCount >= 2 ? theme.spacing(4) : theme.spacing(5);
  const itemsAlignment = cardCount >= 2 ? 'flex-start' : 'center';
  const stateMarginY = cardCount >= 2 ? theme.spacing(2) : '0';
  const stateMarginX = cardCount >= 2 ? '0' : theme.spacing(2);
  const bodyMarginLeft = cardCount >= 2 ? '0' : theme.spacing(5);
  const bodyMarginBottom = cardCount >= 2 ? theme.spacing(12) : '0';
  const cardNumberVariation = cardCount >= 2 ? 'row' : 'column';

  // Variables to manage workflow status
  const states: { [index: string]: { color: string; label: string } } = {
    draft: {
      color: theme.palette.warning.light,
      label: 'Risk Acknowledgment',
    },
    pending: {
      color: theme.palette.warning.main,
      label: 'Pending',
    },
    approved: {
      color: theme.palette.success.main,
      label: 'Approved',
    },
    declined: {
      color: theme.palette.secondary.main,
      label: 'Declined',
    },
    site_staff: {
      color: theme.palette.error.light,
      label: 'Site Staff',
    },
    duration: {
      color: theme.palette.teal.main,
      label: 'Duration',
    },
    grace_period: {
      color: theme.palette.blue.main,
      label: 'Grace Period',
    },
    published: {
      color: theme.palette.success.light,
      label: 'Active',
    },
    success: {
      color: theme.palette.success.dark,
      label: 'Success',
    },
    incomplete: {
      color: theme.palette.error.main,
      label: 'Incomplete',
    },
  };

  // Styles.
  const containerStyle = {
    p: theme.spacing(3),
    mb: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      p: contentPadding,
      minWidth: '600px',
    },
  };

  const contentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: position,
    },
  };

  const bodyWrapperStyle = {
    flex: '1 0 75%',
  };

  const headingWrapperStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(1),
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: position,
      alignItems: itemsAlignment,
    },
  };

  const headingStyles = {
    fontWeight: '700',
  };

  const stateStyle = {
    marginTop: theme.spacing(2),
    backgroundColor: states[state].color,
    px: theme.spacing(1),
    borderRadius: '4px',
    [theme.breakpoints.up('md')]: {
      marginLeft: stateMarginX,
      my: stateMarginY,
    },
  };

  const descriptionContainerStyle = {
    flexBasis: '60%',
    marginRight: bodyMarginLeft,
  };

  const programInfoStyle = {
    flexBasis: '40%',
  };

  const descriptionStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const buttonStyles = {
    backgroundColor: 'white',
    border: `2px solid ${theme.palette.primary.main}`,
    color: 'primary.main',
    fontWeight: '700',
    '&:focus, &:hover, &:active': { backgroundColor: 'primary.dark' },
  };

  const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      flexDirection: position,
      marginBottom: bodyMarginBottom,
    },
  };

  const cardHoursStyle = {
    flex: '1 0 25%',
  };

  // Render funtions.
  const renderedHeading = heading && (
    <Typography sx={headingStyles} variant="h2">
      {heading}
    </Typography>
  );

  const renderedState = state && (
    <Typography sx={stateStyle} variant="body2">
      {states[state].label}
    </Typography>
  );

  const renderedDescription = description && (
    <Box sx={descriptionStyle}>
      <strong> Experience Details: </strong>
      {description}
    </Box>
  );

  const renderedProgram = program && (
    <Box>
      <strong> Program: </strong>
      {program}
    </Box>
  );

  const renderedLocation = location && (
    <Box>
      <strong> Location: </strong>
      {location}
    </Box>
  );

  const renderedDate = dateStart && dateEnd && (
    <Box>
      <strong> Date: </strong>
      {dateStart} - {dateEnd}
    </Box>
  );

  return (
    <Paper sx={containerStyle}>
      <Box sx={contentStyle}>
        <Box sx={bodyWrapperStyle}>
          <Box sx={headingWrapperStyle}>
            {renderedHeading}
            {renderedState}
          </Box>
          <Box sx={infoStyle}>
            <Box sx={descriptionContainerStyle}>{renderedDescription}</Box>
            <Box sx={programInfoStyle}>
              {renderedProgram}
              {renderedLocation}
              {renderedDate}
            </Box>
          </Box>
        </Box>
        <Box sx={cardHoursStyle}>
          <CardExperienceHours
            hours={hours}
            cta={hoursCtaUrl}
            position={cardNumberVariation}
          />
        </Box>
      </Box>
      <Button sx={buttonStyles} href={cta}>
        {ctaTitle}
      </Button>
    </Paper>
  );
}
