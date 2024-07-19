import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import Link from '../../01-elements/link/link';

export type LinkProps = {
  text: string,
  url: string,
};

export type CTACardProps = {
  heading?: string;
  links?: Array<LinkProps>;
};

export default function CardQuickLinks({
  heading,
  links
}: CTACardProps) {
  const theme = useTheme();

  // Styles.
  const headingStyles = {
    fontWeight: '700',
    mb: theme.spacing(4),
  };

  const buttonStyles = {
    fontWeight: 700,
    mb: "1rem",
  };

  // Render functions.
  const renderedHeading = heading && (
    <Typography sx={headingStyles} variant="h3" component="h3" color="primary.main">
      {heading}
    </Typography>
  );

  const renderedLinks = links?.length ? (
    links.map((link: LinkProps) => (
      <Box>
        <Button
          variant="outlined"
          component={Link}
          href={link.url}
          sx={buttonStyles}
        >
          {link.text}
        </Button>
      </Box>
    ))
  ) : (
    <Typography>No results found.</Typography>
  );

  return (
    <Paper sx={{ p: "2rem", textAlign: "center" }}>
      {renderedHeading}
      {renderedLinks}
    </Paper>
  );
}
