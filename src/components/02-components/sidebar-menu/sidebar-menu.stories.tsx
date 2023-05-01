import { Box } from '@mui/material';
import { type Meta, type StoryObj } from '@storybook/react';

import SidebarMenu from './sidebar-menu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/Sidebar Menu',
  component: SidebarMenu,
};

export default meta;

export const Default: StoryObj<typeof SidebarMenu> = {
  render: (args) => (
    <Box bgcolor="secondary.dark" p={2}>
      <SidebarMenu {...args} />
    </Box>
  ),
  args: {
    dashboardURL: '#',
    experiencesURL: '#',
    opportunitiesURL: '#',
    programsURL: '#',
    createExperienceURL: '#',
  },
};
