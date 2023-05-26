import type { Meta, StoryObj } from '@storybook/react';

import CardExperienceHour from './card-experience-hour';

const meta: Meta<typeof CardExperienceHour> = {
  title: 'Components/Card Experience Hour',
  component: CardExperienceHour,
};

export default meta;

export const Default: StoryObj<typeof CardExperienceHour> = {
  args: {
    hours: 128,
    cta: '/opportunities',
    position: 'row',
  },
};
