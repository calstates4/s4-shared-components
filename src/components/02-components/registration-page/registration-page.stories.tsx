import type { Meta, StoryObj } from '@storybook/react';

import Registration from './registration-page';

const meta: Meta<typeof Registration> = {
  title: 'Components/Registration Page',
  component: Registration,
};

export default meta;

export const Partner: StoryObj<typeof Registration> = {
  args: {
    goBackUrl:
      'http://localhost:6006/?path=/story/components-registration-page--partner',
    goBackText: 'Back to partner log in',
    title: 'Create an Organizational Partner account',
    description:
      'We look forward to exploring a potential partnership with your organization. Please complete this form to start creating your account.',
    accountUrl:
      'http://localhost:6006/?path=/story/components-registration-page--partner',
    assistanceUrl:
      'http://localhost:6006/?path=/story/components-registration-page--partner',
  },
};
