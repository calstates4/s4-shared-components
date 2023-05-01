import { Drawer, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { type ReactNode } from 'react';

type SidebarProps = {
  sidebarOpen: boolean;
  sidebarWidth: number;
  children: ReactNode | ReactNode[];
};

export default function Sidebar({
  sidebarOpen,
  sidebarWidth,
  children,
}: SidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Drawer
        variant="persistent"
        open={sidebarOpen}
        anchor={isMobile ? 'bottom' : 'left'}
        sx={{
          [theme.breakpoints.up('md')]: {
            flexBasis: `${sidebarWidth}%`,
            flexShrink: 0,
          },
          '& .MuiDrawer-paper': {
            p: (theme) => theme.spacing(3),
            pb: (theme) => theme.spacing(10),
            backgroundColor: 'secondary.dark',
            [theme.breakpoints.up('md')]: {
              width: `${sidebarWidth}%`,
              boxSizing: 'border-box',
              pt: '124px', // Add Space taken by branding bar + top bar.
            },
          },
        }}
      >
        {children}
      </Drawer>
    </>
  );
}
