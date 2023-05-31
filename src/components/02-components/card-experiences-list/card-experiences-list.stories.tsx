import type { Meta, StoryObj } from '@storybook/react';
import CardExperience, { type CardExperiencesProps} from '../card-expericience/card-experience';
import CardExperiencesList from './card-experiences-list';
import { MoreElements as CardExperienceStorie } from '../card-expericience/card-experience.stories'
import { Default as CardExperienceOneStorie } from '../card-expericience/card-experience.stories'

const meta: Meta<typeof CardExperiencesList> = {
  title: 'Components/Card Experiences List',
  component: CardExperiencesList,
};

const cardList: React.ReactNode[] = [];

for(let i = 0; i < 3; i++) {
  cardList.push(<CardExperience {...(CardExperienceStorie.args as CardExperiencesProps)}/>)
}

export default meta;

export const Default: StoryObj<typeof CardExperiencesList> = {
  args: {
    children: cardList,
  },
};

export const OneExperience: StoryObj<typeof CardExperiencesList> = {
  args: {
    children: <CardExperience {...(CardExperienceOneStorie.args as CardExperiencesProps)}/> ,
  },
};
