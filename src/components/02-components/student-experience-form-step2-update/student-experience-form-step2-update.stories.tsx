import type { Meta, StoryObj } from '@storybook/react';
import StudentExperienceFormStep2Update from './student-experience-form-step2-update';
import StepsBar from "../steps-bar/steps-bar";
import React from "react";

const meta: Meta<typeof StudentExperienceFormStep2Update> = {
  title: 'Components/Student Experience Form Step 2 Update',
  component: StudentExperienceFormStep2Update,
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

export const AddStudentExperienceFormStep2Update: StoryObj<typeof StudentExperienceFormStep2Update> = {
  args: {
    experienceId: '3',
    opportunityCourseId: '2',
    programName: 'Name of the program',
    courseValues: courses,
    defaultCourse:'2',
    stepsBar: stepsBar,
    courseSelected: '0',
    errorMsg: false,
  }
};
