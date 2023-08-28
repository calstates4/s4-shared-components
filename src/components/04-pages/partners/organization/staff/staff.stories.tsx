import { type Meta, type StoryObj } from '@storybook/react';
import { Staff as DataTablePageStory } from '../../../../02-components/data-table/data-table.stories';
import PartnerStaffPage, {
  type PartnerStaffPageProps,
} from './staff';

import { Default as PageLayoutStories } from '../../../../03-layouts/page-layout/page-layout.stories';
import PageLayout, {
  type PageLayoutProps,
} from '../../../../03-layouts/page-layout/page-layout';
import React from 'react';

const meta: Meta<typeof PageLayout> = {
  title: 'Pages/Partner/Organization/Staff',
  component: PageLayout,
};

export default meta;

const args: PartnerStaffPageProps = {
  title: 'Staff',
  items: DataTablePageStory.args?.initialRows,
};

export const Default: StoryObj<typeof PageLayout> = {
  render: () => (
    <PageLayout {...(PageLayoutStories.args as PageLayoutProps)}>
      <PartnerStaffPage {...(args as PartnerStaffPageProps)} />
    </PageLayout>
  ),
};
