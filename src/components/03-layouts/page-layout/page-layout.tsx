import { Box, useMediaQuery, Button, useTheme } from '@mui/material';
import { useEffect, useState, type ReactElement, type ReactNode } from 'react';
import SidebarToggle from '../../01-elements/sidebar-toggle/sidebar-toggle';
import BrandingBar, {
  type BrandingBarProps,
} from '../../02-components/branding-bar/branding-bar';
import MainContent from '../../02-components/main-content/main-content';
import SidebarMenu, {
  type SidebarMenuProps,
} from '../../02-components/sidebar-menu/sidebar-menu';
import Sidebar from '../../02-components/sidebar/sidebar';
import TopBar from '../../02-components/topbar/topbar';

export type PageLayoutProps = {
  brandingBarLinks: BrandingBarProps;
  sidebarLinks: SidebarMenuProps;
  children?: ReactNode;
  brand: ReactNode;
  context: ReactNode;
};

export default function PageLayout({
  children,
  brandingBarLinks,
  sidebarLinks,
  brand,
  context,
}: PageLayoutProps): ReactElement {
  const [sidebarOpen, setSidebarOpen] = useState<boolean | undefined>(
    undefined,
  );

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    // Set initial value of sidebarOpen based on breakpoint when the app is initialized.
    if (typeof sidebarOpen === 'undefined') setSidebarOpen(isDesktop);
  }, [isDesktop, sidebarOpen]);

  const sidebarWidth = 23;

  const handleSkipContent = () => {
    // Focus on the main content when the skip content link is clicked
    document.getElementById("main-content")?.focus();
  };

  const skipButtonStyle = {
    margin: theme.spacing(1),

    ':not(:focus):not(:active)': {
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: '1px',
      overflow: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px',
    },
  };

  return (
    <Box>
      <Box
        position="fixed"
        sx={{
          left: 0,
          right: 0,
          top: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'white',
        }}
      >
        <Button
          variant="contained"
          sx={skipButtonStyle}
          tabIndex={0}
          onClick={handleSkipContent}
          aria-label="Skip to main content"
        >
          Skip to main content
        </Button>
        <BrandingBar {...brandingBarLinks} />
        <TopBar>
          {brand}
          {context}
        </TopBar>
      </Box>
      <Box display="flex">
        <Sidebar
          sidebarOpen={sidebarOpen as boolean}
          sidebarWidth={sidebarWidth}
        >
          <SidebarMenu {...sidebarLinks} />
        </Sidebar>
        {/* Main content with tabIndex to make it focusable */}
        <MainContent
          sidebarOpen={sidebarOpen as boolean}
          sidebarWidth={sidebarWidth}
          id="main-content"
          tabIndex={-1}
        >
          {children}
        </MainContent>
      </Box>
      <SidebarToggle
        sidebarOpen={sidebarOpen as boolean}
        setSidebarOpen={setSidebarOpen}
        sidebarWidth={sidebarWidth}
      />
    </Box>
  );
}
