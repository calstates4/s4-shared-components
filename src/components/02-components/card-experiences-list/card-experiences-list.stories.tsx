import type { Meta, StoryObj } from '@storybook/react';

import CardExperiencesList from './card-experiences-list';


const meta: Meta<typeof CardExperiencesList> = {
  title: 'Components/Card Experiences List',
  component: CardExperiencesList,
};

const cardList = [
  {
    id: '4',
    workflow: 'APPROVED',
    dateEnd: '2023-05-31',
    dateStart: '2023-05-17',
    estimatedHours: 100,
    opportunity: [ {
      title: 'Service Learning aT cam',
      summary: `Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt.
        Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.`,
      location: { locality: 'San Francisco' }
    } ],
  },
  {
    id: '3',
    workflow: 'APPROVED',
    dateEnd: '2023-05-31',
    dateStart: '2023-05-17',
    estimatedHours: 100,
    opportunity: [ {
      title: 'Opportunity',
      summary: 'Pellentesque habitant morbi tristique senectus et netus.',
      location: { locality: 'San Francisco' }
    } ],
  },
  {
    id: '2',
    workflow: 'APPROVED',
    dateEnd: '2023-05-31',
    dateStart: '2023-05-17',
    estimatedHours: 100,
    opportunity: [ {
      title: 'Opportunity',
      summary: `Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt.
      Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.`,
      location: { locality: 'San Francisco' }
    } ],
  }
]

export default meta;

export const Default: StoryObj<typeof CardExperiencesList> = {
  args: {
   cardList: cardList,
  },
  render: (args) => (
    <CardExperiencesList {...args} />
  ),
};
