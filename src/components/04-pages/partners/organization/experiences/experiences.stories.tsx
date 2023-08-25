import { type Meta, type StoryObj } from '@storybook/react';
import { Experiences as DataTableExperiencePageStory } from '../../../../02-components/data-table/data-table.stories';
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
  items: DataTableExperiencePageStory.args?.initialRows,
};

export const Default: StoryObj<typeof PageLayout> = {
  render: () => (
    <PageLayout {...(PageLayoutStories.args as PageLayoutProps)}>
      <PartnerExperiencePage {...(args as PartnerExperiencePageProps)} />
    </PageLayout>
  ),
};
