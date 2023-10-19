import type { Meta, StoryObj } from '@storybook/react';

import ProgramPage from '../program-page/program-page';

const meta: Meta<typeof ProgramPage> = {
  title: 'Components/ProgramPage',
  component: ProgramPage,
};

export default meta;

const description = `<p>
  Through service learning programs, students have the opportunity to develop important skills such as teamwork, 
  communication, leadership, and problem-solving. They also gain a deeper understanding of the communities they serve 
  and the issues that affect them, while building empathy and a sense of civic responsibility.
  Service learning programs benefit both students and the communities they serve, as they provide opportunities for 
  students to make a positive impact while developing valuable skills and knowledge that can be applied to their future 
  careers and personal lives.
</p>`;


export const Default: StoryObj<typeof ProgramPage> = {
  args: {
    breadcrumb: [
      {
        title: 'Programs',
        url: '#/programs',
      },
      {
        title: 'Service learning',
        url: '#',
      },
    ],
    id: '1',
    title: 'Service learning',
    description: description,
    opportunitiesUrl: '#',
    btnDisable: false,
    btnText: 'APPLY',
    btnNextStatusText: 'Active',
    phone: '831-582-3000',
    mail: 'rmercadal@csumb.edu',
    campusSite: 'http://google.com',
  },
};
