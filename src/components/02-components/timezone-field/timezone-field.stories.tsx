import type { Meta, StoryObj } from '@storybook/react';

import TimezoneField from './timezone-field';

const meta: Meta<typeof TimezoneField> = {
  title: 'Components/Timezone Field',
  component: TimezoneField,
};

export default meta;

export const Default: StoryObj<typeof TimezoneField> = {
  args: {
    id: 'timezone',
    label: 'Timezone',
    name: 'timezone',
    defaultValue: 'America/Los_Angeles',
    required: true,
  },
};
