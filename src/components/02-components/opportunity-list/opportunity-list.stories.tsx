import type { Meta, StoryObj } from '@storybook/react';

import OpportunityList from './opportunity-list';
import OpportunityCard, {
  type OpportunityCardProps,
} from '../opportunity-card/opportunity-card';
import { Default as OpportunityCardStories } from '../opportunity-card/opportunity-card.stories';
import React from 'react';

const meta: Meta<typeof OpportunityList> = {
  title: 'Components/Opportunity List',
  component: OpportunityList,
};

export default meta;

const opportunities = Array.from({ length: 6 }, (_, i) => i).map(() => (
  <OpportunityCard {...(OpportunityCardStories.args as OpportunityCardProps)} />
));

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

const usStates = [
  {
    id: 'AL',
    label: 'Alabama',
  },
  {
    id: 'AK',
    label: 'Alaska',
  },
  {
    id: 'AS',
    label: 'American Samoa',
  },
  {
    id: 'AZ',
    label: 'Arizona',
  },
  {
    id: 'AR',
    label: 'Arkansas',
  },
  {
    id: 'AA',
    label: 'Armed Forces (AA)',
  },
  {
    id: 'AE',
    label: 'Armed Forces (AE)',
  },
  {
    id: 'AP',
    label: 'Armed Forces (AP)',
  },
  {
    id: 'CA',
    label: 'California',
  },
  {
    id: 'CO',
    label: 'Colorado',
  },
  {
    id: 'CT',
    label: 'Connecticut',
  },
  {
    id: 'DE',
    label: 'Delaware',
  },
  {
    id: 'DC',
    label: 'District of Columbia',
  },
  {
    id: 'FL',
    label: 'Florida',
  },
  {
    id: 'GA',
    label: 'Georgia',
  },
  {
    id: 'GU',
    label: 'Guam',
  },
  {
    id: 'HI',
    label: 'Hawaii',
  },
  {
    id: 'ID',
    label: 'Idaho',
  },
  {
    id: 'IL',
    label: 'Illinois',
  },
  {
    id: 'IN',
    label: 'Indiana',
  },
  {
    id: 'IA',
    label: 'Iowa',
  },
  {
    id: 'KS',
    label: 'Kansas',
  },
  {
    id: 'KY',
    label: 'Kentucky',
  },
  {
    id: 'LA',
    label: 'Louisiana',
  },
  {
    id: 'ME',
    label: 'Maine',
  },
  {
    id: 'MH',
    label: 'Marshall Islands',
  },
  {
    id: 'MD',
    label: 'Maryland',
  },
  {
    id: 'MA',
    label: 'Massachusetts',
  },
  {
    id: 'MI',
    label: 'Michigan',
  },
  {
    id: 'FM',
    label: 'Micronesia',
  },
  {
    id: 'MN',
    label: 'Minnesota',
  },
  {
    id: 'MS',
    label: 'Mississippi',
  },
  {
    id: 'MO',
    label: 'Missouri',
  },
  {
    id: 'MT',
    label: 'Montana',
  },
  {
    id: 'NE',
    label: 'Nebraska',
  },
  {
    id: 'NV',
    label: 'Nevada',
  },
  {
    id: 'NH',
    label: 'New Hampshire',
  },
  {
    id: 'NJ',
    label: 'New Jersey',
  },
  {
    id: 'NM',
    label: 'New Mexico',
  },
  {
    id: 'NY',
    label: 'New York',
  },
  {
    id: 'NC',
    label: 'North Carolina',
  },
  {
    id: 'ND',
    label: 'North Dakota',
  },
  {
    id: 'MP',
    label: 'Northern Mariana Islands',
  },
  {
    id: 'OH',
    label: 'Ohio',
  },
  {
    id: 'OK',
    label: 'Oklahoma',
  },
  {
    id: 'OR',
    label: 'Oregon',
  },
  {
    id: 'PW',
    label: 'Palau',
  },
  {
    id: 'PA',
    label: 'Pennsylvania',
  },
  {
    id: 'PR',
    label: 'Puerto Rico',
  },
  {
    id: 'RI',
    label: 'Rhode Island',
  },
  {
    id: 'SC',
    label: 'South Carolina',
  },
  {
    id: 'SD',
    label: 'South Dakota',
  },
  {
    id: 'TN',
    label: 'Tennessee',
  },
  {
    id: 'TX',
    label: 'Texas',
  },
  {
    id: 'UT',
    label: 'Utah',
  },
  {
    id: 'VT',
    label: 'Vermont',
  },
  {
    id: 'VI',
    label: 'Virgin Islands',
  },
  {
    id: 'VA',
    label: 'Virginia',
  },
  {
    id: 'WA',
    label: 'Washington',
  },
  {
    id: 'WV',
    label: 'West Virginia',
  },
  {
    id: 'WI',
    label: 'Wisconsin',
  },
  {
    id: 'WY',
    label: 'Wyoming',
  },
];

export const Default: StoryObj<typeof OpportunityList> = {
  args: {
    breadcrumb: [
      {
        title: 'Opportunities',
        url: '#',
      },
    ],
    url: 'http://localhost:6006/',
    children: opportunities,
    totalItems: 30,
    itemsPerPage: 6,
    currentPage: 3,
    programFilterValues: [
      {
        id: 'all',
        label: 'All Campus programs',
      },
      {
        id: '1',
        label: 'My programs',
      },
    ],
    courseFilterValues: [
      {
        id: '1',
        label: 'Course 1',
      },
      {
        id: '2',
        label: 'Course 2',
      },
    ],
    typeFilterValues: [
      { id: 'on-site', label: 'On-site' },
      { id: 'remote', label: 'Remote' },
      { id: 'hybrid', label: 'Hybrid' },
    ],
    termFilterValues: [
      {
        id: '1',
        label: 'Fall 2023',
      },
      {
        id: '2',
        label: 'Winter 2023',
      },
    ],

    focusPopulationFilterValues: focusPopulations,
    focusAreaFilterValues: focusAreas,
    cityFilterValues: usStates,
    currentFilters: {
      program: '1',
      course: null,
      type: null,
      term: null,
      focusPopulation: null,
      focusArea: null,
      city: null,
      keyword: null,
    },
  },
};
