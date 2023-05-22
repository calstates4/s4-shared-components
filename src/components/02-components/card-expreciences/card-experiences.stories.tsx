import type { Meta, StoryObj } from '@storybook/react';

import CardExperiences from './card-experiences';


const meta: Meta<typeof CardExperiences> = {
  title: 'Components/Card Experiences',
  component: CardExperiences,
};

const dummyText = `
  Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt. 
  Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.
`;

export default meta;

export const Default: StoryObj<typeof CardExperiences> = {
  args: {
    heading: '{Opportunity Name}',
    state: 'APPROVED',
    description: dummyText,
    cta: '/opportunities',
    ctaTitle: 'MORE DETAILS',
    program: 'Program',
    dateStart: '05/03/2023',
    dateEnd: '05/03/2023',
    location: 'Location',
    hours: '128',
    hoursText: 'HOURS LOGGED',
    hoursCtaTitle: 'log time',
    hoursCtaUrl: '/',
    variation: 1,
    cardNumberVariation: 'column', 
  },
  render: (args) => (
    <CardExperiences {...args} />
  ),
};
