import type { Meta, StoryObj } from '@storybook/react';

import OfferingCard from './offering-card';

const meta: Meta<typeof OfferingCard> = {
  title: 'Components/Offering Card',
  component: OfferingCard,
};

export default meta;

const offeringData = {
  title: 'Hi omnes lingua, institutis, legibus inter se differunt.',
  url: '#',
  editUrl: '#',
  published: true,
  type: 'Hybrid',
  department: 'Finance',
  startDate: '04/04/2023',
  endDate: '04/10/2023',
  timeCommitment: '20 hours per week'

};

export const Published: StoryObj<typeof OfferingCard> = {
  args: {
    ...offeringData,

  }
};

export const Unpublished: StoryObj<typeof OfferingCard> = {
  args: {
    ...offeringData,
    published: false,

  }
};



