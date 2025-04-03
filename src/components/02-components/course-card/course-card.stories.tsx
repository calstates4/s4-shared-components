import type { Meta, StoryObj } from '@storybook/react';

import CourseCard from './course-card';

const meta: Meta<typeof CourseCard> = {
  title: 'Components/Course Card',
  component: CourseCard,
};

export default meta;

export const Default: StoryObj<typeof CourseCard> = {
  args: {
    id: '34',
    term: 'term',
    courseName: 'courseName',
    program: 'program',
    enrollment: 'enrollment',
    studentExperience: 'studentExperience',
    hoursApproved: 'hoursApproved',
    linkCourse: 'linkCourse',
    linkAddOpportunity: 'linkAddOpportunity',
    LinkEdit: 'LinkEdit',
  },
  render: (args) => (
    <div>
      <CourseCard {...args} />
    </div>
  ),
};
