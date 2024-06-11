import type { Meta, StoryObj } from '@storybook/react';
import StudentExperienceFormStep3 from './student-experience-form-step3';
import StepsBar from '../steps-bar/steps-bar';
import React from 'react';

const meta: Meta<typeof StudentExperienceFormStep3> = {
  title: 'Components/Student Experience Form Step 3',
  component: StudentExperienceFormStep3,
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
const stepsBar = <StepsBar steps={stepsNames} step={'2'} />;

export const AddStudentExperienceFormStep3: StoryObj<typeof StudentExperienceFormStep3> = {
  args: {
    opportunityId: '3',
    opportunityCourseId: '2',
    programId: '1',
    programName: 'Name of the program',
    defaultCourse: '2',
    stepsBar: stepsBar,
    courseSelected: '0',
    errorMsg: false,
    healthSafetyInformation:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia incidunt, earum aliquid minima quas at voluptatum, sint qui dolores aut necessitatibus id obcaecati nulla. Quam rerum nemo nostrum beatae ipsum!',
  },
};
