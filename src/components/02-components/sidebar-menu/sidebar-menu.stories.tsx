import DashboardIcon from '@mui/icons-material/Dashboard';
import ExperiencesIcon from '@mui/icons-material/InsertEmoticon';
import ProgramsIcon from '@mui/icons-material/LibraryBooks';
import OpportunitiesIcon from '@mui/icons-material/LocalLibrary';
import { Box } from '@mui/material';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import SidebarMenu from './sidebar-menu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/Sidebar Menu',
  component: SidebarMenu,
};

export default meta;

export const Default: StoryObj<typeof SidebarMenu> = {
  render: (args) => (
    <Box bgcolor="secondary.dark" p={2} width="25%">
      <SidebarMenu {...args} />
    </Box>
  ),
  args: {
    menuItems: [
      {
        title: 'Dashboard',
        url: '#',
        icon: DashboardIcon,
      },
      {
        title: 'Experiences',
        url: '#',
        icon: ExperiencesIcon,
      },
      {
        title: 'Opportunities',
        url: '#',
        icon: OpportunitiesIcon,
      },
      {
        title: 'Programs',
        url: '#',
        icon: ProgramsIcon,
      },
    ],
    actions: [
      {
        title: 'Create an experience',
        url: '#',
      },
    ],
  },
};
