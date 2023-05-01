import type { Meta, StoryObj } from '@storybook/react';

import SidebarToggle from './sidebar-toggle';

const meta: Meta<typeof SidebarToggle> = {
  title: 'Elements/SidebarToggle',
  component: SidebarToggle,
  argTypes: {
    setSidebarOpen: { action: 'clicked' },
  },
};

export default meta;

export const Default: StoryObj<typeof SidebarToggle> = {
  args: {
    sidebarOpen: false,
    sidebarWidth: 25,
  },
};
