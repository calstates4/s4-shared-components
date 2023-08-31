import { type Meta, type StoryObj } from '@storybook/react';
import PartnerExperiencePage, {
  type PartnerExperiencePageProps,
} from './experiences';

import { Button, Link } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';
import PageLayout, {
  type PageLayoutProps,
} from '../../../../03-layouts/page-layout/page-layout';
import { Default as PageLayoutStories } from '../../../../03-layouts/page-layout/page-layout.stories';

const meta: Meta<typeof PageLayout> = {
  title: 'Pages/Partner/Organization/Experiences',
  component: PageLayout,
};

export default meta;

const experiencesTableColumns = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'campus', headerName: 'Campus', width: 150 },
  { field: 'offering', headerName: 'Offering', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
  {
    field: 'url',
    width: 150,
    type: 'actions',
    headerName: 'Action',
    disableExport: true,
    renderCell: (params: GridRenderCellParams) => (
      <strong>
        <Button
          component={Link}
          href={
            'http://localhost:6006/?path=/story/components-data-table--default/organization/experiences/' +
            params.row.id
          }
          sx={{
            fontWeight: 700,
          }}
        >
          View details
        </Button>
      </strong>
    ),
  },
];

const experiencesTableRows = [
  {
    id: 1,
    firstName: 'Emily',
    lastName: 'Parker',
    email: 'emily@mail.com',
    campus: 'Channel Islands',
    offering: 'Offering 1',
    status: 'Needs approval',
  },
  {
    id: 2,
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'peter@mail.com',
    campus: 'Stanislaus',
    offering: 'Offering 2',
    status: 'Pending forms',
  },
  {
    id: 3,
    firstName: 'Emily',
    lastName: 'Parker',
    email: 'emily@mail.com',
    campus: 'Channel Islands',
    offering: 'Offering 3',
    status: 'Active',
  },
  {
    id: 4,
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'peter@mail.com',
    campus: 'Stanislaus',
    offering: 'Offering 4',
    status: 'Completed',
  },
  {
    id: 5,
    firstName: 'Emily',
    lastName: 'Parker',
    email: 'emily@mail.com',
    campus: 'Channel Islands',
    offering: 'Offering 4',
    status: 'Pending forms',
  },
  {
    id: 6,
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'peter@mail.com',
    campus: 'Stanislaus',
    offering: 'Offering 2',
    status: 'Active',
  },
  {
    id: 7,
    firstName: 'Emily',
    lastName: 'Parker',
    email: 'emily@mail.com',
    campus: 'Channel Islands',
    offering: 'Offering 1',
    status: 'Completed',
  },
];

const args: PartnerExperiencePageProps = {
  breadcrumb: [
    {
      title: 'Experiences',
      url: '/organization/experiences',
    },
  ],
  title: 'Experiences',
  tableData: { rows: experiencesTableRows, columns: experiencesTableColumns },
};

export const Default: StoryObj<typeof PageLayout> = {
  render: () => (
    <PageLayout {...(PageLayoutStories.args as PageLayoutProps)}>
      <PartnerExperiencePage {...(args as PartnerExperiencePageProps)} />
    </PageLayout>
  ),
};
