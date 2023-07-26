import type { Meta, StoryObj } from '@storybook/react';

import Pager from './pager';

const meta: Meta<typeof Pager> = {
  title: 'Elements/Pager',
  component: Pager,
};

export default meta;

export const Default: StoryObj<typeof Pager> = {
  args: {
    baseUrl: 'http://localhost:6006?name=test',
    count: 24,
    page: 9,
  },
};
