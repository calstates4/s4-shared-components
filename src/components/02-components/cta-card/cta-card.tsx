import { Button, Paper, Typography, useTheme } from '@mui/material';

export type CTACardProps = {
  heading?: string;
  subHeading?: string;
  description?: string;
  cta: string;
  ctaTitle: string;
};

export default function CtaCard({
  heading,
  subHeading,
  description,
  cta,
  ctaTitle,
}: CTACardProps) {
  const theme = useTheme();

  // Styles.
  const headingStyles = {
    fontWeight: '700',
    mb: theme.spacing(4),
  };

  const subHeadingStyles = {
    fontWeight: '700',
    mb: theme.spacing(1),
  };

  const descriptionStyles = {
    mb: theme.spacing(2),
  };

  const buttonStyles = {
    backgroundColor: 'primary.main',
    color: 'white',
    fontWeight: '700',
    '&:focus, &:hover, &:active': { backgroundColor: 'primary.dark' },
  };

  // Render functions.

  const renderedHeading = heading && (
    <Typography sx={headingStyles} variant="h1">
      {heading}
    </Typography>
  );

  const renderedSubheading = subHeading && (
    <Typography sx={subHeadingStyles} variant="h2">
      {subHeading}
    </Typography>
  );

  const renderedDescription = description && (
    <Typography sx={descriptionStyles}>{description}</Typography>
  );

  return (
    <Paper
      sx={{
        padding: (theme) => theme.spacing(5),
        mb: (theme) => theme.spacing(5),
      }}
    >
      {renderedHeading}
      {renderedSubheading}
      {renderedDescription}
      <Button sx={buttonStyles} href={cta}>
        {ctaTitle}
      </Button>
    </Paper>
  );
}
