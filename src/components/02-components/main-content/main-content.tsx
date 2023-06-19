import { styled, useTheme, type Theme } from '@mui/material/styles';
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
  const Main = styled('main', {
    shouldForwardProp: (prop) => prop !== 'menuOpen' && prop !== 'theme',
  })<{
    menuOpen?: boolean;
    theme: Theme;
  }>(({ theme, menuOpen }) => ({
    flexGrow: 1,
    padding: theme.spacing(2),
    marginLeft: 0,
    paddingTop: '120px', // Space taken by branding bar + topbar + content top padding.
    [theme.breakpoints.up('md')]: {
      marginLeft: `-${sidebarWidth}%`,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(menuOpen && {
        transition: theme.transitions.create('margin,', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    },
  }));

  const theme = useTheme();

  return (
    <Main theme={theme} menuOpen={sidebarOpen}>
      {children}
    </Main>
  );
}
