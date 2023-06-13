import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Fab, useMediaQuery, useTheme } from '@mui/material';

type SidebarToggleProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (a: boolean) => void;
  sidebarWidth: number;
};

export default function SidebarToggle({
  sidebarOpen,
  setSidebarOpen,
  sidebarWidth,
}: SidebarToggleProps) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Fab
      aria-label="Open Menu"
      onClick={() => setSidebarOpen(!sidebarOpen)}
      color={sidebarOpen ? 'default' : 'primary'}
      size={isMobile ? 'medium' : 'large'}
      sx={{
        position: 'fixed',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create('left', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(sidebarOpen && {
          left: isMobile ? '50%' : `${sidebarWidth / 2}%`,
          transform: 'translateX(-50%)',
          transition: theme.transitions.create('left,', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }}
    >
      {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
    </Fab>
  );
}
