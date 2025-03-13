import type { Meta, StoryObj } from '@storybook/react';
import StudentExperienceForm from './student-experience-form';
import OpportunityCard from '../opportunity-card/opportunity-card';
import StepsBar from "../steps-bar/steps-bar";
import React from "react";

const meta: Meta<typeof StudentExperienceForm> = {
  title: 'Components/Student Experience Form',
  component: StudentExperienceForm,
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
    step={'0'}
  />
);

const opportunity = (
  <OpportunityCard
    id={1}
    title= {'Service Learning at Action VC'}
    url= {'#'}
    location= {'Camarillo, CA United States'}
    type= {'Hybrid'}
    timeCommitment= {'20 hours'}
    termPeriod={'Fall 2023'}
    destinationUrl={'#'}
    description={'Lorem ipsum dolor sit amet consectetur. Nulla lacus volutpat pretium facilisis non vulputate mauris scelerisque. Tincidunt mauris auctor semper mauris auctor viverra facilisi at tempus.'}
    cardSelected= {true}
    requirements={'Lorem ipsum dolor sit amet consectetur. Nulla lacus volutpat pretium facilisis non vulputate mauris scelerisque. Tincidunt mauris auctor semper mauris auctor viverra facilisi at tempus.'}
  />
);

export const AddStudentExperienceForm: StoryObj<typeof StudentExperienceForm> = {
  args: {
    id: '1',
    children: opportunity,
    stepsBar: stepsBar,
    duplicateExperience: true
  }
};
