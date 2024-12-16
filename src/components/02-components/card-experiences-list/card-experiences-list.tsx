import { Box, useTheme, useMediaQuery } from '@mui/material';
import { type ReactNode } from 'react';

export type CardExperiencesListProps = {
  children: ReactNode;
};

export default function CardExperiencesList({
  children,
}: CardExperiencesListProps) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('xl'));

  // Styles.
  const containerStyles = {
    pt: theme.spacing(5),
    px: theme.spacing(0.5),
    pb: theme.spacing(0.5),
    overflow: 'hidden',
    width: '100%',
  };

  const listStyles = {
    display: 'grid',
    gap: theme.spacing(2),
    gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)',
  };

  return (
    <Box sx={containerStyles}>
      <Box sx={listStyles}>{children}</Box>
    </Box>
  );
}
