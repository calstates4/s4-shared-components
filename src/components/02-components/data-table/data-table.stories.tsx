import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import DataTable from './data-table';
import GridToolbar from './data-table-toolbar.generic';
import GridToolbarExtraButton from './data-table-toolbar.extra-button';
import {
  experiencesTableColumns,
  experiencesTableRows,
  genericTableColumns,
  genericTableRows,
  staffFilterModel,
  staffTableColumns,
  staffTableRows,
  coursesTableRows,
  coursesTableColumns,
  enrolledStudentsTableColumns,
  enrolledStudentsTableRows,
  reportStudentsTableColumns,
  reportStudentsTableRows,
  membershipsRequestsTableColumns,
  membershipsRequestsTableRows,
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
    hideCols: {},
  },
};


export const Courses: StoryObj<typeof DataTable> = {
  args: {
    rows: coursesTableRows,
    columns: coursesTableColumns,
    toolbar: () => <GridToolbar title="Manage Courses" />,
  },
};

export const EnrolledStudents: StoryObj<typeof DataTable> = {
  args: {
    rows: enrolledStudentsTableRows,
    columns: enrolledStudentsTableColumns,
    toolbar: () => <GridToolbarExtraButton title="Enrolled Students" btnTitle="Create an Experience" btnUrl="#sample" />,
  },
};

export const ReportStudents: StoryObj<typeof DataTable> = {
  args: {
    rows: reportStudentsTableRows,
    columns: reportStudentsTableColumns,
    toolbar: () => <GridToolbar title="Report Students" />,
  },
};

export const NoResults: StoryObj<typeof DataTable> = {
  args: {
    rows: [],
    columns: reportStudentsTableColumns,
    toolbar: () => <GridToolbar title="No Results" />,
  },
};

export const MembershipsRequested: StoryObj<typeof DataTable> = {
  args: {
    rows: membershipsRequestsTableRows,
    columns: membershipsRequestsTableColumns,
    toolbar: () => <GridToolbar title="Memberships Requests" />,
  },
};
