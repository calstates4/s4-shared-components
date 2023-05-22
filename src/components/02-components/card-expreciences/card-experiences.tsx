import { Button, Box, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CardNumber from '../card-number/card-number';

export type BrandProps = {
  heading?: string;
  state: string;
  description?: string;
  program?: string;
  dateStart: string;
  dateEnd: string;
  location?: string;
  cta: string;
  ctaTitle: string;
  hours: string;
  hoursText: string;
  hoursCtaTitle: string;
  hoursCtaUrl: string;
  variation: number;
  cardNumberVariation: string;
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
  variation,
  cardNumberVariation, 
}: BrandProps) {

  const theme = useTheme();

  // Variables according to the variant of the number of items
  let position;
  let itemsAligmend;
  let stateMargin;
  let stateMarginX;
  let infoMargin;
  let bodyWidth;


  if (variation) {
    if(variation >= 2) {
      position = 'column';
      cardNumberVariation = 'row';
      itemsAligmend = 'flex-start';
      stateMargin = theme.spacing(2);
      stateMarginX = '0'
      infoMargin = theme.spacing(8)
      bodyWidth = '100%'
    } else {
      position = 'row';
      cardNumberVariation = 'column';
      itemsAligmend= 'center';
      stateMargin= '0';
      stateMarginX = theme.spacing(2);
      infoMargin = '0';
      bodyWidth= '60%'
    }
  }

  // Styles.
  const containerStyle = {
    padding: theme.spacing(3), 
    mb: theme.spacing(5), 
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5), 
      height: 'calc(100% - 1rem)',
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
    padding: '1px'
  }

  const headingWrapperStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(1),
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: position,
      alignItems: itemsAligmend,
    }
  };

  const headingStyles = {
    fontWeight: '700',
  };

  const stateStyle = {
    marginTop: theme.spacing(2),
    backgroundColor: 'success.main',
    px: theme.spacing(1),
    borderRadius: '4px',
    [theme.breakpoints.up('md')]: {
      marginLeft: stateMarginX,
      my: stateMargin,
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
    border: (theme) => `2px solid ${theme.palette.primary.main}`,
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
      marginBottom: infoMargin,
    }
  }

  const cardHoursStyle = {
    flex: '45%'
  }

  // Render funtions.

  const renderedHeading = heading && (
    <Typography sx={headingStyles} variant="h2">
        {heading}
    </Typography>
  );

  const renderedState = state && (
    <Typography sx={stateStyle} variant="body2">
        {state}
    </Typography>
  );

  const renderedDescription = description && (
    <Typography sx={descriptionStyle}>
      <label style={{fontWeight: '700'}}>  Experience Details: </label>
      {description}
    </Typography>
  );
  
  const renderedProgram = program && (
    <Typography>
      <label style={{fontWeight: '700'}}> Program: </label>
      {program}
    </Typography>
  );

  const renderedLocation = location && (
    <Typography>
      <label style={{fontWeight: '700'}}> Location: </label>
      {location}
    </Typography>
  );

  const renderedDate = dateStart && dateEnd && (
    <Typography>
      <label style={{fontWeight: '700'}}> Date: </label>
      {dateStart} - {dateEnd}
    </Typography>
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
            variation= {cardNumberVariation}
          />
        </Box>
      </Box> 
      <Button sx={buttonStyles} href={cta}>
        {ctaTitle}
      </Button>
    </Paper>
  );
}
