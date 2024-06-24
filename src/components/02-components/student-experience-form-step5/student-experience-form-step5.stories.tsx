import type { Meta, StoryObj } from '@storybook/react';
import StudentExperienceFormStep5 from './student-experience-form-step5';
import StepsBar from '../steps-bar/steps-bar';
import React from 'react';

const meta: Meta<typeof StudentExperienceFormStep5> = {
  title: 'Components/Student Experience Form Step 5',
  component: StudentExperienceFormStep5,
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

const stepsBar = <StepsBar steps={stepsNames} step={'4'} />;

export const AddStudentExperienceFormStep5: StoryObj<typeof StudentExperienceFormStep5> = {
  args: {
    opportunityId: '1',
    programId: '2',
    opportunityCourseId: '2',
    healthSafetySelected: '1',
    stepsBar: stepsBar,
    term: 'Fall 2021',
    estimatedHours: 10,
    errorMsg: false,
  },
};
