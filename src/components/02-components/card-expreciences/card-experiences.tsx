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
  variation 
}: BrandProps) {

  const theme = useTheme();

  // Variables according to the variant of the number of items
  let position;

  if (variation) {
    if(variation >= 2) {
      position = 'column';
    } else {
      position = 'row';
    }
  }

  console.log(position);

  // Styles.
  const containerStyle = {
    padding: theme.spacing(3), 
    mb: theme.spacing(5), 
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5), 
    }
  };

  const contentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: position,
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
    flexDirection: position,
    [theme.breakpoints.up('md')]: {
      flexDirection: position,
      alignItems: 'center',
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
      marginLeft: theme.spacing(2),
      marginTop: 0,
    }
  }

  const descriptionContainerStyle = {
    maxWidth: '50%',
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
    flexDirection: position,
    [theme.breakpoints.up('md')]: {
      flexDirection: position,
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
          />
        </Box>
      </Box> 
      <Button sx={buttonStyles} href={cta}>
        {ctaTitle}
      </Button>
    </Paper>
  );
}
