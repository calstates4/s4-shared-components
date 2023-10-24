import type { Meta, StoryObj } from '@storybook/react';

import ExperienceFormList from './experience-form-list';

const meta: Meta<typeof ExperienceFormList> = {
  title: 'Components/Experience Form List',
  component: ExperienceFormList,
};

export default meta;

export const Default: StoryObj<typeof ExperienceFormList> = {
  args: {
    beginningForms: [
      {
        id: 'form-1',
        name: 'Release of Liability - COVID 19',
        status: 'Submitted',
      },
    ],
    duringForms: [
      {
        id: 'form-2',
        name: 'Proident mollit nisi id esse eiusmod cillum eiusmod',
        status: 'Submitted',
      },
      {
        id: 'form-3',
        name: 'Id officia ut commodo ipsum non adipisicing voluptate',
        status: 'Pending',
      },
      {
        id: 'form-4',
        name: 'Voluptate magna sunt aliqua cillum',
        status: 'Pending',
      },
    ],
    endForms: [
      {
        id: 'form-5',
        name: 'Reprehenderit cillum reprehenderit est magna veniam non ea duis quis veniam id cillum',
        status: 'Pending',
      },
      {
        id: 'form-6',
        name: 'Minim aliqua ut sunt eu velit cillum dolor et',
        status: 'Pending',
      },
    ],
  },
};
