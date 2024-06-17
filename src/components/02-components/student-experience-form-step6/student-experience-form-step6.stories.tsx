import type { Meta, StoryObj } from '@storybook/react';
import StudentExperienceFormStep6 from './student-experience-form-step6';
import StepsBar from '../steps-bar/steps-bar';
import React from 'react';

const meta: Meta<typeof StudentExperienceFormStep6> = {
  title: 'Components/Student Experience Form Step 6',
  component: StudentExperienceFormStep6,
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

const stepsBar = <StepsBar steps={stepsNames} step={'5'} />;

export const AddStudentExperienceFormStep6: StoryObj<typeof StudentExperienceFormStep6> = {
  args: {
    opportunityId: '1',
    programId: '2',
    opportunityCourseId: '2',
    healthSafetySelected: '1',
    stepsBar: stepsBar,
    term: '{Fall 2021}',
    opportunityName: '{Opportunity Name}',
    programName: '{Program Name}',
    opportunityCourseName: '{Course Name}',
    estimatedHours: 10,
  },
};
