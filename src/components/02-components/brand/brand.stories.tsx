import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import Brand from './brand';

const meta: Meta<typeof Brand> = {
  title: 'Components/Brand',
  component: Brand,
};

export default meta;

export const Default: StoryObj<typeof Brand> = {
  render: (args) => (
    <Box bgcolor="primary.main" p={2}>
      <Brand {...args} />
    </Box>
  ),
  args: {
    campusName: 'Campus Name',
    linkURL: '#',
  },
};
