import type { Meta, StoryObj } from '@storybook/react';

import PastExperiencesPage from './past-experiences-page';

const meta: Meta<typeof PastExperiencesPage> = {
  title: 'Components/Past Experiences Page',
  component: PastExperiencesPage,
};

export default meta;

export const Default: StoryObj<typeof PastExperiencesPage> = {
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
  render: (args) => <PastExperiencesPage {...args} />,
};