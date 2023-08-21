import type { Meta, StoryObj } from '@storybook/react';

import DataTable from './data-table';
import React from 'react';

import {

} from '@mui/x-data-grid';

const meta: Meta<typeof DataTable> = {
  title: 'Components/Data Table',
  component: DataTable,
};

export default meta;

const initialRows = [
  {
    id: 1,
    col1: 'Emily',
    col2: 'Parker',
    col3: 'emily@mail.com',
    col4: 'Channel Islands',
    col5: 'Offering 1',
    col6: 'Needs approval',
  },
  {
    id: 2,
    col1: 'Peter',
    col2: 'Parker',
    col3: 'peter@mail.com',
    col4: 'Stanislaus',
    col5: 'Offering 2',
    col6: 'Pending forms',
  },
  {
    id: 3,
    col1: 'Emily',
    col2: 'Parker',
    col3: 'emily@mail.com',
    col4: 'Channel Islands',
    col5: 'Offering 3',
    col6: 'Active',
  },
  {
    id: 4,
    col1: 'Peter',
    col2: 'Parker',
    col3: 'peter@mail.com',
    col4: 'Stanislaus',
    col5: 'Offering 4',
    col6: 'Completed',
  },
  {
    id: 5,
    col1: 'Emily',
    col2: 'Parker',
    col3: 'emily@mail.com',
    col4: 'Channel Islands',
    col5: 'Offering 4',
    col6: 'Pending forms',
  },
  {
    id: 6,
    col1: 'Peter',
    col2: 'Parker',
    col3: 'peter@mail.com',
    col4: 'Stanislaus',
    col5: 'Offering 2',
    col6: 'Active',
  },
  {
    id: 7,
    col1: 'Emily',
    col2: 'Parker',
    col3: 'emily@mail.com',
    col4: 'Channel Islands',
    col5: 'Offering 1',
    col6: 'Completed',
  }
];

export const Default: StoryObj<typeof DataTable> = {
  args: {
    initialRows: initialRows,
  },
  render: (args) => (
    <DataTable {...args} />
  ),
};
