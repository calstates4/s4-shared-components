import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import CardPendingTask from './card-pending-task';

const meta: Meta<typeof CardPendingTask> = {
  title: 'Components/Card Pending Task',
  component: CardPendingTask,
};

export default meta;

export const Default: StoryObj<typeof CardPendingTask> = {
  render: () => (
    <Box maxWidth={'400px'}>
      <CardPendingTask />
    </Box>
  ),
};
