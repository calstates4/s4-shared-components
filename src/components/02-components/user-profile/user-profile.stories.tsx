import type { Meta, StoryObj } from '@storybook/react';

import UserProfile from './user-profile';

const meta: Meta<typeof UserProfile> = {
  title: 'Components/User Profile',
  component: UserProfile,
};

export default meta;

const breadcrumbs = [
  {
    title: 'My Account',
    url: '/user/account',
  },
];

export const Partner: StoryObj<typeof UserProfile> = {
  args: {
    breadcrumbs,
    userData: {
      username: 'johndoe',
      email: 'email@email.com',
      firstName: 'John',
      lastName: 'Doe',
      preferredFirstName: 'John',
      preferredLastName: 'Doe',
      timezone: 'America/Los_Angeles',
    },
    editProfileUrl: '#',
  },
};

export const Student: StoryObj<typeof UserProfile> = {
  args: {
    breadcrumbs,
    userData: {
      username: 'janedoe',
      email: 'email@email.com',
      firstName: 'Jane',
      lastName: 'Doe',
      preferredFirstName: 'Jane',
      preferredLastName: 'Doe',
      timezone: 'America/Los_Angeles',
      universityId: '123456',
      primaryEmergencyContact: {
        name: 'Jannet Doe',
        relationship: 'Mother',
        primaryPhone: '555-5555',
        secondaryPhone: '555-5556',
        email: 'email@email.com',
      },
      secondaryEmergencyContact: {
        name: 'Jack Doe',
        relationship: 'Father',
        primaryPhone: '555-5557',
        secondaryPhone: '555-5558',
        email: 'email@email.com',
      },
    },
    editProfileUrl: '#',
  },
};

export const Faculty: StoryObj<typeof UserProfile> = {
  args: {
    breadcrumbs,
    userData: {
      username: 'johndoe',
      email: 'email@email.com',
      firstName: 'John',
      lastName: 'Doe',
      preferredFirstName: 'John',
      preferredLastName: 'Doe',
      timezone: 'America/Los_Angeles',
      universityId: '123456',
    },
    editProfileUrl: '#',
  },
};
