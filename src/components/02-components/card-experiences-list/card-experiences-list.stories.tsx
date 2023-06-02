import type { Meta, StoryObj } from '@storybook/react';
import React, { type ReactNode } from 'react';
import CardExperience, {
  type CardExperiencesProps,
} from '../card-experience/card-experience';
import CardExperiencesList from './card-experiences-list';
import { MoreElements as CardExperienceStory } from '../card-experience/card-experience.stories';
import { Default as CardExperienceOneStory } from '../card-experience/card-experience.stories';

const meta: Meta<typeof CardExperiencesList> = {
  title: 'Components/Card Experiences List',
  component: CardExperiencesList,
};

const cardList: ReactNode[] = [];

for (let i = 0; i < 3; i++) {
  cardList.push(
    <CardExperience {...(CardExperienceStory.args as CardExperiencesProps)} />,
  );
}

export default meta;

export const Default: StoryObj<typeof CardExperiencesList> = {
  args: {
    children: cardList,
  },
};

export const OneExperience: StoryObj<typeof CardExperiencesList> = {
  args: {
    children: (
      <CardExperience
        {...(CardExperienceOneStory.args as CardExperiencesProps)}
      />
    ),
  },
};
