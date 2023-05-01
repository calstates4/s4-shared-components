import { Typography } from '@mui/material';
import { type Meta, type StoryObj } from '@storybook/react';
import Placeholder from '../placeholder/placeholder';
import Sidebar from './sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
};

export default meta;

export const Default: StoryObj<typeof Sidebar> = {
  render: (args) => (
    <Sidebar {...args}>
      <Placeholder bgDark={true}>
        <Typography variant="h5">Sidebar</Typography>
      </Placeholder>
    </Sidebar>
  ),
  args: {
    sidebarOpen: true,
    sidebarWidth: 25,
  },
};
