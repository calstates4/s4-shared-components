
import type { Meta, StoryObj } from '@storybook/react';

import ProgramList from './program-list';

const meta: Meta<typeof ProgramList> = {
  title: 'Components/Program List',
  component: ProgramList,
};

export default meta;

const offeringData = {
  title: 'Teacher Credentialing Programs',
  description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
  url: '#',
  editUrl: '#',
  published: true,
  type: 'Hybrid',
  department: 'Finance',
  startDate: '04/04/2023',
  endDate: '04/10/2023',
  timeCommitment: '20 hours per week',
};

export const Default: StoryObj<typeof ProgramList> = {
  args: {
    ...offeringData,
  },
};

