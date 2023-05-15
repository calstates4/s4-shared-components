import { Button, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export type BrandProps = {
  heading?: string;
  subHeading?: string;
  cta: string;
  ctaTitle: string;
};

export default function CardNumber({ heading, subHeading, cta, ctaTitle }: BrandProps) {

  const theme = useTheme();

  // Styles.
  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5), 
    mb: theme.spacing(5), 
    maxWidth: '300px',
    backgroundColor: 'primary.light'
  };

  const headingStyles = {
    fontWeight: '700',
    mb: theme.spacing(2),
    fontSize: '48px',
  };

  const subHeadingStyles = {
    fontWeight: '700',
    mb: theme.spacing(2),
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