import DashboardIcon from '@mui/icons-material/Dashboard';
import ExperiencesIcon from '@mui/icons-material/InsertEmoticon';
import CreateExperienceIcon from '@mui/icons-material/KeyboardArrowRight';
import ProgramsIcon from '@mui/icons-material/LibraryBooks';
import OpportunitiesIcon from '@mui/icons-material/LocalLibrary';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Link from '../../01-elements/link/link';

export type SidebarMenuProps = {
  dashboardURL: string;
  experiencesURL: string;
  opportunitiesURL: string;
  programsURL: string;
  createExperienceURL: string;
};

export default function SidebarMenu({
  dashboardURL,
  experiencesURL,
  opportunitiesURL,
  programsURL,
  createExperienceURL,
}: SidebarMenuProps) {
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

  const menuItems = [
    {
      title: 'Dashboard',
      url: dashboardURL,
      icon: DashboardIcon,
    },
    {
      title: 'Experiences',
      url: experiencesURL,
      icon: ExperiencesIcon,
    },
    {
      title: 'Opportunities',
      url: opportunitiesURL,
      icon: OpportunitiesIcon,
    },
    {
      title: 'Programs',
      url: programsURL,
      icon: ProgramsIcon,
    },
  ];

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
        <li>
          <ListItem component={Link} href={createExperienceURL} color="inherit">
            <ListItemText sx={{ flexGrow: 0 }}>
              Create an Experience
            </ListItemText>
            <ListItemIcon sx={{ minWidth: 0 }}>
              <CreateExperienceIcon fontSize="small" sx={{ color: 'white' }} />
            </ListItemIcon>
          </ListItem>
        </li>
      </List>
    </>
  );
}
