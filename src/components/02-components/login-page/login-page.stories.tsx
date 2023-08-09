import type { Meta, StoryObj } from '@storybook/react';

import Login from './login-page';

const meta: Meta<typeof Login> = {
  title: 'Components/Login Page',
  component: Login,
};

export default meta;

export const Student: StoryObj<typeof Login> = {
  args: {
    title: 'CalState S4',
    loginTitle: 'Campus Student',
    loginButtonText: 'Access campus login',
    description:
      'As a core value of our commitment to building sustainable and deep relationships, CalState S4 promotes high-quality on- and off-campus experiential learning opportunities (e.g. community engagement, academic internships, professional field placements) where students connect with organizations, gain valuable skills, including career-readiness and positively impact their community.',
    guestAccountUrl:
      'http://localhost:6006/?path=/story/components-login-page--default',
  },
};

export const Partner: StoryObj<typeof Login> = {
  args: {
    title: 'CalState S4',
    loginTitle: 'Organizational Partners',
    loginButtonText: 'Access partner login',
    description:
      'As a core value of our commitment to building sustainable and deep relationships, CalState S4 promotes high-quality on- and off-campus experiential learning opportunities (e.g. community engagement, academic internships, professional field placements) where students connect with organizations, gain valuable skills, including career-readiness and positively impact their community.',
    guestAccountUrl:
      'http://localhost:6006/?path=/story/components-login-page--default',
  },
};
