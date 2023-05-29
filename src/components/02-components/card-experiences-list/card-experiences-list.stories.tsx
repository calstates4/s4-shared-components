import type { Meta, StoryObj } from '@storybook/react';
import CardExperiences, { type CardExperiencesProps} from '../card-exprecience/card-experience';
import CardExperiencesList from './card-experiences-list';
import { Default as CardExperiencesStories } from '../card-exprecience/card-experience.stories'

const meta: Meta<typeof CardExperiencesList> = {
  title: 'Components/Card Experiences List',
  component: CardExperiencesList,
};

const cardLst: React.ReactNode[] = [];

for(let i = 0; i < 3; i++) {
  cardLst.push(<CardExperiences {...(CardExperiencesStories.args as CardExperiencesProps)}/>)
}

export default meta;

export const Default: StoryObj<typeof CardExperiencesList> = {
  args: {
    children: cardLst ,
  },
};
