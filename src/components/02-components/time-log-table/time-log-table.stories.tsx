import type { Meta, StoryObj } from '@storybook/react';

import TimeLogTable from './time-log-table';

const meta: Meta<typeof TimeLogTable> = {
  title: 'Components/Time Log Table',
  component: TimeLogTable,
};

const goalsText = `
  Researching Walmart’s in the Kern county area will help locate how many stores will gift funding for the Ronald McDonald House located in Bakersfield.
`;

const LearningText = `
  Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt. 
  Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.
`;

export default meta;

export const Default: StoryObj<typeof TimeLogTable> = {
  args: {
    cta: '/logtime',
    currentPage: 1,
    itemsPerPage: 5,
    items: [
      {
        date: '08/31/2022 6:00pm to 8:00pm',
        description: goalsText,
        calculatedHours: 2,
        id: '1',
        learningOutcomes: LearningText,
        state: 'Unsubmitted',
        editUrl: '#',
      },
      {
        date: '08/31/2022 6:00pm to 8:00pm',
        description: goalsText,
        calculatedHours: 2,
        id: '2',
        learningOutcomes: LearningText,
        state: 'Submitted',
        editUrl: '#',
      },
      {
        date: '08/31/2022 6:00pm to 8:00pm',
        description: goalsText,
        calculatedHours: 2,
        id: '3',
        learningOutcomes: LearningText,
        state: 'Unsubmitted',
        editUrl: '#',
      },
      {
        date: '08/31/2022 6:00pm to 8:00pm',
        description: goalsText,
        calculatedHours: 2,
        id: '4',
        learningOutcomes: LearningText,
        state: 'Unsubmitted',
        editUrl: '#',
      },
      {
        date: '08/31/2022 6:00pm to 8:00pm',
        description: goalsText,
        calculatedHours: 2,
        id: '5',
        learningOutcomes: LearningText,
        state: 'Unsubmitted',
        editUrl: '#',
      },
    ],
    totalItems: 6,
    url: 'http://localhost:6006/',
  },
};
