import type { Meta, StoryObj } from '@storybook/react';

import AddressField from './address-field';

const meta: Meta<typeof AddressField> = {
  title: 'Components/Address Field',
  component: AddressField,
};

export default meta;

export const Default: StoryObj<typeof AddressField> = {
  args: {
    address: {
      country: 'US',
      streetAddress1: '30 Rockefeller Plaza',
      city: 'New York',
      state: 'NY',
      zipCode: '10112',
    },
  },
};
