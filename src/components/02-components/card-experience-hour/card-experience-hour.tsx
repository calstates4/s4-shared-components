import { Button, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export type CardExperieceHourProps = {
  heading?: number;
  subHeading?: string;
  cta: string;
  ctaTitle: string;
  position: string;
};

export default function CardExperieceHour({ heading, subHeading, cta, ctaTitle, position }: CardExperieceHourProps) {

  const theme = useTheme();

  // Variables according to the variant of position 
  const positionOrientation = position == 'row' ? 'row' : 'column' ;
  const bodySize = position == 'row' ? theme.typography.h3 : theme.typography.h4;
  const spacingText = position == 'row' ? '0' : theme.spacing(2) ;
  const spacingRight = position == 'row' ? theme.spacing(2) : '0' ;
  const componentSize = position == 'row' ? '600px' : '300px' ;
  const paddingSize = position == 'row' ? theme.spacing(2) : theme.spacing(5);

  // Styles.
  const contentStyle = {
    display: 'flex',
    flexDirection: positionOrientation,
    alignItems: 'center',
    justifyContent: 'center',
    padding: paddingSize, 
    mb: theme.spacing(5), 
    maxWidth: componentSize,
    backgroundColor: 'primary.light'

  };

  const headingStyles = {
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

  const renderedHeading = heading && (
    <Typography sx={headingStyles} variant="h1">
        {heading}
    </Typography>
  );

  const renderedSubheading = subHeading && (
    <Typography sx={subHeadingStyles} variant="h4">
        {subHeading}
    </Typography>
  );

  return (
    <Paper sx={contentStyle}> 
      {renderedHeading}
      {renderedSubheading}
      <Button sx={buttonStyles} href={cta}>
        {ctaTitle}
      </Button>
    </Paper>
  );
}