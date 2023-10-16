import type { Meta, StoryObj } from '@storybook/react';

import OrganizationForm from './organization-form';

const meta: Meta<typeof OrganizationForm> = {
  title: 'Components/OrganizationForm',
  component: OrganizationForm,
};

export default meta;

const description = `<p>
  We exist to serve the most vulnerable in our communities. We do this by
  partnering with agencies to give us insight into areas where volunteers can
  meet the most pressing needs, empowering volunteers to manifest compassion and
  service as representatives of their communities, and mobilizing churches and
  businesses to serve in projects in their cities throughout the year!
</p>`;

const healthSafetyInfo = `<p>
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

const options = [
  {
    id: '1',
    label: 'Option 1',
  },
  {
    id: '2',
    label: 'Option 2',
  },
  {
    id: '3',
    label: 'Option 3',
  },
  {
    id: '4',
    label: 'Option 4',
  },
  {
    id: '5',
    label: 'Option 5',
  },
  {
    id: '6',
    label: 'Option 6',
  },
  {
    id: '7',
    label: 'Option 7',
  },
  {
    id: '8',
    label: 'Option 8',
  },
  {
    id: '9',
    label: 'Option 9',
  },
];

export const AddOrganization: StoryObj<typeof OrganizationForm> = {
  args: {
    mainContactUserOptions: options,
    industryOptions: options,
    organizationTypeOptions: options,
    focusAreaOptions: options,
    focusPopulationOptions: options,
    mainHeadingLevel: 'h2',
    byline:
      'In order to complete your registration process please create an Organization.',
  },
};

export const EditOrganization: StoryObj<typeof OrganizationForm> = {
  args: {
    isEdit: true,
    name: 'Test Organization',
    address: {
      country: 'US',
      streetAddress1: '30 Rockefeller Plaza',
      city: 'New York',
      state: 'NY',
      zipCode: '10112',
    },
    offeringRequiresApproval: true,
    description,
    // adminNotes,
    healthSafetyInfo,
    mainContactInfo: {
      firstName: 'Natalie',
      lastName: 'Pavia',
      jobTitle: 'Executive Director',
      phone: '(805) 987-0300',
      email: 'natalie.pavia@actionvc.org',
      user: '3',
    },
    publicContactInfo: {
      phone: '(805) 987-0300',
      email: 'natalie.pavia@actionvc.org',
      website: 'https://www.actionvc.org',
    },
    legalContactSameAsMain: false,
    // legalContactInfo,
    industry: '4',
    orgType: '1',
    focusPopulation: ['3', '5'],
    focusAreas: ['6', '8'],
    subFocusAreas: ['2', '7'],
    populationSize: 25,
    mainContactUserOptions: options,
    industryOptions: options,
    organizationTypeOptions: options,
    focusAreaOptions: options,
    focusPopulationOptions: options,
  },
};
