import { Paper, Typography, useTheme } from '@mui/material';
import { type ReactNode } from 'react';

export type WrapperProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function Wrapper({
  title,
  description,
  children,
}: WrapperProps) {
  const theme = useTheme();

  // Styles.
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    p: theme.spacing(3),
    mt: theme.spacing(3),
  };

  let header_title;
  if (title) {
    header_title = <Typography component="h3" variant="h2" mb={3} color="primary.main">{title}</Typography>
  }

  return (
    <Paper elevation={0} sx={containerStyles} component="article">
      {header_title}
      {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
      {children}
    </Paper>
  );
}
