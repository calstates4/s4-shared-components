import { Box, useTheme } from '@mui/material';
import { type ReactNode } from 'react';

export type TwoColumnLayoutFacultyProps = {
  firstContent?: ReactNode,
  secondContent?: ReactNode,
};

export default function TwoColumnLayoutFaculty({firstContent, secondContent}: TwoColumnLayoutFacultyProps) {
  const theme = useTheme();

  const twoColStyles = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "30px",
    [theme.breakpoints.up('sm')]: {
      display: "grid",
      gridTemplateColumns: "1fr 309px",
      gap: "67px",
    },
  };

  return (
    <Box
      sx={twoColStyles}
    >
      <Box>
        {firstContent}
      </Box>
      <Box>
        {secondContent}
      </Box>
    </Box>
  );
}
