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
    myAccountLink: '#',
    logoutLink: '#',
    dialogTitle: 'Students',
    dialogText:
      '<p>For assistance please contact the campus program office(s) with which you are working. If you are having technical issues, please contact the <a href="mailto:s4help@calstate.edu ">Help Desk</a></p>',
  },
};
