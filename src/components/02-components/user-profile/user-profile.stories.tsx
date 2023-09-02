import type { Meta, StoryObj } from '@storybook/react';

import UserProfile from './user-profile';

const meta: Meta<typeof UserProfile> = {
  title: 'Components/User Profile',
  component: UserProfile,
};

export default meta;

export const Partner: StoryObj<typeof UserProfile> = {
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

export const Student: StoryObj<typeof UserProfile> = {
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

export const Faculty: StoryObj<typeof UserProfile> = {
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
