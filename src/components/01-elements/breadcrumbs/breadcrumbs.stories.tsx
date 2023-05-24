import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Elements/Breadcrumbs',
  component: Breadcrumbs,
};

export default meta;

export const Default: StoryObj<typeof Breadcrumbs> = {
  args: {
    items: [
      {
        title: 'Offerings',
        url: '#',
      },
      {
        title: 'Offering Name',
        url: '#',
      },
    ],
  },
};
