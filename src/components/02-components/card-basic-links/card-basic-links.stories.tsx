import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import CardBasicLinks from './card-basic-links';

const meta: Meta<typeof CardBasicLinks> = {
  title: 'Components/Card Basic Links',
  component: CardBasicLinks,
};

export default meta;

export const Default: StoryObj<typeof CardBasicLinks> = {
  args: {
    heading: 'Renew agreements',
    links: [
      {
        text: 'Name of campus',
        url: '#'
      },
      {
        text: 'Name of campus',
        url: '#'
      }
    ]
  },
  render: (args) => (
    <CardBasicLinks {...args} />
  ),
};
