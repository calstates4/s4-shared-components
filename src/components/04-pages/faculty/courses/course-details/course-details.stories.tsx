import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import GridToolbarExtraButton from '../../../../02-components/data-table/data-table-toolbar.extra-button';
import {
  enrolledStudentsTableColumns,
  enrolledStudentsTableRows,
} from '../../../../02-components/data-table/data-table.data';
import PageLayout, {
  type PageLayoutProps,
} from '../../../../03-layouts/page-layout/page-layout';
import { Default as PageLayoutStories } from '../../../../03-layouts/page-layout/page-layout.stories';
import CourseDetailsPage, { type CourseDetailsPageProps } from './course-details';

const meta: Meta<typeof PageLayout> = {
  title: 'Pages/Faculty/Courses/Course Details',
  component: PageLayout,
};

export default meta;

const courseDetailsArgs: CourseDetailsPageProps = {
  breadcrumb: [
    {
      title: 'Courses',
      url: '/courses',
    },
  ],
  title: 'Enrolled Students',
  tableData: {
    rows: enrolledStudentsTableRows,
    columns: enrolledStudentsTableColumns,
    toolbar: () => <GridToolbarExtraButton title="Enrolled Students" btnTitle="Create an Experience" btnUrl="#sample" />,
  },
};

export const EnrolledStudentsTable: StoryObj<typeof PageLayout> = {
  render: () => (
    <PageLayout {...(PageLayoutStories.args as PageLayoutProps)}>
      <CourseDetailsPage {...(courseDetailsArgs as CourseDetailsPageProps)} />
    </PageLayout>
  ),
};