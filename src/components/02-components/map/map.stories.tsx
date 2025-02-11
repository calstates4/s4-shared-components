import type { Meta, StoryObj } from '@storybook/react';

import MapField from './map';

const meta: Meta<typeof MapField> = {
  title: 'Components/Map',
  component: MapField,
};

export default meta;

export const Default: StoryObj<typeof MapField> = {
  args: {

  },
};
