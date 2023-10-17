import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import CardQuickLinks from './card-quick-links';

const meta: Meta<typeof CardQuickLinks> = {
  title: 'Components/Card Quick Links',
  component: CardQuickLinks,
};

export default meta;

export const Default: StoryObj<typeof CardQuickLinks> = {
  args: {
    heading: 'Quick actions',
    links: [
      {
        text: 'Approve time',
        url: '#'
      },
      {
        text: 'Sign forms',
        url: '#'
      }
    ]
  },
  render: (args) => (
    <CardQuickLinks {...args} />
  ),
};
