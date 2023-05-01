import type { Meta, StoryObj } from '@storybook/react';

import Link from './link';

const meta: Meta<typeof Link> = {
  title: 'Elements/Link',
  component: Link,
};

export default meta;

export const Default: StoryObj<typeof Link> = {
  args: {
    href: 'https://www.fourkitchens.com/',
  },
  render: (args) => <Link {...args}>This is a link</Link>,
};
