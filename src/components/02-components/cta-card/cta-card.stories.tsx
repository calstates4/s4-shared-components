import type { Meta, StoryObj } from '@storybook/react';

import CtaCard from './cta-card';

const meta: Meta<typeof CtaCard> = {
  title: 'Components/CTA Card',
  component: CtaCard,
};

const dummyText = `
  The Create an Experience process is a personalized, interactive road map that allows you to search for an experiential 
  learning opportunity and connect it with a specific program and/or course. The easy, step-by-step process walks you through 
  any requirements, forms and approvals that may be needed. Let’s get started!
`;

export default meta;

export const Default: StoryObj<typeof CtaCard> = {
  args: {
    heading: 'Let’s create your first experience!',
    subHeading: 'What is an experience?',
    description: dummyText,
    cta: '/opportunities',
    ctaTitle: 'BROWSE ALL OPPORTUNITIES',
  },
  render: (args) => (
    <CtaCard {...args} />
  ),
};
