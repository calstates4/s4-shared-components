import type { Meta, StoryObj } from '@storybook/react';

import PastExperiencesList from './past-experiences-list';

const meta: Meta<typeof PastExperiencesList> = {
  title: 'Components/Past Experiences List',
  component: PastExperiencesList,
};

export default meta;

export const Default: StoryObj<typeof PastExperiencesList> = {
  args: {
    experienceInfo: [
      {
        id: '1',
        experience: 'Experience 1',
        status: 'draft',
        url: '/experiences/1',
      },
      {
        id: '2',
        experience: 'Experience 2',
        status: 'pending',
        url: '/experiences/2',
      },
    ],
    ctaLink: '/opportunities',
  },
};
