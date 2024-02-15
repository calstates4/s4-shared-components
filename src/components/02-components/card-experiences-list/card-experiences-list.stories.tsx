import type { Meta, StoryObj } from '@storybook/react';
import React, { type ReactNode } from 'react';
import CardExperience, {
  type CardExperienceProps,
} from '../card-experience/card-experience';
import CardExperiencesList from './card-experiences-list';
import {
  WideCard as WideCardStory,
  NarrowCard as NarrowCardStory,
} from '../card-experience/card-experience.stories';

const meta: Meta<typeof CardExperiencesList> = {
  title: 'Components/Card Experiences List',
  component: CardExperiencesList,
};

const cardList: ReactNode[] = [];

for (let i = 0; i < 3; i++) {
  cardList.push(
    <CardExperience {...(NarrowCardStory.args as CardExperienceProps)} />,
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
      <CardExperience {...(WideCardStory.args as CardExperienceProps)} />
    ),
  },
};
