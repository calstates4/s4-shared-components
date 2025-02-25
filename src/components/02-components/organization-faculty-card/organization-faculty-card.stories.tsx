import type { Meta, StoryObj } from '@storybook/react';

import OrganizationFacultyCard from './organization-faculty-card';

const meta: Meta<typeof OrganizationFacultyCard> = {
  title: 'Components/Organization Faculty Card',
  component: OrganizationFacultyCard,
};

export default meta;

export const Default: StoryObj<typeof OrganizationFacultyCard> = {
  args: {
    id: '34',
    title: 'Action VC',
    address: 'Camarillo, CA United States',
    description:
      'Et cillum aute voluptate et anim aute aliqua commodo dolor quis mollit sit. Nisi labore reprehenderit sint ad. Laboris aliquip excepteur fugiat minim nulla cupidatat cupidatat commodo tempor occaecat dolor voluptate.',
    url: '#',
    type: 'Human, Social, Employment Services (Nonprofit) ',
    focusPopulation: 'People Experiencing Disability, Seniors, People Experiencing Material Poverty',
    focusAreas: 'Civic Engagement, Construction, Emergency Services & Public Safety, Health & Medicine',
  },
  render: (args) => (
    <OrganizationFacultyCard {...args} />
  ),
};
