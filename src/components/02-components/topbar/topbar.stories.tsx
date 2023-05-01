import { Typography } from '@mui/material';
import { type Meta, type StoryObj } from '@storybook/react';

import Topbar from './topbar';

const meta: Meta<typeof Topbar> = {
  title: 'Components/Topbar',
  component: Topbar,
};

export default meta;

export const Default: StoryObj<typeof Topbar> = {
  render: () => (
    <Topbar>
      <Typography variant="h6" color="white">
        Topbar Content
      </Typography>
    </Topbar>
  ),
};
