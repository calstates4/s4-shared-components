import type { Meta, StoryObj } from '@storybook/react';

import OrganizationFacultyList from './organization-faculty-list';
import OpportunityCard, {
  type OpportunityCardProps,
} from '../opportunity-card/opportunity-card';
import { Default as OpportunityCardStories } from '../opportunity-card/opportunity-card.stories';
import React from 'react';

const meta: Meta<typeof OrganizationFacultyList> = {
  title: 'Components/Organization Faculty List',
  component: OrganizationFacultyList,
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

const cities = [
  {
    id: 'Camarillo',
    label: 'Camarillo',
  },
  {
    id: 'Bakersfield',
    label: 'Bakersfield',
  },
  {
    id: 'Arcata',
    label: 'Arcata',
  },
];

export const Default: StoryObj<typeof OrganizationFacultyList> = {
  args: {
    breadcrumb: [
      {
        title: 'Opportunities',
        url: '#',
      },
    ],
    url: '#',
    children: opportunities,
    listView: true,
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
    industryFilterValues: [
      {
        id: '1',
        label: 'UNIV 100 (07): FRESHMAN SEMINAR',
      },
      {
        id: '2',
        label: 'UNIV 100 (04): FRESHMAN SEMINAR',
      },
      {
        id: '3',
        label: 'UNIV 100 (03): FRESHMAN SEMINAR',
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
    cityFilterValues: cities,
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
