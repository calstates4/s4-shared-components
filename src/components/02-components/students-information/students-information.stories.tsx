import type { Meta, StoryObj } from '@storybook/react';

import StudentsInformation from './students-information';

const meta: Meta<typeof StudentsInformation> = {
  title: 'Components/Students Information',
  component: StudentsInformation,
};

export default meta;

export const Default: StoryObj<typeof StudentsInformation> = {
  args: {
    student_name: 'Jose',
    student_email: 'jose@gmail.com',
  },
};
