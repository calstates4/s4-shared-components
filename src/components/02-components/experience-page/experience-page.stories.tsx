import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Default as ExperienceFormListStory } from '../experience-form-list/experience-form-list.stories';
import TimeLogTable, {
  type TimeLogTableProps,
} from '../time-log-table/time-log-table';
import { Default as TimeLogTableStory } from '../time-log-table/time-log-table.stories';

import ExperiencePage from './experience-page';

const meta: Meta<typeof ExperiencePage> = {
  title: 'Components/Experience Page',
  component: ExperiencePage,
};

const experienceDetails = `
  Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt.
  Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.
`;

export default meta;

export const Student: StoryObj<typeof ExperiencePage> = {
  args: {
    id: '123',
    experienceName: 'Experience Name',
    url: '#',
    opportunityName: 'Opportunity Name',
    state: 'approved',
    courseName: 'HLTH 492 (01): Service Learning In Health Sci',
    experienceDetails,
    organizationName: 'Buen Vecino',
    programName: 'Program',
    location: 'Location',
    hours: 128,
    hoursCtaUrl: '/',
    dates: 'Fall 2022',
    timeCommitment: '200 hours',
    primaryContact: 'Name Lastname',
    formSigner: 'Name Lastname, Name Lastname,',
    timeApprover: 'Name Lastname, Name Lastname',
    observer: 'Name Lastname',
    hasPendingForm: true,
    ...ExperienceFormListStory.args,
  },
  render: (args) => (
    <ExperiencePage {...args}>
      <TimeLogTable {...(TimeLogTableStory.args as TimeLogTableProps)} />
    </ExperiencePage>
  ),
};
