import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import PartnerExperienceDetailsPage, {
  type PartnerExperienceDetailsPageProps,
} from './experience-details';

import PageLayout, {
  type PageLayoutProps,
} from '../../../../../03-layouts/page-layout/page-layout';
import { Default as PageLayoutStories } from '../../../../../03-layouts/page-layout/page-layout.stories';

import TimeLogTable, {
  type TimeLogTableProps,
} from '../../../../../02-components/time-log-table/time-log-table';
import { Default as TimeLogTableStory } from '../../../../../02-components/time-log-table/time-log-table.stories';

const meta: Meta<typeof PageLayout> = {
  title: 'Pages/Partner/Organization/Experiences/Experience Details',
  component: PageLayout,
};

export default meta;

const experienceDetails = `
  Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt.
  Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.
`;

export const Default: StoryObj<typeof PartnerExperienceDetailsPage> = {
  args: {
    id: '123',
    experienceName: 'Experience Name',
    url: '#',
    opportunityName: 'Offering Name',
    state: 'approved',
    campus: 'Stanislaus',
    experienceDetails,
    firstName: 'First',
    lastName: 'Last',
    email: 'user@email.com',
    location: 'Location',
    hours: 128,
    dates: 'Fall 2022',
    timeCommitment: '200 hours',
    primaryContact: 'Name Lastname',
    formSigner: 'Name Lastname, Name Lastname,',
    timeApprover: 'Name Lastname, Name Lastname',
    observer: 'Name Lastname',
    hasPendingForm: true,
    formsBegining: {
      items: [
        {
          id: '1',
          formName: 'Release of Liability - COVID 19',
          statusFoms: 'Submitted',
          urlForm: '/opportunities',
        },
        {
          id: '2',
          formName: 'Release of Liability - COVID 19',
          statusFoms: 'Pending',
          urlForm: '/opportunities',
        },
      ],
    },
    formsDuring: {
      items: [
        {
          id: '1',
          formName: 'Release of Liability - COVID 19',
          statusFoms: 'Submitted',
          urlForm: '/opportunities',
        },
        {
          id: '2',
          formName: 'Release of Liability - COVID 19',
          statusFoms: 'Pending',
          urlForm: '/opportunities',
        },
      ],
    },
  },

  render: (args) => (
    <PageLayout {...(PageLayoutStories.args as PageLayoutProps)}>
      <PartnerExperienceDetailsPage
        {...(args as PartnerExperienceDetailsPageProps)}
      >
        <TimeLogTable {...(TimeLogTableStory.args as TimeLogTableProps)} />
      </PartnerExperienceDetailsPage>
    </PageLayout>
  ),
};
