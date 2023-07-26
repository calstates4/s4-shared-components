import { Box, useTheme } from '@mui/material';
import { type ReactNode } from 'react';

export type CardExperiencesListProps = {
  children: ReactNode;
};

export default function CardExperiencesList({
  children,
}: CardExperiencesListProps) {
  const theme = useTheme();

  // Styles.
  const containerStyles = {
    pt: theme.spacing(5),
    px: theme.spacing(0.5),
    pb: theme.spacing(0.5),
    overflowX: 'auto',
    width: '100%',
  };

  const listStyles = {
    display: 'flex',
    gap: theme.spacing(2),
  };

  return (
    <Box sx={containerStyles}>
      <Box sx={listStyles}>{children}</Box>
    </Box>
  );
}
