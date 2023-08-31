import { type Meta, type StoryObj } from '@storybook/react';
import PartnerExperiencePage, {
  type PartnerExperiencePageProps,
} from './experiences';
import {
  experiencesTableColumns,
  experiencesTableRows,
} from '../../../../02-components/data-table/data-table.data';

import React from 'react';
import PageLayout, {
  type PageLayoutProps,
} from '../../../../03-layouts/page-layout/page-layout';
import { Default as PageLayoutStories } from '../../../../03-layouts/page-layout/page-layout.stories';

const meta: Meta<typeof PageLayout> = {
  title: 'Pages/Partner/Organization/Experiences',
  component: PageLayout,
};

export default meta;

const args: PartnerExperiencePageProps = {
  breadcrumb: [
    {
      title: 'Experiences',
      url: '/organization/experiences',
    },
  ],
  title: 'Experiences',
  tableData: { rows: experiencesTableRows, columns: experiencesTableColumns },
};

export const Default: StoryObj<typeof PageLayout> = {
  render: () => (
    <PageLayout {...(PageLayoutStories.args as PageLayoutProps)}>
      <PartnerExperiencePage {...(args as PartnerExperiencePageProps)} />
    </PageLayout>
  ),
};
