import type { Meta, StoryObj } from '@storybook/react';

import FormStaff from './form-staff';

const meta: Meta<typeof FormStaff> = {
  title: 'Components/Form',
  component: FormStaff,
};

export default meta;

export const Staff: StoryObj<typeof FormStaff> = {
  args: {
    departmentFilterValues: [
      {
        id: '1',
        name: 'Education',
      },
      {
        id: '2',
        name: 'Administration',
      },
    ],
    currentFilters: {
      department: '1',
    },
  },
};
