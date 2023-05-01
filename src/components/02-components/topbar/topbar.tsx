import { AppBar, Toolbar } from '@mui/material';
import { type ReactNode } from 'react';

type TopBarProps = {
  children: ReactNode;
};

export default function TopBar({ children }: TopBarProps) {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>{children}</Toolbar>
    </AppBar>
  );
}
