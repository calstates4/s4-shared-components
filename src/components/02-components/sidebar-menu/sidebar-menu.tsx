import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { type ElementType } from 'react';
import Link from '../../01-elements/link/link';

interface SidebarBasicLink {
  title: string;
  url: string;
}

interface SidebarIconLink extends SidebarBasicLink {
  icon: ElementType;
}

export type SidebarMenuProps = {
  menuItems: SidebarIconLink[];
  actions: SidebarBasicLink[];
};

export default function SidebarMenu({ menuItems, actions }: SidebarMenuProps) {
  const dividerStyles = {
    color: 'inherit',
    textTransform: 'uppercase',
    '&::before': {
      content: 'none',
    },
    '&::after': {
      width: '100%',
      borderTopColor: 'white',
    },
  };

  return (
    <>
      <List dense={true} sx={{ color: 'white' }}>
        <Divider component="li" textAlign="left" sx={dividerStyles}>
          Menu
        </Divider>
        {menuItems.map((item, index) => (
          <li key={index}>
            <ListItem component={Link} href={item.url} color="inherit">
              <ListItemIcon
                sx={{ minWidth: 0, mr: (theme) => theme.spacing(1) }}
              >
                <item.icon fontSize="small" sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
            </ListItem>
          </li>
        ))}
      </List>
      <List
        dense={true}
        sx={{ color: 'white', mt: (theme) => theme.spacing(3) }}
      >
        <Divider component="li" textAlign="left" sx={dividerStyles}>
          Actions
        </Divider>
        {actions.map((item, index) => (
          <li key={index}>
            <ListItem component={Link} href={item.url} color="inherit">
              <ListItemText sx={{ flexGrow: 0 }}>{item.title}</ListItemText>
              <ListItemIcon sx={{ minWidth: 0 }}>
                <ArrowRightIcon fontSize="small" sx={{ color: 'white' }} />
              </ListItemIcon>
            </ListItem>
          </li>
        ))}
      </List>
    </>
  );
}
