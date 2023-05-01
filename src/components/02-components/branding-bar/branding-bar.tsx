import AccountIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import HelpIcon from '@mui/icons-material/Help';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  useState,
  type ElementType,
  type MouseEvent,
  type ReactNode,
} from 'react';
import Link from '../../01-elements/link/link';

type BrandingBarLink = {
  url: string;
  title: string;
  isActive?: boolean;
};

export type BrandingBarProps = {
  homeLinks: BrandingBarLink[];
  siteLinks: BrandingBarLink[];
  helpLink: string;
  myAccountLink: string;
  logoutLink: string;
};

export default function BrandingBar({
  homeLinks,
  siteLinks,
  helpLink,
  myAccountLink,
  logoutLink,
}: BrandingBarProps) {
  // Anchor element (toggle button) for the Home menu.
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // Anchor element (toggle button) for the mobile menu.
  const [anchorElMobile, setAnchorElMobile] = useState<null | HTMLElement>(
    null,
  );
  const homeMenuOpen = Boolean(anchorEl);
  const mobileMenuOpen = Boolean(anchorElMobile);

  // State of the Home mobile menu.
  const [homeMenuMobileOpen, setHomeMenuMobileOpen] = useState(false);

  const theme = useTheme();

  // Event handler for Home menu (desktop version).
  function handleHomeMenuToggle(
    event: MouseEvent<HTMLButtonElement | HTMLLIElement>,
  ) {
    setAnchorEl(event.currentTarget);
  }

  // Event handler for the mobile menu.
  function handleMobileMenuToggle(event: MouseEvent<HTMLButtonElement>) {
    setAnchorElMobile(event.currentTarget);
  }

  // Generate Home menu links.
  function homeMenu(isMobile: boolean = false): ReactNode[] {
    const Element: ElementType = isMobile ? ListItem : MenuItem;
    return homeLinks.map((item, index) => (
      <li key={index}>
        <Element
          component={Link}
          href={item.url}
          sx={{
            '&:focus, &:hover, &:active': { backgroundColor: 'primary.light' },
          }}
        >
          {item.title}
        </Element>
      </li>
    ));
  }

  // Generate Site menu links.
  function siteMenu(isMobile: boolean = false): ReactNode[] {
    const styles = isMobile
      ? { '&:focus, &.is-active': { backgroundColor: 'primary.light' } }
      : buttonStyles;
    const Element: ElementType = isMobile ? MenuItem : Button;
    return siteLinks.map((item, index) => (
      <li key={index}>
        <Element
          component={Link}
          href={item.url}
          color="inherit"
          underline="none"
          sx={styles}
          className={item.isActive ? 'is-active' : undefined}
        >
          {item.title}
        </Element>
      </li>
    ));
  }

  // Generate User menu links.
  function userMenu(isMobile: boolean = false): ReactNode[] {
    const userLinks = [
      {
        title: 'Help',
        url: helpLink,
        icon: HelpIcon,
      },
      {
        title: 'My Account',
        url: myAccountLink,
        icon: AccountIcon,
      },
      {
        title: 'Log Out',
        url: logoutLink,
        icon: LogoutIcon,
      },
    ];

    const Element: ElementType = isMobile ? MenuItem : Button;
    const styles = isMobile ? null : buttonStyles;

    return userLinks.map((item, index) => (
      <li key={index}>
        <Element
          component={Link}
          href={item.url}
          color="inherit"
          underline="none"
          sx={styles}
        >
          <item.icon sx={iconStyles} /> {item.title}
        </Element>
      </li>
    ));
  }

  // Styles.
  const buttonStyles = {
    textTransform: 'none',
    borderRadius: 0,
    '&.is-active, &:hover, &:focus': {
      backgroundColor: 'secondary.dark',
    },
  };

  const iconStyles = {
    mr: theme.spacing(1),
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'primary.dark',
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: 0,
        }}
      >
        {/* Mobile menu toggle. */}
        <IconButton
          id="mobile-menu-toggle"
          aria-controls={mobileMenuOpen ? 'mobile-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={mobileMenuOpen ? 'true' : undefined}
          onClick={handleMobileMenuToggle}
          color="inherit"
          sx={{
            display: { xs: 'block', md: 'none' },
            color: 'white',
            lineHeight: 0,
          }}
        >
          <MenuIcon />
        </IconButton>
        {/* Home and Site menus (desktop). */}
        <Box
          component="ul"
          sx={{
            display: { xs: 'none', md: 'flex' },
            p: 0,
            m: 0,
            listStyleType: 'none',
          }}
        >
          <li>
            <Button
              id="home-menu-toggle"
              aria-controls={homeMenuOpen ? 'home-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={homeMenuOpen ? 'true' : undefined}
              onClick={handleHomeMenuToggle}
              color="inherit"
              sx={buttonStyles}
              className={homeMenuOpen ? 'is-active' : undefined}
            >
              Home
              {homeMenuOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </Button>
            <Menu
              id="home-menu"
              anchorEl={anchorEl}
              open={homeMenuOpen}
              onClose={() => {
                setAnchorEl(null);
              }}
              MenuListProps={{
                'aria-labelledby': 'home-menu',
              }}
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              {homeMenu()}
            </Menu>
          </li>
          {siteMenu()}
        </Box>
        {/* User menu (desktop) */}
        <Box
          component="ul"
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
            m: 0,
            p: 0,
            listStyleType: 'none',
          }}
        >
          {userMenu()}
        </Box>
        {/* Mobile menu. */}
        <Menu
          id="mobile-menu"
          anchorEl={anchorElMobile}
          open={mobileMenuOpen}
          onClose={() => {
            setAnchorElMobile(null);
          }}
          MenuListProps={{
            'aria-labelledby': 'mobile-menu',
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiMenu-paper': {
              width: '100%',
              borderRadius: 0,
            },
          }}
        >
          {/* Home menu (mobile). */}
          <MenuItem
            onClick={() => {
              setHomeMenuMobileOpen(!homeMenuMobileOpen);
            }}
            sx={{ justifyContent: 'space-between' }}
          >
            Home
            {homeMenuMobileOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </MenuItem>
          <Collapse
            in={homeMenuMobileOpen}
            timeout="auto"
            component={List}
            sx={{
              p: 0,
              borderBottom: `1px solid ${theme.palette.secondary.main}`,
            }}
          >
            {homeMenu(true)}
          </Collapse>
          {/* Site and User menus (mobile). */}
          {siteMenu(true)}
          {userMenu(true)}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
