import type { Meta, StoryObj } from '@storybook/react';

import CourseList from './course-list';
import CourseCard, {
  type CourseCardProps,
} from '../course-card/course-card';
import { Default as CourseCardStories } from '../course-card/course-card.stories';
import React from 'react';

const meta: Meta<typeof CourseList> = {
  title: 'Components/Course List',
  component: CourseList,
};

export default meta;

const opportunities = Array.from({ length: 6 }, (_, i) => i).map(() => (
  <CourseCard {...(CourseCardStories.args as CourseCardProps)} />
));

export const Default: StoryObj<typeof CourseList> = {
  args: {
    breadcrumb: [
      {
        title: 'Opportunities',
        url: '#',
      },
    ],
    url: 'http://localhost:6006/',
    children: opportunities,
    totalItems: 30,
    itemsPerPage: 6,
    currentPage: 3,
    programFilterValues: [
      {
        id: 'all',
        label: 'All Campus programs',
      },
      {
        id: '1',
        label: 'My programs',
      },
    ],
    termFilterValues: [
      {
        id: '1',
        label: 'Fall 2023',
      },
      {
        id: '2',
        label: 'Winter 2023',
      },
    ],

    currentFilters: {
      program: '1',
      term: null,
    },
  },
};
