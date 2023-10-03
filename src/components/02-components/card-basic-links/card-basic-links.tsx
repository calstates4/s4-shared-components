import { Box, Paper, Typography, useTheme } from '@mui/material';
import Link from '../../01-elements/link/link';

export type LinkProps = {
  text: string,
  url: string,
};

export type CTACardProps = {
  heading?: string;
  links?: Array<LinkProps>;
};

export default function CardBasicLinks({
  heading,
  links
}: CTACardProps) {
  const theme = useTheme();

  // Styles.
  const headingStyles = {
    fontWeight: '700',
    mb: theme.spacing(4),
  };

  const linkStyles = {
    textDecoration: 'none',
  };

  // Render functions.
  const renderedHeading = heading && (
    <Typography sx={headingStyles} variant="h2" component="h2" color="primary.main">
      {heading}
    </Typography>
  );

  const renderedLinks = links?.length ? (
    links.map((link: LinkProps) => (
      <Box sx={{ pb: "1rem" }}>
        <Link href={link.url} color="primary.main" sx={linkStyles}>
          {link.text}
        </Link>
      </Box>
    ))
  ) : (
    <Typography>No results found.</Typography>
  );

  return (
    <Paper sx={{ p: "2rem", textAlign: "center" }}>
      <Typography variant="h2" component="h2" color="primary.main" sx={{ mb: "2rem" }}>
        {renderedHeading}
      </Typography>
      {renderedLinks}
    </Paper>
  );
}




