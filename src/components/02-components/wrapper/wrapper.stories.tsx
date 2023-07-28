import type { Meta, StoryObj } from '@storybook/react';

import Wrapper from './wrapper';
import React from 'react';

const meta: Meta<typeof Wrapper> = {
  title: 'Components/Wrapper',
  component: Wrapper,
};

export default meta;

export const Default: StoryObj<typeof Wrapper> = {
  args: {
    title: 'The title for the wrapper component',
    description:
      '<p>This is a generic wrapper component that accepts a name, description, and children elements</p>',
  },
  render: (args) => (
    <div>
      <Wrapper {...args}>
        Some example child content
      </Wrapper>
    </div>
  ),
};
