import { Button, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export type CardExperienceHourProps = {
  hours: number;
  cta: string;
  position: string;
};

export default function CardExperienceHour({ hours, cta, position }: CardExperienceHourProps) {

  const theme = useTheme();

  // Variables according to the variant of position 
  const positionOrientation = position == 'row' ? 'row' : 'column' ;
  const bodySize = position == 'row' ? theme.typography.h3 : theme.typography.h4;
  const spacingText = position == 'row' ? '0' : theme.spacing(2) ;
  const spacingRight = position == 'row' ? theme.spacing(2) : '0' ;
  const paddingSize = position == 'row' ? theme.spacing(2) : theme.spacing(5);

  // Styles.
  const contentStyle = {
    display: 'flex',
    flexDirection: positionOrientation,
    alignItems: 'center',
    justifyContent: 'center',
    p: paddingSize, 
    mb: theme.spacing(5), 
    backgroundColor: 'primary.light'

  };

  const hoursStyles = {
    fontWeight: '700',
    mb: spacingText,
    mr: spacingRight,
  };

  const subHeadingStyles = {
    fontWeight: '700',
    mb: spacingText,
    fontSize: bodySize,
    mr: spacingRight,
  };

  const buttonStyles = {
    backgroundColor: 'primary.main',
    color: 'white',
    fontWeight: '700',
    '&:focus, &:hover, &:active': 
      { backgroundColor: 'primary.dark' }
  };

  // Render funtions.

  const renderedHours =
    <Typography sx={hoursStyles} variant="h1">
        {hours || 0}
    </Typography>
  ;

  const renderedHoursText = 
    <Typography sx={subHeadingStyles} variant="h4">
        {"Hours Logged"}
    </Typography>
  ;

  return (
    <Paper sx={contentStyle}> 
      {renderedHours}
      {renderedHoursText}
      <Button sx={buttonStyles} href={cta}>
        {"Log Time"}
      </Button>
    </Paper>
  );
}