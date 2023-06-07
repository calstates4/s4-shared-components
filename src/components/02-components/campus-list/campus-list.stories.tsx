import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import CampusCard, { type CampusCardProps } from '../campus-card/campus-card';
import { Active as CampusCardStories } from '../campus-card/campus-card.stories';

import CampusList from './campus-list';

const meta: Meta<typeof CampusList> = {
  title: 'Components/CampusList',
  component: CampusList,
};

export default meta;

const campuses = Array.from({ length: 5 }, (_, i) => i).map(() => (
  <CampusCard {...(CampusCardStories.args as CampusCardProps)} />
));

export const Default: StoryObj<typeof CampusList> = {
  args: {
    children: campuses,
    url: '#',
    totalItems: 38,
    itemsPerPage: 5,
    currentPage: 3,
    statusFilterValues: [
      {
        id: 'all',
        label: 'All',
      },
      {
        id: 'draft',
        label: 'Pending',
      },
      {
        id: 'published',
        label: 'Active',
      },
      {
        id: 'expired',
        label: 'Expired',
      },
      {
        id: 'archived',
        label: 'Archived',
      },
    ],
    currentFilters: {
      agreementStatus: 'all',
      campusName: '',
    },
  },
};
