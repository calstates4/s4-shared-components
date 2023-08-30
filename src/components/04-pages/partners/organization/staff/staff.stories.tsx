import { type Meta, type StoryObj } from '@storybook/react';
import { Staff as DataTablePageStory } from '../../../../02-components/data-table/data-table.stories';
import PartnerStaffPage, {
  type PartnerStaffPageProps,
} from './staff';
import { Staff as FormStaffStories } from '../../../../02-components/form/form.stories';

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
  title: 'Staff at {Organization Name}',
  items: DataTablePageStory.args?.initialRows,
  formStaff: FormStaffStories.args,
  department: 'Education',
  addUrl: '/organization/staff/add'
};

export const Default: StoryObj<typeof PageLayout> = {
  render: () => (
    <PageLayout {...(PageLayoutStories.args as PageLayoutProps)}>
      <PartnerStaffPage {...(args as PartnerStaffPageProps)} />
    </PageLayout>
  ),
};
