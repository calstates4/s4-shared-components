import { Box } from '@mui/material';
import { type ReactNode } from 'react';

export type PlaceholderProps = {
  children: ReactNode | ReactNode[];
  bgDark?: boolean;
};

export default function Placeholder({
  children,
  bgDark = false,
}: PlaceholderProps) {
  return (
    <Box
      sx={{
        margin: (theme) => theme.spacing(2),
        padding: (theme) => theme.spacing(2),
        border: (theme) =>
          `3px dashed ${theme.palette.grey[bgDark ? 50 : 800]}`,
        color: (theme) => (bgDark ? theme.palette.grey[50] : null),
      }}
    >
      {children}
    </Box>
  );
}
