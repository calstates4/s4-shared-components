import { type Meta, type StoryObj } from '@storybook/react';

import PartnerOnboardingConfirm from './partner-onboarding-confirm';

const meta: Meta<typeof PartnerOnboardingConfirm> = {
  title: 'Components/Partner Onboarding Confirm',
  component: PartnerOnboardingConfirm,
};

export default meta;

export const Default: StoryObj<typeof PartnerOnboardingConfirm> = {
  args: {
    title: 'Organization Creation Submitted',
    status: {
      text: 'Pending Approval',
      bgcolor: 'warning.main',
      fgcolor: 'black',
    },
    message: 'Your request is being reviewed for approval.',
  },
};
