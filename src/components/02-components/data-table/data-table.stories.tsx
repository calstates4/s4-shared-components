import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import DataTable from './data-table';
import DataTableStaff from './data-table-staff';
import {
  dataTableRows,
  dataTableColumns,
  experiencesTableColumns,
  experiencesTableRows,
  initialStaffRows
} from './data-table.data';

const meta: Meta<typeof DataTable> = {
  title: 'Components/Data Table',
  component: DataTable,
};

export default meta;

export const Generic: StoryObj<typeof DataTable> = {
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
