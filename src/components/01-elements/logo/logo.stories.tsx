import type { Meta, StoryObj } from '@storybook/react';

import Logo from './logo';

const meta: Meta<typeof Logo> = {
  title: 'Elements/Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'branding',
      values: [
        { name: 'branding', value: '#003865' },
      ],
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Logo> = {};
