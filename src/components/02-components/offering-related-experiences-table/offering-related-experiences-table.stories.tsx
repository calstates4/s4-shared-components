import type { Meta, StoryObj } from '@storybook/react';

import OfferingExperiencesRelatedTable from './offering-related-experiences-table';

const meta: Meta<typeof OfferingExperiencesRelatedTable> = {
  title: 'Components/Offering Experiences Related Table',
  component: OfferingExperiencesRelatedTable,
};

export default meta;


export const Experiences: StoryObj<typeof OfferingExperiencesRelatedTable> = {
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
          campus: 'Bakersfield',
          signFormUrl: '#',
          approveTimeUrl: '#',
        },
        {
          id: '2',
          studentName: 'Emily',
          stundentLastname: 'Parker',
          studentEmail: 'student@mail.com',
          campus: 'Channel Islands',
          signFormUrl: '#',
          approveTimeUrl: '#',
        },
        {
          id: '3',
          studentName: 'Carlos',
          stundentLastname: 'Smith',
          studentEmail: 'student@mail.com',
          campus: 'Bakersfield',
          signFormUrl: '#',
          approveTimeUrl: '#',
        },
        {
          id: '4',
          studentName: 'Petter',
          stundentLastname: 'Morries',
          studentEmail: 'student@mail.com',
          campus: 'Cal Poly Humboldt',
          signFormUrl: '#',
          approveTimeUrl: '#',
        },
        {
          id: '5',
          studentName: 'Harold',
          stundentLastname: 'West',
          studentEmail: 'student@mail.com',
          campus: 'Cal Poly Humboldt',
          signFormUrl: '#',
          approveTimeUrl: '#',
        },
      ],
    },
  },
};

export const NoExperiences: StoryObj<typeof OfferingExperiencesRelatedTable> = {
  args: {
    url: '#',
  },
};
