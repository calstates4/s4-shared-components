import { type Meta, type StoryObj } from '@storybook/react';
import OfferingPage, {
  type OfferingPageProps,
} from '../../02-components/offering-page/offering-page';
import { Default as OfferingPageStory } from '../../02-components/offering-page/offering-page.stories';
import { Default as PageLayoutStories } from '../../03-layouts/page-layout/page-layout.stories';
import PageLayout, {
  type PageLayoutProps,
} from '../../03-layouts/page-layout/page-layout';
import React from 'react';

const meta: Meta<typeof PageLayout> = {
  title: 'Examples/Offering',
  component: PageLayout,
};

export default meta;

export const Default: StoryObj<typeof PageLayout> = {
  render: () => (
    <PageLayout {...(PageLayoutStories.args as PageLayoutProps)}>
      <OfferingPage {...(OfferingPageStory.args as OfferingPageProps)} />
    </PageLayout>
  ),
};
