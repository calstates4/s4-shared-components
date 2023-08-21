import type { Meta, StoryObj } from '@storybook/react';

import BrandingBar from './branding-bar';

const meta: Meta<typeof BrandingBar> = {
  title: 'Components/Branding Bar',
  component: BrandingBar,
};

export default meta;

export const Default: StoryObj<typeof BrandingBar> = {
  args: {
    siteLinks: [
      { title: 'Staff', url: '#' },
      { title: 'Student', url: '#' },
      { title: 'Faculty', url: '#', isActive: true },
      { title: 'Partner', url: '#' },
    ],
    helpLink: '#',
    myAccountLink: '#',
    logoutLink: '#',
  },
};
