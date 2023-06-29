import type { Meta, StoryObj } from '@storybook/react';
import OrganizationList from './organization-list';
import OrganizationCard, {
  type OrganizationCardProps,
} from '../organization-card/organization-card';
import { Default as OrganizationCardStories } from '../organization-card/organization-card.stories';

const meta: Meta<typeof OrganizationList> = {
  title: 'Components/OrganizationList',
  component: OrganizationList,
};

const orgs = Array.from({ length: 9 }, (_, i) => i).map(() => (
  <OrganizationCard
    {...(OrganizationCardStories.args as OrganizationCardProps)}
  />
));

export default meta;

export const Default: StoryObj<typeof OrganizationList> = {
  args: {
    currentFilters: {
      orgName: '',
    },
    url: '#',
    createOrgUrl: '#',
    totalItems: 23,
    itemsPerPage: 9,
    currentPage: 2,
    children: orgs,
  },
};
