import { Box, CircularProgress, Typography, useTheme } from '@mui/material';

type LoaderProps = {
  title?: string;
};

export default function Loader({ title }: LoaderProps) {
  const theme = useTheme();

  // Styles.
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyles = {
    color: 'primary.main',
    mb: theme.spacing(2),
  };

  return (
    <Box sx={containerStyles}>
      <Typography component="p" variant="h3" sx={titleStyles}>
        {title ? title : 'Loading...'}
      </Typography>
      <CircularProgress />
    </Box>
  );
}
