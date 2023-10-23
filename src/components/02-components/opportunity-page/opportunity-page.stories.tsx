import type { Meta, StoryObj } from '@storybook/react';
import OpportunityPage from "../opportunity-page/opportunity-page";

const meta: Meta<typeof OpportunityPage> = {
  title: 'Components/Opportunity Page',
  component: OpportunityPage,
};

export default meta;

const description = `<p>
  At ACTION VC, we know that the power of a good story has the ability to change
  lives. Our Impact Storyteller(s) work with volunteers and clients to capture
  and organize mission moments across the organization. Then they work to
  disseminate these mission moments to the ACTION VC community across social,
  web, and mailer channels. The Impact Storyteller(s) will perform duties such
  as: volunteer site visitations, client interviews, photography/ social media,
  campaign creation, storytelling and more.
</p>`;

const OpportunityData = {
  breadcrumb: [
    {
      title: 'Opportunities',
      url: '#/opportunities',
    },
    {
      title: 'Opportunity name',
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
    ...OpportunityData,
  },
};
