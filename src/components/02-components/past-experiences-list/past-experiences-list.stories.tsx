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
        experience: 'Experience 1',
        status: 'State 1'
      },
      {
        experience: 'Experience 2',
        status: 'State 2'
      }
    ]
  },
  render: (args) => <PastExperiencesList {...args} />,
};