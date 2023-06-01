import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ReactNode } from 'react';

export type CardExperiencesListProps = {
  children: ReactNode;
};

export default function CardExperiencesList ({ children }: CardExperiencesListProps) {

  const theme = useTheme();

  // Styles.
  const containerStyle = {
    p: theme.spacing(5), 
    mb: theme.spacing(5), 
  };

  const listStyle = {
    display: 'flex',
    listStyle: 'none',
    overflowX: 'scroll',
  };

  return (
    <Box sx={containerStyle}>
      <Box  sx={listStyle} content="ul">
        {children}
      </Box>
    </Box>
  );
}