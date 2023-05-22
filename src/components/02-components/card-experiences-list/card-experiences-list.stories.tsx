import type { Meta, StoryObj } from '@storybook/react';

import CardExperiencesList from './card-experiences-list';


const meta: Meta<typeof CardExperiencesList> = {
  title: 'Components/Card Experiences List',
  component: CardExperiencesList,
};

const cardList = [
  {
    id: '4',
    title: 'Experiencia 1',
    workflow: 'published',
    dateEnd: '2023-05-31',
    dateStart: '2023-05-17',
    estimatedHours: 100,
    opportunity: [ {
      title: 'Opportunity',
      summary: '<p>Pellentesque habitant morbi tristique senectus et netus.</p>',
      location: { locality: 'San Francisco' }
    } ],
  },
  {
    id: '3',
    title: 'Experiencia 2',
    workflow: 'published',
    dateEnd: '2023-05-31',
    dateStart: '2023-05-17',
    estimatedHours: 100,
    opportunity: [ {
      title: 'Opportunity',
      summary: '<p>Pellentesque habitant morbi tristique senectus et netus.</p>',
      location: { locality: 'San Francisco' }
    } ],
  },
  {
    id: '2',
    title: 'Experiencia 3',
    workflow: 'published',
    dateEnd: '2023-05-31',
    dateStart: '2023-05-17',
    estimatedHours: 100,
    opportunity: [ {
      title: 'Opportunity',
      summary: '<p>Pellentesque habitant morbi tristique senectus et netus.</p>',
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
