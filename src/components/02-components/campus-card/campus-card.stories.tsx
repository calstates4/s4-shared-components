import type { Meta, StoryObj } from '@storybook/react';

import CampusCard from './campus-card';

const meta: Meta<typeof CampusCard> = {
  title: 'Components/CampusCard',
  component: CampusCard,
};

export default meta;

const campusData = {
  title: 'Channel Islands',
  location: 'Camarillo, CA (County)',
  website: 'https://www.csuci.edu/',
  programs:
    'Academic Internships, Community Engagement, National Service, Teacher Credentialing',
  agreement: {
    state: 'published',
    name: 'Name of agreement',
    agreementDocument: '#',
    expireDate: 'July 23rd, 2023',
  },
  initiatePartnershipLink: '#',
  renewPartnershipLink: '#',
  reactivePartnershipLink: '#',
};

export const NoPartnership: StoryObj<typeof CampusCard> = {
  args: {
    ...campusData,
    agreement: undefined,
  },
};

export const Pending: StoryObj<typeof CampusCard> = {
  args: {
    ...campusData,
    agreement: {
      ...campusData.agreement,
      state: 'draft',
    },
  },
};

export const Active: StoryObj<typeof CampusCard> = {
  args: campusData,
};

export const Expired: StoryObj<typeof CampusCard> = {
  args: {
    ...campusData,
    agreement: {
      ...campusData.agreement,
      state: 'expired',
    },
  },
};

export const Archived: StoryObj<typeof CampusCard> = {
  args: {
    ...campusData,
    agreement: {
      ...campusData.agreement,
      state: 'archived',
    },
  },
};
