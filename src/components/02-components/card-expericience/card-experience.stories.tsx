import type { Meta, StoryObj } from '@storybook/react';

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

export const Default: StoryObj<typeof CardExperience> = {
  args: {
    heading: '{Opportunity Name}',
    state: 'approved',
    description: dummyText,
    cta: '/opportunities',
    ctaTitle: 'MORE DETAILS',
    program: 'Program',
    dateStart: '05/03/2023',
    dateEnd: '05/03/2023',
    location: 'Location',
    hours: 128,
    hoursCtaUrl: '/',
    cardCount: 1,
  },
  render: (args) => (
    <CardExperience {...args} />
  ),
};

export const MoreElements: StoryObj<typeof CardExperience> = {
  args: {
    heading: '{Opportunity Name}',
    state: 'approved',
    description: dummyText,
    cta: '/opportunities',
    ctaTitle: 'MORE DETAILS',
    program: 'Program',
    dateStart: '05/03/2023',
    dateEnd: '05/03/2023',
    location: 'Location',
    hours: 128,
    hoursCtaUrl: '/',
    cardCount: 3,
  },
  render: (args) => (
    <CardExperience {...args} />
  ),
};
