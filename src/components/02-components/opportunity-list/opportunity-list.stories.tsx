import type { Meta, StoryObj } from '@storybook/react';

import OpportunityList from './opportunity-list';

const meta: Meta<typeof OpportunityList> = {
  title: 'Components/Opportunity List',
  component: OpportunityList,
};

export default meta;

export const Default: StoryObj<typeof OpportunityList> = {};
