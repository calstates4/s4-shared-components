import type { Meta, StoryObj } from '@storybook/react';
import StudentExperienceFormStep4 from './student-experience-form-step4';
import StepsBar from '../steps-bar/steps-bar';
import React from 'react';

const meta: Meta<typeof StudentExperienceFormStep4> = {
  title: 'Components/Student Experience Form Step 4',
  component: StudentExperienceFormStep4,
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
const stepsBar = <StepsBar steps={stepsNames} step={'3'} />;

export const AddStudentExperienceFormStep4: StoryObj<typeof StudentExperienceFormStep4> = {
  args: {
    opportunityId: '3',
    opportunityCourseId: '2',
    programId: '1',
    opportunityName: 'Name of the opportunity',
    programName: 'Name of the program',
    opportunityCourseName: 'Name of the course',
    stepsBar: stepsBar,
    healthSafetySelected: '1',
    approvalState: true, // true for approved, false for reviewing
  },
};
