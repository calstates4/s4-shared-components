import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import ExperienceForm from './experience-form';

const meta: Meta<typeof ExperienceForm> = {
  title: 'Components/Experience Form',
  component: ExperienceForm,
};

export default meta;

export const Default: StoryObj<typeof ExperienceForm> = {
  args: {
    studentsListValues: [
      {
        id: '1',
        fullname: 'Student Name',
      },
      {
        id: '2',
        fullname: 'Student Name',
      },
      {
        id: '3',
        fullname: 'Student Name',
      },
    ],
    courseFilterValues: [
      {
        id: 'all',
        label: 'All',
      },
      {
        id: '1',
        label: 'Course 1',
      },
      {
        id: '2',
        label: 'Course 2',
      },
    ],
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
    ],
    organizationFilterValues: [
      {
        id: '1',
        label: 'Organization 1',
      },
      {
        id: '2',
        label: 'Organization 2',
      },
    ],
    opportunityFilterValues: [
      {
        id: '1',
        label: 'Opportunity 1',
      },
      {
        id: '2',
        label: 'Opportunity 2',
      },
    ],
    currentFilters: {
      course: '1',
      program: '2',
      term: '3',
      organization: '0',
      opportunity: '0',
      estimated: '',
    },
  },
};
