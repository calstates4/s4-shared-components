import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import GridToolbar from '../../02-components/data-table/data-table-toolbar.generic';
import {
  ApproveExperienceTableColumns,
  ApproveExperienceTableRows,
} from '../../02-components/data-table/data-table.data';
import PageLayout, {
  type PageLayoutProps,
} from '../../03-layouts/page-layout/page-layout';
import { Default as PageLayoutStories } from '../../03-layouts/page-layout/page-layout.stories';
import ApproveExperiencePage, { type ApproveExperiencePageProps } from './approve-experience';

const meta: Meta<typeof PageLayout> = {
  title: 'Pages/Experiences/Approve Experience',
  component: PageLayout,
};

export default meta;

const staffArgs: ApproveExperiencePageProps = {
  breadcrumb: [
    {
      title: 'Organization',
      url: '#/organization',
    },
    {
      title: 'Experiences',
      url: '#/organization/experiences',
    },
    {
      title: 'Pending',
      url: '#/organization/experiences/pending',
    },
  ],
  title: 'Manage Pending Experiences',
  tableData: {
    rows: ApproveExperienceTableRows,
    columns: ApproveExperienceTableColumns,
    toolbar: () => <GridToolbar title="Pending experiences" />,
  }
};

export const ApproveExperience: StoryObj<typeof PageLayout> = {
  render: () => (
    <PageLayout {...(PageLayoutStories.args as PageLayoutProps)}>
      <ApproveExperiencePage {...(staffArgs as ApproveExperiencePageProps)} />
    </PageLayout>
  ),
};
