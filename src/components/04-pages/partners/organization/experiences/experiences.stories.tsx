import { type Meta, type StoryObj } from '@storybook/react';
import { Default as DataTableExperiencePageStory, initialRows } from '../../../../02-components/data-table/data-table.stories';
import PartnerExperiencePage, {
  type PartnerExperiencePageProps,
} from './experiences';

import { Default as PageLayoutStories } from '../../../../03-layouts/page-layout/page-layout.stories';
import PageLayout, {
  type PageLayoutProps,
} from '../../../../03-layouts/page-layout/page-layout';
import React from 'react';

const meta: Meta<typeof PageLayout> = {
  title: 'Pages/Partner/Organization/Experiences',
  component: PageLayout,
};

export default meta;

const args: PartnerExperiencePageProps = {
  title: 'Experiences',
  items: initialRows,
};

export const Default: StoryObj<typeof PageLayout> = {
  render: () => (
    <PageLayout {...(PageLayoutStories.args as PageLayoutProps)}>
      <PartnerExperiencePage {...(DataTableExperiencePageStory.args as PartnerExperiencePageProps)} />
    </PageLayout>
  ),
};
