import { Button, Box, Label, Paper, Typography } from '@mui/material';
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
  hoursText, 
  hoursCtaTitle, 
  hoursCtaUrl 
}: BrandProps) {

  const theme = useTheme();

  // Styles.
  const containerStyle = {
    padding: theme.spacing(5), 
    mb: theme.spacing(5), 
  };

  const headingWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  };

  const headingStyles = {
    fontWeight: '700',
  };

  const stateStyle = {
    marginLeft: theme.spacing(2),
    backgroundColor: 'success.main',
    px: theme.spacing(1),
    borderRadius: '4px',
  }

  const buttonStyles = {
    backgroundColor: 'white',
    border: (theme) => `2px solid ${theme.palette.primary.main}`,
    color: 'primary.main',
    fontWeight: '700',
    '&:focus, &:hover, &:active': 
      { backgroundColor: 'primary.dark' }
  };

  const style1 = {
    display: 'flex',
    justifyContent: 'space-between',
  }

  const style2 = {
    padding: '1px'
  }

  const style3 = {
    display: 'flex',
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
    <Typography>
      <label>  Experience Details: </label>
      {description}
    </Typography>
  );
  
  const renderedProgram = program && (
    <Typography>
      <label> Program: </label>
      {program}
    </Typography>
  );

  const renderedLocation = location && (
    <Typography>
      <label> Location: </label>
      {location}
    </Typography>
  );

  const renderedDate = dateStart && dateEnd && (
    <Typography>
      <label> Date: </label>
      {dateStart} - {dateEnd}
    </Typography>
  );

  return (
    <Paper sx={containerStyle}>
      <Box sx={style1}>
        <Box sx={style2}>
          <Box sx={headingWrapperStyle}>
            {renderedHeading}
            {renderedState}
          </Box>
          <Box sx={style3}>
            <Box>
              {renderedDescription}
            </Box>
            <Box>
              {renderedProgram}
              {renderedLocation}
              {renderedDate}
            </Box>
          </Box>
        </Box>

        <CardNumber 
          heading= {hours}
          subHeading={hoursText}
          cta={hoursCtaUrl}
          ctaTitle={hoursCtaTitle}
        />
      </Box> 
      <Button sx={buttonStyles} href={cta}>
        {ctaTitle}
      </Button>
    </Paper>
  );
}