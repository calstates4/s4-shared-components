import { Button, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export type BrandProps = {
  heading: string | null;
  subHeading: string | null;
  description: string | null;
  cta: string;
  // linkURL?: string;
};

export default function CtaCard({ heading, subHeading, description, cta = '/',  }: BrandProps) {

  const theme = useTheme();

  // Styles
  const headingStyles = {
    fontSize: '36px',
    fontWeight: '800',
    mb: theme.spacing(4),
  };

  const subHeadingStyles = {
    fontSize: '24px',
    fontWeight: '800',
    mb: theme.spacing(1),
  };

  const descriptionStyles = {
    fontSize: '16px',
    mb: theme.spacing(2),
  };

  const buttonStyles = {
    backgroundColor: 'primary.main',
    color: 'white',
    fontWeight: '800',
    '&:focus, &:hover, &:active': 
      { backgroundColor: 'primary.dark' }
  };

  // Rendered

  const renderedHeading = heading && (
    <Typography sx={headingStyles}>
        {heading}
    </Typography>
  );

  const renderedSubheading = subHeading && (
    <Typography sx={subHeadingStyles}>
        {subHeading}
    </Typography>
  );

  const renderedDescription = description && (
    <Typography sx={descriptionStyles}>
        {description}
    </Typography>
  );

  return (
    <Paper sx={{ padding: (theme) => theme.spacing(3) }}>
      {renderedHeading}
      {renderedSubheading}
      {renderedDescription}
      <Button sx={buttonStyles}>
        {cta}
      </Button>
    </Paper>
  );
}