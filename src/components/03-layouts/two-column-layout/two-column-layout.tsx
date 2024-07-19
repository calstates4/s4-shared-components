import { Box, Stack, Divider, useTheme } from '@mui/material';
import { type ReactNode } from 'react';

export type TwoColumnLayoutProps = {
  firstContent?: ReactNode,
  secondContent?: ReactNode,
};

export default function TwoColumnLayout({firstContent, secondContent}: TwoColumnLayoutProps) {
  const border = {
    [useTheme().breakpoints.down('lg')]: {
      borderBottom: '1px solid #ccc',
    }
  };

  return (
    <Stack
      direction={{ sm: 'column', lg: 'row' }}
      justifyContent="space-between"
      alignItems="stretch"
      spacing={{ sm: 2, lg: 0 }}
      sx={{
        flexWrap: 'nowrap',
      }}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box sx={{
        p: "1rem",
        flexGrow: '4',
        ...border }}>
        {firstContent}
      </Box>
      <Box sx={{
        p: "1rem",
        textAlign: "center",
        flexGrow: '1',
      }}>
        {secondContent}
      </Box>
    </Stack>
  );
}
