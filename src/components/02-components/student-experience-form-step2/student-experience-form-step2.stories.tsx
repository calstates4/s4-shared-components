import type { Meta, StoryObj } from '@storybook/react';
import StudentExperienceFormStep2 from './student-experience-form-step2';
import StepsBar from "../steps-bar/steps-bar";
import React from "react";

const meta: Meta<typeof StudentExperienceFormStep2> = {
  title: 'Components/Student Experience Form Step 2',
  component: StudentExperienceFormStep2,
};

export default meta;

const stepsNames = [
  'Opportunity',
  'Program + Course',
  'Health and Safety Information',
  'Approval',
  'Duration',
  'Summary',
];
const stepsBar = (
  <StepsBar
    steps={stepsNames}
    step={'1'}
  />
);

const courses = [
  { id: '1', label: 'Course 1' },
  { id: '2', label: 'Course 2' },
  { id: '3', label: 'Course 3' },
];

export const AddStudentExperienceFormStep2: StoryObj<typeof StudentExperienceFormStep2> = {
  args: {
    opportunityId: '3',
    opportunityCourseId: '2',
    programId: '1',
    programName: 'Name of the program',
    courseValues: courses,
    defaultCourse:'2',
    stepsBar: stepsBar,
    courseSelected: '0',
    errorMsg: false,
  }
};
