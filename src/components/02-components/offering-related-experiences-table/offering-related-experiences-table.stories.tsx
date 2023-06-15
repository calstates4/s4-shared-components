import type { Meta, StoryObj } from '@storybook/react';

import OfferingExperiencesRelated from './offering-related-experiences-table';

const meta: Meta<typeof OfferingExperiencesRelated> = {
  title: 'Components/OfferingExperiencesRelated',
  component: OfferingExperiencesRelated,
};

export default meta;


export const Experiences: StoryObj<typeof OfferingExperiencesRelated> = {
  args: {
    url: '#',
    experiences: {
      pages: 3,
      currentPage: 1,
      items: [
        {
          id: '1',
          studentName: 'Emily',
          stundentLastname: 'Parker',
          studentEmail: 'student@mail.com',
          campus: 'Bakersfield'
        },
        {
          id: '2',
          studentName: 'Emily',
          stundentLastname: 'Parker',
          studentEmail: 'student@mail.com',
          campus: 'Channel Islands'
        },
        {
          id: '3',
          studentName: 'Carlos',
          stundentLastname: 'Smith',
          studentEmail: 'student@mail.com',
          campus: 'Bakersfield'
        },
        {
          id: '4',
          studentName: 'Petter',
          stundentLastname: 'Morries',
          studentEmail: 'student@mail.com',
          campus: 'Cal Poly Humboldt'
        },
        {
          id: '5',
          studentName: 'Harold',
          stundentLastname: 'West',
          studentEmail: 'student@mail.com',
          campus: 'Cal Poly Humboldt'
        },
      ],
    },
  },
};

export const NoExperiences: StoryObj<typeof OfferingExperiencesRelated> = {
  args: {
    url: '#',
  },
};
