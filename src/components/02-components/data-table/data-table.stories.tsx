import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import DataTable from './data-table';
import GridToolbar from './data-table-toolbar.generic';
import {
  experiencesTableColumns,
  experiencesTableRows,
  genericTableColumns,
  genericTableRows,
  staffFilterModel,
  staffTableColumns,
  staffTableRows,
  enrolledStudentsTableColumns,
  enrolledStudentsTableRows,
} from './data-table.data';

const meta: Meta<typeof DataTable> = {
  title: 'Components/Data Table',
  component: DataTable,
};

export default meta;

export const Generic: StoryObj<typeof DataTable> = {
  args: {
    rows: genericTableRows,
    columns: genericTableColumns,
    toolbar: () => <GridToolbar title="Generic" />,
  },
};

export const Experiences: StoryObj<typeof DataTable> = {
  args: {
    rows: experiencesTableRows,
    columns: experiencesTableColumns,
    toolbar: () => <GridToolbar title="Experiences" />,
  },
};

export const Staff: StoryObj<typeof DataTable> = {
  args: {
    rows: staffTableRows,
    columns: staffTableColumns,
    toolbar: () => <GridToolbar title="Staff" />,
    filters: staffFilterModel,
  },
};

export const EnrolledStudents: StoryObj<typeof DataTable> = {
  args: {
    rows: enrolledStudentsTableRows,
    columns: enrolledStudentsTableColumns,
    toolbar: () => <GridToolbar title="Enrolled Students" />,
  },
};