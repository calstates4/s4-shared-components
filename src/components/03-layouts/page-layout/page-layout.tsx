import { Box } from '@mui/material';
import { useState, type ReactElement, type ReactNode } from 'react';
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

type PageLayoutProps = {
  brandingBarLinks: BrandingBarProps;
  sidebarLinks: SidebarMenuProps;
  children: ReactNode | ReactNode[];
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarWidth = 23;

  return (
    <Box>
      <Box
        position="fixed"
        sx={{
          left: 0,
          right: 0,
          top: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <BrandingBar {...brandingBarLinks} />
        <TopBar>
          {brand}
          {context}
        </TopBar>
      </Box>
      <Box display="flex">
        <Sidebar sidebarOpen={sidebarOpen} sidebarWidth={sidebarWidth}>
          <SidebarMenu {...sidebarLinks} />
        </Sidebar>
        <MainContent sidebarOpen={sidebarOpen} sidebarWidth={sidebarWidth}>
          {children}
        </MainContent>
      </Box>
      <SidebarToggle
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarWidth={sidebarWidth}
      />
    </Box>
  );
}
