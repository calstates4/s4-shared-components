import type { Meta, StoryObj } from '@storybook/react';
import OfferingForm from './offering-form';

const meta: Meta<typeof OfferingForm> = {
  title: 'Components/Offering Form',
  component: OfferingForm,
};

export default meta;

export const AddOffering: StoryObj<typeof OfferingForm> = {
  args: {
    breadcrumb: [
      {
        title: 'Offerings',
        url: '#',
      },
      {
        title: 'Add Offering',
        url: '#',
      },
    ],
    title: 'Add Offering',
  },
};

export const EditOffering: StoryObj<typeof OfferingForm> = {
  args: {
    breadcrumb: [
      {
        title: 'Offerings',
        url: '#',
      },
      {
        title: 'Hi omnes lingua, institutis, legibus inter se differunt.',
        url: '#',
      },
      {
        title: 'Edit Offering',
        url: '#',
      },
    ],
    title: 'Edit Offering',
  },
};
