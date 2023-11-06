import type { Meta, StoryObj } from '@storybook/react';

import ProgramCard from './program-card';

const meta: Meta<typeof ProgramCard> = {
  title: 'Components/Program Card',
  component: ProgramCard,
};

export default meta;

const programData = {
  id: '001',
  title: 'Teacher Credentialing Programs',
  description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
  url: '#',
  btnDisable: true,
  btnText: 'Pending',
};

export const Default: StoryObj<typeof ProgramCard> = {
  args: {
    ...programData,
  },
};

