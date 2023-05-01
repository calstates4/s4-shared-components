import { Select, FormControl, InputLabel } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  title: 'Elements/Select',
  component: Select,
};

export default meta;

const campusList = [
  { label: 'Channel Islands', id: 'channel_islands' },
  { label: 'Chico', id: 'chico' },
  { label: 'Dominguez Hills', id: 'dominguez_hills' },
  { label: 'East Bay', id: 'east_bay' },
  { label: 'Fullerton', id: 'fullerton' },
  { label: 'Long Beach', id: 'long_beach' },
  { label: 'Los Angeles', id: 'los_angeles' },
  { label: 'Monterey Bay', id: 'monterey_bay' },
  { label: 'Northridge', id: 'northridge' },
  { label: 'Sacramento', id: 'sacramento' },
  { label: 'San Bernardino', id: 'san_bernardino' },
  { label: 'San Marcos', id: 'san_marcos' },
  { label: 'Stanislaus', id: 'stanislaus' },
];

export const Default: StoryObj<typeof Select> = {
  args: {
    labelId: 'campus-select-label',
    id: 'campus-select',
    label: 'Campus',
    IconComponent: SwapHorizIcon,
    native: true,
  },
  render: (args) => (
    <FormControl size="small" sx={{ width: 300 }}>
      <InputLabel id="campus-select-label">Campus</InputLabel>
      <Select {...args}>
        {campusList.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </Select>
    </FormControl>
  ),
};
