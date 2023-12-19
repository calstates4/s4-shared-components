import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import CardExperience from './card-experience';

const meta: Meta<typeof CardExperience> = {
  title: 'Components/Card Experience',
  component: CardExperience,
};

const dummyText = `
  Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt.
  Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.
`;

export default meta;

export const WideCard: StoryObj<typeof CardExperience> = {
  args: {
    heading: '{Opportunity Name}',
    state: 'approved',
    description: dummyText,
    cta: '/opportunities',
    program: 'Program',
    dateStart: '05/03/2023',
    dateEnd: '05/03/2023',
    location: 'Location',
    hours: 128,
    hoursCtaUrl: '/',
    cardCount: 1,
  },
};

export const WideCardWithPendingForms: StoryObj<typeof CardExperience> = {
  args: {
    heading: '{Opportunity Name}',
    state: 'approved',
    description: dummyText,
    cta: '/opportunities',
    program: 'Program',
    dateStart: '05/03/2023',
    dateEnd: '05/03/2023',
    location: 'Location',
    hasPendingForm: true,
    hours: 128,
    hoursCtaUrl: '/',
    cardCount: 1,
  },
};

export const NarrowCard: StoryObj<typeof CardExperience> = {
  args: {
    heading: '{Opportunity Name}',
    state: 'approved',
    description: dummyText,
    cta: '/opportunities',
    program: 'Program',
    dateStart: '05/03/2023',
    dateEnd: '05/03/2023',
    location: 'Location',
    hours: 128,
    hoursCtaUrl: '/',
    cardCount: 3,
  },
};

export const NarrowCardWithPendingForms: StoryObj<typeof CardExperience> = {
  args: {
    heading: '{Opportunity Name}',
    state: 'approved',
    description: dummyText,
    cta: '/opportunities',
    program: 'Program',
    dateStart: '05/03/2023',
    dateEnd: '05/03/2023',
    location: 'Location',
    hasPendingForm: true,
    hours: 128,
    hoursCtaUrl: '/',
    cardCount: 3,
  },
};
