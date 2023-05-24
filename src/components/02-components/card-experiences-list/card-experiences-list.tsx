import { Box, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CardExperiences from '../card-expreciences/card-experiences';


export type BrandProps = {
  children: Array<object>,
};

export default function CardExperiencesList ({ 
  children,
}: BrandProps) {

  const theme = useTheme();

  // Styles.
  const containerStyle = {
    padding: theme.spacing(5), 
    mb: theme.spacing(5), 
  };

  const listStyle = {
    display: 'flex',
    listStyle: 'none',
    overflowX: 'scroll',
  };

  // Render funtions.

  
  return (
    <Box sx={containerStyle}>
      <Box  sx={listStyle} content="ul">
        Texto de prueba
      </Box>
    </Box>
  );
}