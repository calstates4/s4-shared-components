import type { Meta, StoryObj } from '@storybook/react';
import StepsBar from './steps-bar';

const meta: Meta<typeof StepsBar> = {
  title: 'Components/Steps bar',
  component: StepsBar,
};

export default meta;

export const Default: StoryObj<typeof StepsBar> = {
  args: {
    steps: [
      'Opportunity',
      'Program + Course',
      'Health and Safety Information',
      'Approval',
      'Staff',
      'Duration',
      'Summary',
    ],
    step: '0',
  }
};