import type { Meta, StoryObj } from '@storybook/react';

import OfferingPage from './offering-page';
import OfferingRelatedExperiencesTable, {
  type OfferingRelatedExperiencesTableProps,
} from '../offering-related-experiences-table/offering-related-experiences-table';

import { Experiences as OfferingExperiencesRelatedTableStories } from '../offering-related-experiences-table/offering-related-experiences-table.stories';
import React from 'react';

const meta: Meta<typeof OfferingPage> = {
  title: 'Components/Offering Page',
  component: OfferingPage,
};

export default meta;

const description = `<p>
  We exist to serve the most vulnerable in our communities. We do this by
  partnering with agencies to give us insight into areas where volunteers can
  meet the most pressing needs, empowering volunteers to manifest compassion and
  service as representatives of their communities, and mobilizing churches and
  businesses to serve in projects in their cities throughout the year!
</p>`;

const healthSafety = `<p>
Deserunt mollit incididunt esse reprehenderit tempor deserunt officia culpa
ipsum id exercitation consequat. Irure pariatur est ea eiusmod duis quis veniam
deserunt. Nisi commodo laboris anim mollit dolor. Reprehenderit sint nostrud
enim qui.
</p>
<ul>
<li>Cillum mollit Lorem velit commodo exercitation irure deserunt Lorem dolore.</li>
<li>Ex eu et reprehenderit laboris.</li><li>Aute non amet magna.</li>
<li>Nulla pariatur ad amet eu tempor cillum incididunt enim irure nostrud exercitation elit labore est.</li>
<li>Cupidatat sint nulla mollit occaecat.</li>
</ul>`;

const training = `<p>
  We exist to serve the most vulnerable in our communities. We do this by
  partnering with agencies to give us insight into areas where volunteers can
  meet the most pressing needs, empowering volunteers to manifest compassion and
  service as representatives of their communities, and mobilizing churches and
  businesses to serve in projects in their cities throughout the year!
</p>`;

const offeringData = {
  breadcrumb: [
    {
      title: 'Offerings',
      url: '#',
    },
    {
      title: 'Hi omnes lingua, institutis, legibus inter se differunt.',
      url: '#',
    },
  ],
  title: 'Hi omnes lingua, institutis, legibus inter se differunt.',
  editUrl: '#',
  type: 'Hybrid',
  description,
  healthSafety,
  department: 'Finance, Human Resources, Sales',
  focusPopulation:
    'People Experiencing Disability, Seniors, People Experiencing Material Poverty',
  focusAreas:
    'People Experiencing Disability, Seniors, People Experiencing Material Poverty',
  subFocusAreas:
    'People Experiencing Disability, Seniors, People Experiencing Material Poverty',
  activities: 'People Experiencing Disability, Seniors',
  timeCommitment: '20 hours per week',
  address: 'Camarillo, CA United States',
  maxStudents: 1,
  requiredLanguages: 'None',
  preferredLanguages: 'Spanish',
  startDate: '04/04/2023',
  endDate: '04/10/2023',
  primaryContact: 'Emily Parker',
  timeApprovers: 'Emily Parker, Emily Parker',
  formSigners: 'Emily Parker',
  observers: 'Emily Parker, Emily Parker, Emily Parker',
  training,
  published: true,
  children: (
    <OfferingRelatedExperiencesTable
      {...(OfferingExperiencesRelatedTableStories.args as OfferingRelatedExperiencesTableProps)}
    />
  ),
};

export const Default: StoryObj<typeof OfferingPage> = {
  args: {
    ...offeringData,
  },
};

export const NoExperiences: StoryObj<typeof OfferingPage> = {
  args: {
    ...offeringData,
    children: (
      <OfferingRelatedExperiencesTable
        url="#"
        totalItems={0}
        itemsPerPage={0}
        currentPage={0}
      />
    ),
  },
};
