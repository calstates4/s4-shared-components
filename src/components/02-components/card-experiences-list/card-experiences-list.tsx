import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { useEffect, type ReactNode, useState } from 'react';

export type CardExperiencesListProps = {
  children: ReactNode;
};

export default function CardExperiencesList({
  children,
}: CardExperiencesListProps) {
  const theme = useTheme();

  const [width, setWidth] = useState(0);
  useEffect(() => {
    const updateWindowsDimentions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    updateWindowsDimentions();
    window.addEventListener('resize', updateWindowsDimentions);
    return () => window.removeEventListener('resize', updateWindowsDimentions);
  }, []);

  const componentWidth = `${width || 0}px`;

  // Styles.
  const containerStyle = {
    pt: theme.spacing(5),
    mb: theme.spacing(5),
    maxWidth: `calc(${componentWidth} - ${theme.spacing(12)})`,
  };

  const listStyle = {
    display: 'flex',
    listStyle: 'none',
    overflowX: 'scroll',
    gap: theme.spacing(2),
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={listStyle} content="ul">
        {children}
      </Box>
    </Box>
  );
}
