import type { Meta, StoryObj } from '@storybook/react';

import TimeLogForm from './time-log-form';

const meta: Meta<typeof TimeLogForm> = {
  title: 'Components/TimeLogForm',
  component: TimeLogForm,
};

export default meta;

const breadcrumb = [
  {
    title: 'Experiences',
    url: '#',
  },
  {
    title: 'Experience Name',
    url: '#',
  },
  {
    title: 'Log time',
    url: '#',
  },
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

const defaultDescription =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

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

const learningOutcomes = [
  { id: '2', label: 'Prepare and/or serve food' },
  { id: '3', label: 'Serve in a coaching role' },
];

export const AddTimeLog: StoryObj<typeof TimeLogForm> = {
  args: {
    breadcrumb,
    experienceName: '{Experience Name}',
    focusPopulations,
    focusAreas,
    activities,
    learningOutcomes: learningOutcomes,
  },
};

export const EditTimeLog: StoryObj<typeof TimeLogForm> = {
  args: {
    breadcrumb,
    focusPopulations,
    focusAreas,
    activities,
    learningOutcomes: learningOutcomes,
    experienceName: '{Experience Name}',
    description: defaultDescription,
    defaultActivity: '1',
    defaultEndDate: '2023-08-10T13:30:00',
    defaultFocusArea: '5',
    defaultFocusPopulation: '1',
    defaultActivities: defaultDescription,
    defaultStartDate: '2023-08-10T08:30:00',
  },
};
