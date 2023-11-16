import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
  type SxProps,
} from '@mui/material';
import { experienceStatusInfo } from '../../../lib/utils';
import CardExperienceHours from '../card-experience-hours/card-experience-hours';
import Link from '../../01-elements/link/link';

export type CardExperienceProps = {
  id: string;
  heading: string;
  state: string;
  description?: string;
  program: string;
  dateStart: string;
  dateEnd: string;
  location: string;
  cta: string;
  hasPendingForm: boolean;
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
  cta,
  hasPendingForm,
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
  const bodyWrapper = cardCount >= 2 ? 'none' : '1 1 75%';
  const cardHourWrapper = cardCount >= 2 ? 'none' : '0 0 25%';
  const containerPosition = cardCount >= 2 ? 'row' : 'column';

  const states = experienceStatusInfo(theme);

  // Styles.
  const containerStyles: SxProps = {
    p: theme.spacing(3),
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
    [theme.breakpoints.up('md')]: {
      flexDirection: position,
      gap: cardCount >= 2 ? 0 : theme.spacing(5),
    },
    [theme.breakpoints.up('lg')]: {
      gap: cardCount >= 2 ? 0 : theme.spacing(10),
    },
  };

  const bodyWrapperStyles = {
    flex: bodyWrapper,
  };

  const headingWrapperStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    mb: theme.spacing(1),
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
    mb: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      mb: 0,
    },
  };

  const pendingFormStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    my: theme.spacing(3),
    border: `1px solid ${theme.palette.warning.main}`,
    p: theme.spacing(2),
    pr: theme.spacing(3),
    borderRadius: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      flexWrap: 'nowrap',
      mb: theme.spacing(5),
    },
  };

  const iconPendingStyles = {
    color: theme.palette.warning.main,
    marginRight: theme.spacing(1),
  };

  const pendingFormButtonStyles = {
    width: '100%',
    mt: theme.spacing(3),
    mb: cardCount === 1 ? 0 : theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      width: cardCount === 1 ? 'auto' : '100%',
      mt: 0,
      ml: 'auto',
    },
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
    <Paper sx={containerStyles} component="article">
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
          {hasPendingForm &&
            (cardCount === 1 ? (
              <Box sx={pendingFormStyles}>
                <ErrorOutlineIcon sx={iconPendingStyles} />
                <Box>
                  <Typography sx={headingStyles} variant="h4">
                    Pending forms
                  </Typography>
                  <Typography variant="body2">
                    There are pending forms for this experience, please fill all
                    the forms.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  component={Link}
                  href={`${cta}#experience-forms`}
                  sx={pendingFormButtonStyles}
                >
                  Go to Forms
                </Button>
              </Box>
            ) : (
              <Button
                variant="outlined"
                component={Link}
                href={`${cta}#experience-forms`}
                sx={pendingFormButtonStyles}
              >
                Fill Pending Form(s)
              </Button>
            ))}
        </Box>
        <Box sx={cardHoursStyles}>
          <CardExperienceHours
            hours={hours}
            cta={hoursCtaUrl}
            position={cardNumberVariation}
          />
          {cardCount >= 2 && (
            <Button
              sx={{ ...buttonStyles, width: '100%', mt: theme.spacing(4) }}
              href={cta}
            >
              More Details
            </Button>
          )}
        </Box>
      </Box>
      {cardCount === 1 && (
        <Button sx={{ ...buttonStyles, alignSelf: 'flex-start' }} href={cta}>
          More Details
        </Button>
      )}
    </Paper>
  );
}
