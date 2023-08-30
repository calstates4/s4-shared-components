import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import DataTable, {type DataTableProps, type DataTableRowProp} from './data-table';
import DataTableExperiences, { type ExperienceRow } from './data-table-experiences';
import DataTableStaff, { type StaffRow } from './data-table-staff';

import {
  GridRowId,
  GridColDef,
} from '@mui/x-data-grid';

const meta: Meta<typeof DataTable> = {
  title: 'Components/Data Table',
  component: DataTable,
};

export default meta;

const initialRows: ExperienceRow[] = [
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

const initialStaffRows: StaffRow[] = [
  {
    id: 1,
    col1: 'Emily',
    col2: 'Parker',
    col3: 'Administration',
  },
  {
    id: 2,
    col1: 'Peter',
    col2: 'Parker',
    col3: 'Education',
  },
  {
    id: 3,
    col1: 'Sarah',
    col2: 'Parker',
    col3: 'Elementary',
  },
  {
    id: 4,
    col1: 'John',
    col2: 'Parker',
    col3: 'Teaching',
  },
  {
    id: 5,
    col1: 'Fernando',
    col2: 'Parker',
    col3: 'Social Work',
  },
  {
    id: 6,
    col1: 'Bob',
    col2: 'Parker',
    col3: 'Education',
  },
  {
    id: 7,
    col1: 'George',
    col2: 'Parker',
    col3: 'Banking',
  }
];

type Row = {
  id: GridRowId;
  col1?: string;
  col2?: string;
  col3?: string;
  col4?: string;
  col5?: string;
  col6?: string;
};

const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
];


const dataRow: DataTableRowProp = {
  id: 1,
  firstName: 'Chris',
  lastName: 'Martin',
  email: 'ccjjmartin@test.com',
  url: "/experiences/experience/1"
}

export const Default: StoryObj<typeof DataTable> = {
  args: {
    rows: [dataRow, dataRow],
    columns
  },
  render: (args) => (
    <DataTable {...args} />
  ),
};

export const Experiences: StoryObj<typeof DataTableExperiences> = {
  args: {
    initialRows: initialRows,
  },
  render: (args) => (
    <DataTableExperiences {...args} />
  ),
};

export const Staff: StoryObj<typeof DataTableStaff> = {
  args: {
    initialRows: initialStaffRows,
    department: 'Education'
  },
  render: (args) => (
    <DataTableStaff {...args} />
  ),
};
