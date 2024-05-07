import type { Meta, StoryObj } from '@storybook/react';

import ParticipationRequirements from './participation-requirements';

const meta: Meta<typeof ParticipationRequirements> = {
  title: 'Components/Participation Requirements',
  component: ParticipationRequirements,
};

export default meta;

export const Default: StoryObj<typeof ParticipationRequirements> = {
  args: {
    requirement_type: '1',
    requirements_fee: '10',
    requirements_cost: '0',
  },
};
