import { Button, Box, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CardNumber from '../card-experience-hour/card-experience-hour';

export type CardExperiencesProps = {
  heading?: string;
  state: string;
  description?: string;
  program?: string;
  dateStart: string;
  dateEnd: string;
  location?: string;
  cta: string;
  ctaTitle: string;
  hours: number;
  hoursText: string;
  hoursCtaTitle: string;
  hoursCtaUrl: string;
  cardCount: number;
};

export default function CardExperiences ({ 
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
  hoursText, 
  hoursCtaTitle, 
  hoursCtaUrl,
  cardCount,
}: CardExperiencesProps) {

  const theme = useTheme();

  // Variables according to the variant of the number of items
  const position = cardCount >= 2 ? 'column' : 'row';
  const contentWidth = cardCount >= 2 ? theme.spacing(4) :theme.spacing(5);
  const itemsAlignment = cardCount >= 2 ? 'flex-start' : 'center';
  const stateMarginY = cardCount >= 2 ? theme.spacing(2) : '0';
  const stateMarginX = cardCount >= 2 ? '0' : theme.spacing(2);
  const bodyWidth = cardCount >= 2 ? '100' : '60%';
  const bodyMarginBottom = cardCount >= 2 ? theme.spacing(12) : '0';
  const cardNumberVariation = cardCount >= 2 ? 'row' : 'column';
  const stateBackgorund = state == 'publishied' ? 'success.main' : 'warning.main';
  const stateText= state == 'publishied' ? 'Approved' : 'Hold';


  // Styles.
  const containerStyle = {
    p: theme.spacing(3), 
    mb: theme.spacing(5), 
    [theme.breakpoints.up('md')]: {
      p: contentWidth, 
      height: 'calc(100% - 1rem)',
      minWidth: '600px',
    }
  };

  const contentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: position,
    }
  }

  const bodyWrapperStyle = {
    flex: '1 0 75%',
  }

  const headingWrapperStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(1),
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: position,
      alignItems: itemsAlignment,
    }
  };

  const headingStyles = {
    fontWeight: '700',
  };

  const stateStyle = {
    marginTop: theme.spacing(2),
    backgroundColor: stateBackgorund,
    px: theme.spacing(1),
    borderRadius: '4px',
    [theme.breakpoints.up('md')]: {
      marginLeft: stateMarginX,
      my: stateMarginY,
    }
  }

  const descriptionContainerStyle = {
    maxWidth: bodyWidth,
    marginRight: theme.spacing(5),
  }

  const descriptionStyle = {
   display: 'flex',
   flexDirection: 'column',
  }


  const buttonStyles = {
    backgroundColor: 'white',
    border: `2px solid ${theme.palette.primary.main}`,
    color: 'primary.main',
    fontWeight: '700',
    '&:focus, &:hover, &:active': 
      { backgroundColor: 'primary.dark' }
  };

  const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: position,
      marginBottom: bodyMarginBottom,
    }
  }

  const cardHoursStyle = {
    flex: '1 0 25%'
  }

  // Render funtions.

  const renderedHeading = heading && (
    <Typography sx={headingStyles} variant="h2">
        {heading}
    </Typography>
  );

  const renderedState = state && (
    <Typography sx={stateStyle} variant="body2">
        {stateText}
    </Typography>
  );

  const renderedDescription = description && (
    <Box sx={descriptionStyle}>
      <strong>  Experience Details: </strong>
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
            <Box sx={descriptionContainerStyle}>
              {renderedDescription}
            </Box>
            <Box>
              {renderedProgram}
              {renderedLocation}
              {renderedDate}
            </Box>
          </Box>
        </Box>
        <Box sx={cardHoursStyle}>
          <CardNumber 
            heading= {hours}
            subHeading={hoursText}
            cta={hoursCtaUrl}
            ctaTitle={hoursCtaTitle}
            position= {cardNumberVariation}
          />
        </Box>
      </Box> 
      <Button sx={buttonStyles} href={cta}>
        {ctaTitle}
      </Button>
    </Paper>
  );
}
