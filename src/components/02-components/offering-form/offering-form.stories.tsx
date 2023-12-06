import type { Meta, StoryObj } from '@storybook/react';
import OfferingForm from './offering-form';

const meta: Meta<typeof OfferingForm> = {
  title: 'Components/Offering Form',
  component: OfferingForm,
};

export default meta;

const defaultDescription = `<p>
  We exist to serve the most vulnerable in our communities. We do this by
  partnering with agencies to give us insight into areas where volunteers can
  meet the most pressing needs, empowering volunteers to manifest compassion and
  service as representatives of their communities, and mobilizing churches and
  businesses to serve in projects in their cities throughout the year!
</p>`;

const defaultTraining = `<p>
  Plura mihi bona sunt, inclinet, amari petere vellent.
  Me non paenitet nullum festiviorem excogitasse ad hoc.
  Ullamco laboris nisi ut aliquid ex ea commodi consequat.
  Tu quoque, Brute, fili mi, nihil timor populi, nihil!
</p>`;

const defaultApplicationInstructions = `<p>
  Quid securi etiam tamquam eu fugiat nulla pariatur. Magna pars studiorum, prodita quaerimus.
</p>`;

const defaultHealthSafetyInformation = `<p>
  Inmensae subtilitatis, obscuris et malesuada fames. Cum ceteris in veneratione tui montes, nascetur mus. At nos hinc posthac, sitientis piros Afros. Curabitur est gravida et libero vitae dictum. Non equidem invideo, miror magis posuere velit aliquet. Plura mihi bona sunt, inclinet, amari petere vellent.
</p>`;

const defaultSupervision = `<p>
  Ullamco laboris nisi ut aliquid ex ea commodi consequat. Hi omnes lingua, institutis, legibus inter se differunt.
</p>`;

const users = [
  { id: '1', label: 'Emily Parker' },
  { id: '2', label: 'Mathew Ross' },
  { id: '3', label: 'Carlos Smith' },
  { id: '4', label: 'Robert Thomsom' },
  { id: '5', label: 'Marcus Rivers' },
  { id: '6', label: 'Peter Mask' },
  { id: '7', label: 'David Paz' },
  { id: '8', label: 'Martin Lopéz' },
  { id: '9', label: 'Christopher James' },
  { id: '10', label: 'Harry Brown' },
];

const departments = [
  { id: '1', label: 'Design' },
  { id: '2', label: 'Human Resources' },
  { id: '3', label: 'Sales' },
];

const focusPopulations = [
  { id: '1', label: 'People Experiencing Addiction' },
  { id: '2', label: 'Seniors' },
  { id: '3', label: 'Veterans, Active Military and/or Military Families' },
  { id: '4', label: 'Veterans, People Experiencing Homelessness' },
  { id: '5', label: 'People Experiencing Material Poverty' },
  { id: '6', label: 'Adults' },
  { id: '7', label: 'Formerly Incarcerated People' },
  { id: '8', label: 'Children/Youth' },
  { id: '9', label: 'Immigrants/Refugees' },
];

const focusAreas = [
  { id: '1', label: 'Emergency Services & Public Safety' },
  { id: '2', label: 'International Service Experiences' },
  { id: '3', label: 'Arts, Culture, and Humanities' },
  { id: '4', label: 'Construction' },
  { id: '5', label: 'Restorative Justice' },
  { id: '6', label: 'Transportation & Tourism' },
  { id: '7', label: 'Migration & Naturalization Services' },
];

const subFocusAreas = [
  { id: '1', label: 'Legal Assistance' },
  { id: '2', label: 'Human Rights and Liberties' },
  { id: '3', label: 'Political Engagement' },
  { id: '4', label: 'Cultural Programs' },
  { id: '5', label: 'Fine Arts' },
];

const activities = [
  {
    id: '1',
    label: 'Support or assist with an event, program, or community project',
  },
  { id: '2', label: 'Prepare and/or serve food' },
  { id: '3', label: 'Serve in a coaching role' },
  { id: '4', label: 'Provide translation and/or transcription services' },
  {
    id: '5',
    label:
      'Participate in a painting, building, renovation or construction activity (such as, neighborhood/housing restoration or building theater props or playgrounds, etc)',
  },
];

const requirements = [
  {
    id: '1',
    label: 'Support or assist with an event, program, or community project',
  },
  { id: '2', label: 'Prepare and/or serve food' },
  { id: '3', label: 'Serve in a coaching role' },
  { id: '4', label: 'Provide translation and/or transcription services' },
  {
    id: '5',
    label:
      'Participate in a painting, building, renovation or construction activity (such as, neighborhood/housing restoration or building theater props or playgrounds, etc)',
  },
];

const languages = [
  { id: '1', label: 'Spanish' },
  { id: '2', label: 'French' },
  { id: '3', label: 'German' },
  { id: '4', label: 'English' },
];

export const AddOffering: StoryObj<typeof OfferingForm> = {
  args: {
    breadcrumb: [
      {
        title: 'Offerings',
        url: '#',
      },
      {
        title: 'Add Offering',
        url: '#',
      },
    ],
    departments,
    address: {
      label: 'Location of Offering',
      country: 'US',
      streetAddress1: '30 Rockefeller Plaza',
      streetAddress2: 'Mercedem aut nummos unde',
      city: 'New York',
      state: 'NY',
      zipCode: '10112',
    },
    requirements,
    primaryContacts: users,
    timeApprovers: users,
    formSigners: users,
    observers: users,
    preferredLanguages: languages,
    requiredLanguages: languages,
    focusPopulations,
    focusAreas,
    subFocusAreas,
    activities,
  },
};

export const EditOffering: StoryObj<typeof OfferingForm> = {
  args: {
    isEdit: true,
    cancelUrl: '#',
    duplidateUr: '#',
    breadcrumb: [
      {
        title: 'Offerings',
        url: '#',
      },
      {
        title: 'Hi omnes lingua, institutis, legibus inter se differunt.',
        url: '#',
      },
      {
        title: 'Edit offering',
        url: '#',
      },
    ],
    departments,
    address: {
      label: 'Location of Offering',
      country: 'US',
      streetAddress1: '30 Rockefeller Plaza',
      streetAddress2: 'Mercedem aut nummos unde',
      city: 'New York',
      state: 'NY',
      zipCode: '10112',
    },
    primaryContacts: users,
    timeApprovers: users,
    formSigners: users,
    observers: users,
    preferredLanguages: languages,
    requiredLanguages: languages,
    focusPopulations,
    focusAreas,
    subFocusAreas,
    activities,
    requirements,
    defaultPrimaryContact: '1',
    defaultTimeApprovers: ['1', '4'],
    defaultFormSigners: ['5', '8'],
    defaultObservers: ['3', '6'],
    defaultPreferredLanguages: ['1', '3'],
    defaultRequiredLanguages: ['3', '4'],
    defaultFocusPopulations: ['2', '3'],
    defaultFocusAreas: ['5', '7'],
    defaultSubFocusAreas: ['2', '4'],
    defaultActivities: ['1'],
    defaultRequirements: ['2'],
    defaultName: 'Hi omnes lingua, institutis, legibus inter se differunt.',
    defaultRequiresApproval: true,
    defaultApplicationInstructions,
    defaultHealthSafetyInformation,
    defaultSupervision,
    defaultDepartment: '2',
    defaultOfferingType: 'remote',
    defaultMaxStudents: 2,
    defaultStartDate: '2023-07-04',
    defaultEndDate: '2023-07-10',
    defaultDescription,
    defaultTraining,
    defaultTimeAmount: 2,
    defaultTimeUnit: 'days',
    defaultTimeFrequency: 'month',
  },
};
