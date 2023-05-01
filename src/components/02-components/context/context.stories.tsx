import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import Context from './context';

const meta: Meta<typeof Context> = {
  title: 'Components/Context',
  component: Context,
};

export default meta;

const universities = [{ title: 'California State University', id: 'csu' }];

const campuses = [
  { title: 'Channel Islands', id: 'channel_islands' },
  { title: 'Chico', id: 'chico' },
  { title: 'Dominguez Hills', id: 'dominguez_hills' },
  { title: 'East Bay', id: 'east_bay' },
  { title: 'Fullerton', id: 'fullerton' },
  { title: 'Long Beach', id: 'long_beach' },
  { title: 'Los Angeles', id: 'los_angeles' },
  { title: 'Monterey Bay', id: 'monterey_bay' },
  { title: 'Northridge', id: 'northridge' },
  { title: 'Sacramento', id: 'sacramento' },
  { title: 'San Bernardino', id: 'san_bernardino' },
  { title: 'San Marcos', id: 'san_marcos' },
  { title: 'Stanislaus', id: 'stanislaus' },
];

export const Default: StoryObj<typeof Context> = {
  args: {
    universities,
    campuses,
  },
  render: (args) => (
    <Box
      sx={{ backgroundColor: 'primary.main', p: (theme) => theme.spacing(2) }}
    >
      <Context {...args} />
    </Box>
  ),
};
