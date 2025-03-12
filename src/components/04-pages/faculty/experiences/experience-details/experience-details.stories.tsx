import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import FacultyExperienceDetailsPage, {
  type FacultyExperienceDetailsPageProps,
} from './experience-details';

import PageLayout, {
  type PageLayoutProps,
} from '../../../../03-layouts/page-layout/page-layout';
import { Default as PageLayoutStories } from '../../../../03-layouts/page-layout/page-layout.stories';

import TimeLogTable, {
  type TimeLogTableProps,
} from '../../../../02-components/time-log-table/time-log-table';
import { Default as TimeLogTableStory } from '../../../../02-components/time-log-table/time-log-table.stories';

const meta: Meta<typeof PageLayout> = {
  title: 'Pages/Faculty/Experiences/Experience Details',
  component: PageLayout,
};

export default meta;

const experienceDetails = `
  Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt.
  Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.
`;

export const Default: StoryObj<typeof FacultyExperienceDetailsPage> = {
  args: {
    id: '123',
    experienceName: 'Experience Name',
    url: '#',
    opportunityName: 'Offering Name',
    formsBegining: {
      items: [
        {
          id: '1',
          formName: 'Release of Liability - COVID 19',
          statusFoms: 'Submitted',
          urlForm: '#',
        },
        {
          id: '2',
          formName: 'Release of Liability - COVID 19',
          statusFoms: 'Pending',
          urlForm: '#',
        },
      ],
    },
    formsDuring: {
      items: [
        {
          id: '1',
          formName: 'Release of Liability - COVID 19',
          statusFoms: 'Submitted',
          urlForm: '#',
        },
        {
          id: '2',
          formName: 'Release of Liability - COVID 19',
          statusFoms: 'Pending',
          urlForm: '#',
        },
      ],
    },
  },

  render: (args) => (
    <PageLayout {...(PageLayoutStories.args as PageLayoutProps)}>
      <FacultyExperienceDetailsPage
        {...(args as FacultyExperienceDetailsPageProps)}
      >
        <TimeLogTable {...(TimeLogTableStory.args as TimeLogTableProps)} />
      </FacultyExperienceDetailsPage>
    </PageLayout>
  ),
};
