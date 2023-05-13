import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import Context from './context';

const meta: Meta<typeof Context> = {
  title: 'Components/Context',
  component: Context,
};

export default meta;

const universities = [{ title: 'California State University', id: '1' }];

const campuses = [
  { title: 'Channel Islands', id: '1' },
  { title: 'Chico', id: '2' },
  { title: 'Dominguez Hills', id: '3' },
  { title: 'East Bay', id: '4' },
  { title: 'Fullerton', id: '5' },
  { title: 'Long Beach', id: '6' },
  { title: 'Los Angeles', id: '7' },
  { title: 'Monterey Bay', id: '8' },
  { title: 'Northridge', id: '9' },
  { title: 'Sacramento', id: '10' },
  { title: 'San Bernardino', id: '11' },
  { title: 'San Marcos', id: '12' },
  { title: 'Stanislaus', id: '13' },
];

const organizations = [
  { title: 'Organization 1', id: '1' },
  { title: 'Organization 2', id: '2' },
  { title: 'Organization 3', id: '3' },
  { title: 'Organization 4', id: '4' },
  { title: 'Organization 5', id: '5' },
  { title: 'Organization 6', id: '6' },
  { title: 'Organization 7', id: '7' },
];

export const UniversityAndCampus: StoryObj<typeof Context> = {
  args: {
    level1: {
      items: universities,
      label: 'University',
      placeholder: 'Select university...',
      selectedItem: '1',
    },
    level2: {
      items: campuses,
      label: 'Campus',
      placeholder: 'Select campus...',
      selectedItem: '10',
    },
  },
  render: (args) => (
    <Box
      sx={{ backgroundColor: 'primary.main', p: (theme) => theme.spacing(2) }}
    >
      <Context {...args} />
    </Box>
  ),
};

export const Organization: StoryObj<typeof Context> = {
  args: {
    level1: {
      items: organizations,
      label: 'Organization',
      placeholder: 'Select organization...',
      selectedItem: '3',
    },
  },
  render: (args) => (
    <Box
      sx={{ backgroundColor: 'primary.main', p: (theme) => theme.spacing(2) }}
    >
      <Context {...args} />
    </Box>
  ),
};
