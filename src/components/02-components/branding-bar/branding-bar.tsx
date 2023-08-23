import AccountIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useTheme,
} from '@mui/material';
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
  siteLinks: BrandingBarLink[];
  myAccountLink?: string;
  logoutLink?: string;
  dialogTitle?: string;
  dialogText?: string;
};

export default function BrandingBar({
  siteLinks,
  myAccountLink,
  logoutLink,
  dialogTitle,
  dialogText,
}: BrandingBarProps) {
  // Anchor element (toggle button) for the mobile menu.
  const [anchorElMobile, setAnchorElMobile] = useState<null | HTMLElement>(
    null,
  );
  const mobileMenuOpen = Boolean(anchorElMobile);
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  // Event handler for the mobile menu.
  function handleMobileMenuToggle(event: MouseEvent<HTMLButtonElement>) {
    setAnchorElMobile(event.currentTarget);
  }

  // Generate Site menu links.
  function siteMenu(isMobile = false): ReactNode[] {
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
  function userMenu(isMobile = false): ReactNode[] {
    const userLinks = [];
    const renderedUserMenuItems = [];

    if (myAccountLink) {
      userLinks.push({
        title: 'My Account',
        url: myAccountLink,
        icon: AccountIcon,
      });
    }

    if (logoutLink) {
      userLinks.push({
        title: 'Log Out',
        url: logoutLink,
        icon: LogoutIcon,
      });
    }

    const Element: ElementType = isMobile ? MenuItem : Button;
    const styles = isMobile ? null : buttonStyles;

    renderedUserMenuItems.push(
      <li key="item-help">
        <Button
          fullWidth
          size="large"
          onClick={handleClickOpen}
          sx={helpDialogButton}
          color="inherit"
          startIcon={<HelpIcon />}
        >
          Help
        </Button>
      </li>,
    );

    userLinks.forEach((item, index) =>
      renderedUserMenuItems.push(
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
        </li>,
      ),
    );

    return renderedUserMenuItems;
  }

  // Styles.
  const buttonStyles = {
    textTransform: 'none',
    borderRadius: 0,
    '&.is-active, &:hover, &:focus': {
      backgroundColor: 'secondary.dark',
    },
  };

  const helpDialogButton = {
    textTransform: 'none',
    justifyContent: 'flex-start',
    '.MuiButton-startIcon': {
      ml: 0,
    },
  };

  const iconStyles = {
    mr: theme.spacing(1),
  };

  const dialogContentStyles = {
    '& p': { my: 0, a: { color: 'inherit' } },
  };

  const renderedDialog =
    dialogTitle && dialogText ? (
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        scroll="paper"
        fullWidth
      >
        <DialogTitle variant="h3">{dialogTitle}</DialogTitle>
        <DialogContent
          sx={dialogContentStyles}
          dangerouslySetInnerHTML={{ __html: dialogText }}
        />
      </Dialog>
    ) : undefined;

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
        {renderedDialog}
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
        {/* Site menus (desktop). */}
        <Box
          component="ul"
          sx={{
            display: { xs: 'none', md: 'flex' },
            p: 0,
            m: 0,
            listStyleType: 'none',
          }}
        >
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
          {/* Site and User menus (mobile). */}
          {siteMenu(true)}
          {userMenu(true)}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
