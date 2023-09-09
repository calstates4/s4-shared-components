import type { Meta, StoryObj } from '@storybook/react';

import UserProfileForm from './user-profile-form';

const meta: Meta<typeof UserProfileForm> = {
  title: 'Components/User Profile Form',
  component: UserProfileForm,
};

export default meta;

export const Partner: StoryObj<typeof UserProfileForm> = {
  args: {
    type: 'partner',
    email: 'email@email.com',
    firstName: 'John',
    lastName: 'Doe',
    preferredFirstName: 'John',
    preferredLastName: 'Doe',
    timezone: 'America/Los_Angeles',
  },
};

export const Student: StoryObj<typeof UserProfileForm> = {
  args: {
    type: 'student',
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
};

export const Faculty: StoryObj<typeof UserProfileForm> = {
  args: {
    type: 'faculty',
    email: 'email@email.com',
    firstName: 'John',
    lastName: 'Doe',
    preferredFirstName: 'John',
    preferredLastName: 'Doe',
    timezone: 'America/Los_Angeles',
    universityId: '123456',
  },
};
