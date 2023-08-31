import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import DataTable from './data-table';
import DataTableStaff, { type StaffRow } from './data-table-staff';

import { Button, Link } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';

const meta: Meta<typeof DataTable> = {
  title: 'Components/Data Table',
  component: DataTable,
};

export default meta;

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
  },
];

const dataTableColumns = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  {
    field: 'url',
    width: 150,
    type: 'actions',
    disableExport: true,
    renderCell: (params: GridRenderCellParams) => (
      <strong>
        <Button
          component={Link}
          href={
            'http://localhost:6006/?path=/story/components-data-table--default/organization/experiences/' +
            params.row.id
          }
          sx={{
            fontWeight: 700,
          }}
        >
          View details
        </Button>
      </strong>
    ),
  },
];

const dataTableRows = [
  {
    id: 1,
    firstName: 'Emily',
    lastName: 'Parker',
    email: 'emily@test.com',
  },
  {
    id: 2,
    firstName: 'Mathew',
    lastName: 'Ross',
    email: 'csmit@test.com',
  },
  {
    id: 3,
    firstName: 'Carlos',
    lastName: 'Smith',
    email: 'csmit@test.com',
  },
  {
    id: 4,
    firstName: 'Robert',
    lastName: 'Thomsom',
    email: 'csmit@test.com',
  },
  {
    id: 5,
    firstName: 'Peter',
    lastName: 'Brown',
    email: 'csmit@test.com',
  },
  {
    id: 6,
    firstName: 'David',
    lastName: 'Mask',
    email: 'csmit@test.com',
  },
  {
    id: 7,
    firstName: 'Martin',
    lastName: 'James',
    email: 'csmit@test.com',
  },
];

const experiencesTableColumns = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'campus', headerName: 'Campus', width: 150 },
  { field: 'offering', headerName: 'Offering', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
  {
    field: 'url',
    width: 150,
    type: 'actions',
    headerName: 'Action',
    disableExport: true,
    renderCell: (params: GridRenderCellParams) => (
      <strong>
        <Button
          component={Link}
          href={
            'http://localhost:6006/?path=/story/components-data-table--default/organization/experiences/' +
            params.row.id
          }
          sx={{
            fontWeight: 700,
          }}
        >
          View details
        </Button>
      </strong>
    ),
  },
];

const experiencesTableRows = [
  {
    id: 1,
    firstName: 'Emily',
    lastName: 'Parker',
    email: 'emily@mail.com',
    campus: 'Channel Islands',
    offering: 'Offering 1',
    status: 'Needs approval',
  },
  {
    id: 2,
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'peter@mail.com',
    campus: 'Stanislaus',
    offering: 'Offering 2',
    status: 'Pending forms',
  },
  {
    id: 3,
    firstName: 'Emily',
    lastName: 'Parker',
    email: 'emily@mail.com',
    campus: 'Channel Islands',
    offering: 'Offering 3',
    status: 'Active',
  },
  {
    id: 4,
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'peter@mail.com',
    campus: 'Stanislaus',
    offering: 'Offering 4',
    status: 'Completed',
  },
  {
    id: 5,
    firstName: 'Emily',
    lastName: 'Parker',
    email: 'emily@mail.com',
    campus: 'Channel Islands',
    offering: 'Offering 4',
    status: 'Pending forms',
  },
  {
    id: 6,
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'peter@mail.com',
    campus: 'Stanislaus',
    offering: 'Offering 2',
    status: 'Active',
  },
  {
    id: 7,
    firstName: 'Emily',
    lastName: 'Parker',
    email: 'emily@mail.com',
    campus: 'Channel Islands',
    offering: 'Offering 1',
    status: 'Completed',
  },
];

export const Default: StoryObj<typeof DataTable> = {
  args: {
    rows: dataTableRows,
    columns: dataTableColumns,
  },
};

export const Experiences: StoryObj<typeof DataTable> = {
  args: {
    rows: experiencesTableRows,
    columns: experiencesTableColumns,
  },
};

export const Staff: StoryObj<typeof DataTableStaff> = {
  args: {
    initialRows: initialStaffRows,
    department: 'Education',
  },
  render: (args) => <DataTableStaff {...args} />,
};
