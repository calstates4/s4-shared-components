import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import OfferingCard, {
  type OfferingCardProps,
} from '../offering-card/offering-card';
import { Published as OfferingCardStories } from '../offering-card/offering-card.stories';

import OfferingList from './offering-list';

const meta: Meta<typeof OfferingList> = {
  title: 'Components/Offering List',
  component: OfferingList,
};

export default meta;

const offerings = Array.from({ length: 5 }, (_, i) => i).map(() => (
  <OfferingCard {...(OfferingCardStories.args as OfferingCardProps)} />
));

export const Default: StoryObj<typeof OfferingList> = {
  args: {
    breadcrumb: [
      {
        title: 'Offerings',
        url: '#',
      },
    ],
    children: offerings,
    url: '#',
    addUrl: '#',
    totalItems: 38,
    itemsPerPage: 5,
    currentPage: 3,
    categoryFilterValues: [
      {
        id: 'all',
        name: 'All Offerings',
      },
      {
        id: '1',
        name: 'My Offerings',
      },
    ],
    departmentFilterValues: [
      {
        id: '1',
        name: 'Sales',
      },
      {
        id: '2',
        name: 'Human Resources',
      },
    ],
    currentFilters: {
      category: 'all',
      department: '1',
    },
  },
};
