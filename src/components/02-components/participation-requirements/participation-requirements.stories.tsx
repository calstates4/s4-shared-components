import type { Meta, StoryObj } from '@storybook/react';

import ParticipationRequirements from './participation-requirements';

const meta: Meta<typeof ParticipationRequirements> = {
  title: 'Components/Participation Requirements',
  component: ParticipationRequirements,
};

export default meta;

const requirement_types = [
  { id: '0', label: 'Option 1' },
  { id: '1', label: 'Option 2' },
  { id: '2', label: 'Option 3' },
  { id: '3', label: 'Option 4' },
  { id: '4', label: 'Option 5' },
  { id: '5', label: 'New OP5' },
];

export const Default: StoryObj<typeof ParticipationRequirements> = {
  args: {
    requirement_type: '1',
    requirements_fee: '10',
    requirements_cost: '0',
    requirement_types: requirement_types,
  },
};
