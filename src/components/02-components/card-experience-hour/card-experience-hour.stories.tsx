import type { Meta, StoryObj } from '@storybook/react';

import CardExperieceHour from './card-experience-hour';

const meta: Meta<typeof CardExperieceHour> = {
  title: 'Components/Card Experience Hour',
  component: CardExperieceHour,
};

export default meta;

export const Default: StoryObj<typeof CardExperieceHour> = {
  args: {
    heading: 128,
    subHeading: 'HOURS LOGGED',
    cta: '/opportunities',
    ctaTitle: 'log time',
    position: 'row',
  },
};
