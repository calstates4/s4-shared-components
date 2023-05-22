import { Button, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export type BrandProps = {
  heading?: string;
  subHeading?: string;
  cta: string;
  ctaTitle: string;
  variation: string;
};

export default function CardNumber({ heading, subHeading, cta, ctaTitle, variation }: BrandProps) {

  const theme = useTheme();

  // Variables according to the variant of position 
  let position;
  let headingSize;
  let bodySize;
  let spacingText;
  let spacingRight;
  let componentSize;
  let paddingSize;

  if (variation === 'row') {
    position = 'row'
    headingSize = '24px'
    bodySize = theme.typography.h3
    spacingText = '0'
    spacingRight = theme.spacing(2)
    componentSize = '600px'
    paddingSize = theme.spacing(2)
  } else {
    position = 'column'
    headingSize = '48px'
    spacingText = theme.spacing(2)
    spacingRight = '0'
    componentSize = '300px'
    paddingSize = theme.spacing(5)
  }

  // Styles.
  const contentStyle = {
    display: 'flex',
    flexDirection: position,
    alignItems: 'center',
    padding: paddingSize, 
    mb: theme.spacing(5), 
    maxWidth: componentSize,
    backgroundColor: 'primary.light'
  };

  const headingStyles = {
    fontWeight: '700',
    mb: spacingText,
    fontSize: headingSize,
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