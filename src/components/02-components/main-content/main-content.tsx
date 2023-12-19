import { Box, useTheme } from '@mui/material';
import { type ReactNode } from 'react';

type MainContentProps = {
  children: ReactNode;
  sidebarOpen: boolean;
  sidebarWidth: number;
};

export default function MainContent({
  children,
  sidebarOpen,
  sidebarWidth,
}: MainContentProps) {
  const theme = useTheme();

  // Styles.
  const mainStyles = {
    flexGrow: 1,
    height: '100vh',
    padding: theme.spacing(2),
    marginLeft: 0,
    paddingTop: '120px', // Space taken by branding bar + topbar + content top padding.
    overflowX: 'hidden',
    [theme.breakpoints.up('md')]: {
      marginLeft: `-${sidebarWidth}%`,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(sidebarOpen && {
        transition: theme.transitions.create('margin,', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    },
  };

  return (
    <Box component="main" sx={mainStyles}>
      {children}
    </Box>
  );
}
