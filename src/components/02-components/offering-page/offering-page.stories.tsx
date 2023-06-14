import type { Meta, StoryObj } from '@storybook/react';

import OfferingPage from './offering-page';

const meta: Meta<typeof OfferingPage> = {
  title: 'Components/OfferingPage',
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
  title: 'Hi omnes lingua, institutis, legibus inter se differunt.',
  url: '/',
  editUrl: '/edit',
  type: 'Hybrid',
  description,
  healthSafety,
  department: 'Finance, Human Resources, Sales',
  focusPopulation: 'People Experiencing Disability, Seniors, People Experiencing Material Poverty',
  focusAreas: 'People Experiencing Disability, Seniors, People Experiencing Material Poverty',
  subFocusAreas: 'People Experiencing Disability, Seniors, People Experiencing Material Poverty',
  activities: 'People Experiencing Disability, Seniors',
  timeCommitment: '20 hours per week',
  address: 'Camarillo, CA United States',
  maxStudents: 1,
  requiredLanguages: 'None',
  preferredLanguages: 'Spanish',
  startDate: '04/04/2023',
  endDate: '04/10/2023',
  primaryContact: 'Emily Parker',
  timeApprovers: 'Emily Parker',
  formSigners: 'Emily Parker',
  observers: 'Emily Parker',
  training
};

export const Default: StoryObj<typeof OfferingPage> = {
  args: {
    ...offeringData,
  }
};




