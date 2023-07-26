import type { Meta, StoryObj } from '@storybook/react';

import OrganizationCard from './organization-card';

const meta: Meta<typeof OrganizationCard> = {
  title: 'Components/OrganizationCard',
  component: OrganizationCard,
};

export default meta;

export const Default: StoryObj<typeof OrganizationCard> = {
  args: {
    id: '34',
    name: 'Tempor dolor eu esse in',
    description:
      'Et cillum aute voluptate et anim aute aliqua commodo dolor quis mollit sit. Nisi labore reprehenderit sint ad. Laboris aliquip excepteur fugiat minim nulla cupidatat cupidatat commodo tempor occaecat dolor voluptate.',
  },
  render: (args) => (
    <div style={{ maxWidth: '400px' }}>
      <OrganizationCard {...args} />
    </div>
  ),
};
