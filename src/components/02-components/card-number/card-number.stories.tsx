import type { Meta, StoryObj } from '@storybook/react';

import CardNumber from './card-number';

const meta: Meta<typeof CardNumber> = {
  title: 'Components/Card Number',
  component: CardNumber,
};

export default meta;

export const Default: StoryObj<typeof CardNumber> = {
  args: {
    heading: '128',
    subHeading: 'HOURS LOGGED',
    cta: '/opportunities',
    ctaTitle: 'log time',
    variation: 'row',
  },
  render: (args) => (
    <CardNumber {...args} />
  ),
};
