import type { Meta, StoryObj } from '@storybook/react';

import CardExperienceHours from './card-experience-hours';

const meta: Meta<typeof CardExperienceHours> = {
  title: 'Components/Card Experience Hour',
  component: CardExperienceHours,
};

export default meta;

export const Default: StoryObj<typeof CardExperienceHours> = {
  args: {
    hours: 128,
    cta: '/opportunities',
    position: 'row',
  },
};

export const ColumnModifier: StoryObj<typeof CardExperienceHours> = {
  args: {
    hours: 128,
    cta: '/opportunities',
    position: 'column',
  },
};
