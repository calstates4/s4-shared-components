import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import CardPendingTasks from './card-pending-tasks';

const meta: Meta<typeof CardPendingTasks> = {
  title: 'Components/Card Pending Tasks',
  component: CardPendingTasks,
};

export default meta;

export const Default: StoryObj<typeof CardPendingTasks> = {
  args: {
    ctaLink: 'opportunity',
  }, 
  render: (args) => (
    <Box maxWidth={'400px'}>
      <CardPendingTasks {...args} />
    </Box>
  ),
};
