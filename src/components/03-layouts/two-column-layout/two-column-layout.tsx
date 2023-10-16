import { Box } from '@mui/material';
import { type ReactNode } from 'react';

export type TwoColumnLayoutProps = {
  firstContent?: ReactNode,
  secondContent?: ReactNode,
};

export default function TwoColumnLayout({firstContent, secondContent}: TwoColumnLayoutProps) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      alignContent: 'flex-start',
      alignItems: 'stretch',
    }}>
      <Box sx={{
        p: "1rem",
        flexGrow: '4',
        borderRight: '1px solid grey'
      }}>
        {firstContent}
      </Box>
      <Box sx={{
        p: "1rem",
        textAlign: "center",
        flexGrow: '1',
      }}>
        {secondContent}
      </Box>
    </Box>
  );
}
