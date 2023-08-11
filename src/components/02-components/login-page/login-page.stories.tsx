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
    loginTitle: 'Campus User Log In',
    loginButtonText: 'Access campus login',
    description:
      'As a core value of our commitment to building sustainable and deep relationships, CalState S4 promotes high-quality on- and off-campus experiential learning opportunities (e.g. community engagement, academic internships, professional field placements) where students connect with organizations, gain valuable skills, including career-readiness and positively impact their community.',
  },
};

export const Faculty: StoryObj<typeof Login> = {
  args: {
    title: 'CalState S4',
    loginTitle: 'Faculty User Log In',
    loginButtonText: 'Access campus login',
    description:
      'As a core value of our commitment to building sustainable and deep relationships, CalState S4 promotes high-quality on- and off-campus experiential learning opportunities (e.g. community engagement, academic internships, professional field placements) where students connect with organizations, gain valuable skills, including career-readiness and positively impact their community.',
  },
};

export const Partner: StoryObj<typeof Login> = {
  args: {
    title: 'CalState S4',
    loginTitle: 'Partner User Log In',
    loginButtonText: 'Access partner login',
    description:
      'As a core value of our commitment to building sustainable and deep relationships, CalState S4 promotes high-quality on- and off-campus experiential learning opportunities (e.g. community engagement, academic internships, professional field placements) where students connect with organizations, gain valuable skills, including career-readiness and positively impact their community.',
  },
};
