import type { Meta, StoryObj } from '@storybook/react';

import UserProfileForm from './user-profile-form';

const meta: Meta<typeof UserProfileForm> = {
  title: 'Components/User Profile Form',
  component: UserProfileForm,
};

export default meta;

const breadcrumb = [
  {
    title: 'My Account',
    url: '/account',
  },
  {
    title: 'Edit account',
    url: '/account/edit',
  },
];

export const Partner: StoryObj<typeof UserProfileForm> = {
  args: {
    type: 'partner',
    breadcrumb,
    email: 'email@email.com',
    firstName: 'John',
    lastName: 'Doe',
    preferredFirstName: 'John',
    preferredLastName: 'Doe',
    timezone: 'America/Los_Angeles',
    changePasswordUrl: '#',
    profileUrl: '/account',
  },
};

export const Student: StoryObj<typeof UserProfileForm> = {
  args: {
    type: 'student',
    breadcrumb,
    email: 'email@email.com',
    firstName: 'Jane',
    lastName: 'Doe',
    preferredFirstName: 'Jane',
    preferredLastName: 'Doe',
    timezone: 'America/Los_Angeles',
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
    profileUrl: '/account',
  },
};

export const Faculty: StoryObj<typeof UserProfileForm> = {
  args: {
    type: 'faculty',
    breadcrumb,
    email: 'email@email.com',
    firstName: 'John',
    lastName: 'Doe',
    preferredFirstName: 'John',
    preferredLastName: 'Doe',
    timezone: 'America/Los_Angeles',
    profileUrl: '/account',
  },
};
