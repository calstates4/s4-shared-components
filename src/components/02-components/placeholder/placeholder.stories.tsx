import { Typography } from '@mui/material';
import { type Meta, type StoryObj } from '@storybook/react';

import Placeholder from './placeholder';

const meta: Meta<typeof Placeholder> = {
  title: 'Components/Placeholder',
  component: Placeholder,
};

export default meta;

export const Default: StoryObj<typeof Placeholder> = {
  render: (args) => (
    <Placeholder {...args}>
      <Typography variant="body1">This is a placeholder component.</Typography>
    </Placeholder>
  ),
  args: {
    bgDark: false,
  },
};
