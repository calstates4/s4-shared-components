import type { Meta, StoryObj } from '@storybook/react';

import OpportunityCard from './opportunity-card';

const meta: Meta<typeof OpportunityCard> = {
  title: 'Components/Opportunity Card',
  component: OpportunityCard,
};

export default meta;

const description = `
  We exist to serve the most vulnerable in our communities. We do this by
  partnering with agencies to give us insight into areas where volunteers can
  meet the most pressing needs, empowering volunteers to manifest compassion and
  service as representatives of their communities, and mobilizing churches and
  businesses to serve in projects in their cities throughout the year!
`;

export const Default: StoryObj<typeof OpportunityCard> = {
  args: {
    id: 1,
    title: 'Service Learning at Action VC',
    url: '#',
    destinationUrl: '#',
    location: 'Camarillo, CA United States',
    type: 'Hybrid',
    timeCommitment: '20 hours',
    termPeriod: 'Fall 2023',
    program: 'Service Learning',
    description,
  },
};

export const CardSelected: StoryObj<typeof OpportunityCard> = {
  args: {
    id: 1,
    title: 'Service Learning at Action VC',
    url: '#',
    location: 'Camarillo, CA United States',
    type: 'Hybrid',
    timeCommitment: '20 hours',
    termPeriod: 'Fall 2023',
    description,
    cardSelected: true,
    requirements: `{Lorem ipsum dolor sit amet consectetur. Nulla lacus volutpat pretium facilisis non vulputate mauris scelerisque. Tincidunt mauris auctor semper mauris auctor viverra facilisi at tempus.}`,
  },
};
