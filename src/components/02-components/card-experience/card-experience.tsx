import {
  Box,
  Button,
  Paper,
  type SxProps,
  Typography,
  useTheme,
} from '@mui/material';
import CardExperienceHours from '../card-experience-hours/card-experience-hours';

export type CardExperienceProps = {
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

export default function CardExperience({
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
}: CardExperienceProps) {
  const theme = useTheme();

  // Variables according to the variant of the number of items
  const position = cardCount >= 2 ? 'column' : 'row';
  const contentPadding = cardCount >= 2 ? theme.spacing(4) : theme.spacing(5);
  const itemsAlignment = cardCount >= 2 ? 'flex-start' : 'center';
  const stateMarginY = cardCount >= 2 ? theme.spacing(2) : '0';
  const stateMarginX = cardCount >= 2 ? '0' : theme.spacing(2);
  const bodyMarginLeft = cardCount >= 2 ? '0' : theme.spacing(5);
  const bodyMarginBottom = cardCount >= 2 ? theme.spacing(3) : '0';
  const cardNumberVariation = cardCount >= 2 ? 'row' : 'column';
  const bodyWrapper = cardCount >= 2 ? '0' : '1 0 75%';
  const cardHourWrapper = cardCount >= 2 ? '0' : '1 0 25%';
  const containerPosition = cardCount >= 2 ? 'row' : 'column';

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
  const containerStyles: SxProps = {
    p: theme.spacing(3),
    mb: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    minWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      minWidth: '450px',
    },
    [theme.breakpoints.up('md')]: {
      p: contentPadding,
      flexDirection: containerPosition,
      flex: '1 1 100%',
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: '500px',
    },
  };

  const contentStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 'auto',
    [theme.breakpoints.up('md')]: {
      flexDirection: position,
    },
  };

  const bodyWrapperStyles = {
    flex: bodyWrapper,
  };

  const headingWrapperStyles = {
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

  const stateStyles = {
    marginTop: theme.spacing(2),
    backgroundColor: states[state].color,
    px: theme.spacing(1),
    borderRadius: '4px',
    [theme.breakpoints.up('md')]: {
      marginLeft: stateMarginX,
      my: stateMarginY,
    },
  };

  const descriptionContainerStyles = {
    flexBasis: '60%',
    marginRight: bodyMarginLeft,
  };

  const programInfoStyles = {
    flexBasis: '40%',
  };

  const descriptionStyles = {
    display: 'flex',
    flexDirection: 'column',
  };

  const buttonStyles = {
    backgroundColor: 'white',
    border: `2px solid ${theme.palette.primary.main}`,
    color: 'primary.main',
    fontWeight: '700',
    '&:focus, &:hover, &:active': {
      backgroundColor: 'primary.dark',
      color: 'white',
    },
  };

  const infoStyles = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      flexDirection: position,
      marginBottom: bodyMarginBottom,
    },
  };

  const cardHoursStyles = {
    flex: cardHourWrapper,
  };

  // Render funtions.
  const renderedHeading = heading && (
    <Typography sx={headingStyles} variant="h2">
      {heading}
    </Typography>
  );

  const renderedState = state && (
    <Typography sx={stateStyles} variant="body2">
      {states[state].label}
    </Typography>
  );

  const renderedDescription = description && (
    <Box sx={descriptionStyles}>
      <strong>Experience Details:</strong>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Box>
  );

  const renderedProgram = program && (
    <Box>
      <strong>Program: </strong>
      {program}
    </Box>
  );

  const renderedLocation = location && (
    <Box>
      <strong>Location: </strong>
      {location}
    </Box>
  );

  const renderedDate = dateStart && dateEnd && (
    <Box>
      <strong>Date: </strong>
      {dateStart} - {dateEnd}
    </Box>
  );

  return (
    <Paper sx={containerStyles}>
      <Box sx={contentStyles}>
        <Box sx={bodyWrapperStyles}>
          <Box sx={headingWrapperStyles}>
            {renderedHeading}
            {renderedState}
          </Box>
          <Box sx={infoStyles}>
            <Box sx={descriptionContainerStyles}>{renderedDescription}</Box>
            <Box sx={programInfoStyles}>
              {renderedProgram}
              {renderedLocation}
              {renderedDate}
            </Box>
          </Box>
        </Box>
        <Box sx={cardHoursStyles}>
          <CardExperienceHours
            hours={hours}
            cta={hoursCtaUrl}
            position={cardNumberVariation}
          />
          {cardCount >= 2 && (
            <Button sx={{ ...buttonStyles, width: '100%' }} href={cta}>
              {ctaTitle}
            </Button>
          )}
        </Box>
      </Box>
      {cardCount === 1 && (
        <Button sx={{ ...buttonStyles, alignSelf: 'flex-start' }} href={cta}>
          {ctaTitle}
        </Button>
      )}
    </Paper>
  );
}
