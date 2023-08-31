import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import DataTable from './data-table';
import {
  genericTableRows,
  genericTableColumns,
  experiencesTableColumns,
  experiencesTableRows,
  staffTableRows,
  staffTableColumns,
  staffFilterModel
} from './data-table.data';
import GridToolbar from './data-table-toolbar.generic';

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
    filters: staffFilterModel
  },
};
