import type { Meta, StoryObj } from '@storybook/react';

import CheckboxInput from './checkbox-input';
import React from 'react';

const meta: Meta<typeof CheckboxInput> = {
  title: 'Elements/Checkbox Input',
  component: CheckboxInput,
};

export default meta;

export const Default: StoryObj<typeof CheckboxInput> = {
  args: {
    id: '1',
    value: '1',
    name: 'chb-sample',
    title: 'Sample #1',
    checked: true,
  },
  render: (args) => <CheckboxInput {...args} />,
};
