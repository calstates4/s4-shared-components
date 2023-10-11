import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import OpportunityPage from "../opportunity-page/opportunity-page";

const meta: Meta<typeof OpportunityPage> = {
  title: 'Components/Opportunity Page',
  component: OpportunityPage,
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

const OpprtunityData = {
  breadcrumb: [
    {
      title: 'Opportunities',
      url: '#/opportunities',
    },
    {
      title: 'Opportunity page Title.',
      url: '#',
    },
  ],
  title: 'Actions VC',
  description: description,
  selectURL: '#/create-experience?opportunity=1',
  address: 'Camarillo, CA United States',
  type: 'Hybrid',
  timeCommitment: '20 hours per week',
  term: 'Fall 2023',
  learningOutcomes: `<ul>
    <li>Cillum mollit Lorem velit commodo exercitation irure deserunt Lorem dolore.</li>
    <li>Ex eu et reprehenderit laboris.</li><li>Aute non amet magna.</li>
    <li>Nulla pariatur ad amet eu tempor cillum incididunt enim irure nostrud exercitation elit labore est.</li>
    <li>Cupidatat sint nulla mollit occaecat.</li>
  </ul>`,
  training: 'Training on social media platforms, Canva, WordPress, and the organization\'s database will be provided. Training in marketing and branding will also be provided.',
  other: `<ul>
    <li>Possible fees: No</li>
    <li>Vehicle required: No</li>
    <li>Compensation: No</li>
    <li>Availability: Ongoing</li>
  </ul>`,
  risk: 'Our office is up-to-date with the COVID requirements set by the state and will function with the safety of staff and volunteers as the top priority.',
};

export const Default: StoryObj<typeof OpportunityPage> = {
  args: {
    ...OpprtunityData,
  },
};