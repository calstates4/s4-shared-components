import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import CardExperience, {
  type CardExperienceProps,
} from '../card-experience/card-experience';
import { WideCard as WideCardStory } from '../card-experience/card-experience.stories';

import ExperiencesList from './experiences-list';

const meta: Meta<typeof ExperiencesList> = {
  title: 'Components/Experiences List',
  component: ExperiencesList,
};

export default meta;

const experiences = Array.from({ length: 5 }, (_, i) => i).map(() => (
  <CardExperience {...(WideCardStory.args as CardExperienceProps)} />
));

export const Default: StoryObj<typeof ExperiencesList> = {
  args: {
    children: experiences,
    url: 'http://localhost:6006/',
    totalItems: 38,
    itemsPerPage: 5,
    currentPage: 3,
    programFilterValues: [
      {
        id: 'all',
        label: 'All',
      },
      {
        id: '1',
        label: 'Program 1',
      },
      {
        id: '2',
        label: 'Program 2',
      },
      {
        id: '3',
        label: 'Program 3',
      },
      {
        id: '4',
        label: 'Program 4',
      },
      {
        id: '5',
        label: 'Program 5',
      },
      {
        id: '6',
        label: 'Program 6',
      },
      {
        id: '7',
        label: 'Program 7',
      },
    ],
    termFilterValues: [
      {
        id: 'all',
        label: 'All',
      },
      {
        id: '1',
        label: 'Term 1',
      },
      {
        id: '2',
        label: 'Term 2',
      },
      {
        id: '3',
        label: 'Term 3',
      },
      {
        id: '4',
        label: 'Term 4',
      },
      {
        id: '5',
        label: 'Term 5',
      },
      {
        id: '6',
        label: 'Term 6',
      },
      {
        id: '7',
        label: 'Term 7',
      },
    ],
    currentFilters: {
      program: 'all',
      term: 'all',
    },
  },
};
