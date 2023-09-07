import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import GridToolbar from '../../02-components/data-table/data-table-toolbar.generic';
import {
  experiencesTableColumns,
  experiencesTableRows,
  staffFilterModel,
  staffTableColumns,
  staffTableRows,
} from '../../02-components/data-table/data-table.data';
import { type ExposedFormProps } from '../../02-components/form/form';
import { Staff as ExposedFormStories } from '../../02-components/form/form.stories';
import PageLayout, {
  type PageLayoutProps,
} from '../../03-layouts/page-layout/page-layout';
import { Default as PageLayoutStories } from '../../03-layouts/page-layout/page-layout.stories';
import DataTablePage, { type DataTablePageProps } from './data-table-page';

const meta: Meta<typeof PageLayout> = {
  title: 'Pages/Generic',
  component: PageLayout,
};

export default meta;

const staffArgs: DataTablePageProps = {
  breadcrumb: [
    {
      title: 'Staff',
      url: '/organization/staff',
    },
  ],
  title: 'Staff at {Organization Name}',
  tableData: {
    rows: staffTableRows,
    columns: staffTableColumns,
    toolbar: () => <GridToolbar title="Staff" />,
    filters: staffFilterModel,
  },
  form: ExposedFormStories.args as ExposedFormProps,
  addUrl: '/organization/staff/add',
  addTitle: 'Invite a staff member',
};

export const StaffTable: StoryObj<typeof PageLayout> = {
  render: () => (
    <PageLayout {...(PageLayoutStories.args as PageLayoutProps)}>
      <DataTablePage {...(staffArgs as DataTablePageProps)} />
    </PageLayout>
  ),
};

const experienceArgs: DataTablePageProps = {
  breadcrumb: [
    {
      title: 'Experiences',
      url: '/organization/experiences',
    },
  ],
  title: 'Experiences',
  tableData: {
    rows: experiencesTableRows,
    columns: experiencesTableColumns,
    toolbar: () => <GridToolbar title="Experiences" />,
    filters: staffFilterModel,
  },
};

export const ExperienceTable: StoryObj<typeof PageLayout> = {
  render: () => (
    <PageLayout {...(PageLayoutStories.args as PageLayoutProps)}>
      <DataTablePage {...(experienceArgs as DataTablePageProps)} />
    </PageLayout>
  ),
};
