import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// export type CardExperiencesListProps = {
//   children: CardExperiencesProps[];
// };

export default function CardExperiencesList ({ children }) {

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