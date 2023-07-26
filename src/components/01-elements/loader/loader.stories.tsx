import type { Meta, StoryObj } from '@storybook/react';
import Loader from './loader';

const meta: Meta<typeof Loader> = {
  title: 'Elements/Loader',
  component: Loader,
};

export default meta;

export const Default: StoryObj<typeof Loader> = {
  args: {
    title: 'Loading...',
  },
};
