import type { Meta, StoryObj } from '@storybook/react';

import OrganizationPage from './organization-page';

const meta: Meta<typeof OrganizationPage> = {
  title: 'Components/OrganizationPage',
  component: OrganizationPage,
};

export default meta;

const description = `<p>
  We exist to serve the most vulnerable in our communities. We do this by
  partnering with agencies to give us insight into areas where volunteers can
  meet the most pressing needs, empowering volunteers to manifest compassion and
  service as representatives of their communities, and mobilizing churches and
  businesses to serve in projects in their cities throughout the year!
</p>`;

const healthSafety = `<p>
  Deserunt mollit incididunt esse reprehenderit tempor deserunt officia culpa
  ipsum id exercitation consequat. Irure pariatur est ea eiusmod duis quis veniam
  deserunt. Nisi commodo laboris anim mollit dolor. Reprehenderit sint nostrud
  enim qui.
</p>
<ul>
  <li>Cillum mollit Lorem velit commodo exercitation irure deserunt Lorem dolore.</li>
  <li>Ex eu et reprehenderit laboris.</li><li>Aute non amet magna.</li>
  <li>Nulla pariatur ad amet eu tempor cillum incididunt enim irure nostrud exercitation elit labore est.</li>
  <li>Cupidatat sint nulla mollit occaecat.</li>
</ul>`;

export const Default: StoryObj<typeof OrganizationPage> = {
  args: {
    title: 'Action VC',
    url: 'https://localhost:6006/',
    description,
    healthSafety,
    programs: 'Service Learning, Curricular Cmty Eng Lrng',
    industry: 'Name of industry',
    type: 'Human, Social, Employment Services (Nonprofit)',
    focusPopulation:
      'People Experiencing Disability, Seniors, People Experiencing Material Poverty',
    focusAreas:
      'Civil Engagement, Construction, Emergency Services & Public Safety, Health & Medicine',
    address: '4001 Mission Oaks Blvd, Suite S, Camarillo, 93012',
    phone: '(805) 987-0300',
    email: 'natalie.pavia@actionvc.org',
    webpage: 'https://www.actionvc.org',
    mainContact: {
      name: 'Natalie Pavia',
      role: 'Executive Director',
      phone: '(805) 987-0300',
      email: 'natalie.pavia@actionvc.org',
    },
    orgAvailability: [
      {
        day: 'Monday',
        time: '7:00 am-1:30 pm',
      },
      {
        day: 'Tuesday',
        time: '7:00 am-1:30 pm',
      },
      {
        day: 'Wednesday',
        time: '7:00 am-1:30 pm',
      },
      {
        day: 'Thursday',
        time: '7:00 am-1:30 pm',
      },
      {
        day: 'Friday',
        time: '7:00 am-1:30 pm',
      }
    ],
    departments: {
      pages: 3,
      currentPage: 1,
      items: [
        {
          id: '45',
          name: 'Department Name',
          description:
            'Lorem ipsum dolor sit amet consectetur. Ultricies lorem nulla at vestibulum in consequat turpis diam. Id semper orci adipiscing libero praesent. Ullamcorper sit amet facilisi diam libero adipiscing. Vel in et et accumsan.',
        },
        {
          id: '45',
          name: 'Department Name',
          description:
            'Lorem ipsum dolor sit amet consectetur. Ultricies lorem nulla at vestibulum in consequat turpis diam. Id semper orci adipiscing libero praesent. Ullamcorper sit amet facilisi diam libero adipiscing. Vel in et et accumsan.',
        },
        {
          id: '45',
          name: 'Department Name',
          description:
            'Lorem ipsum dolor sit amet consectetur. Ultricies lorem nulla at vestibulum in consequat turpis diam. Id semper orci adipiscing libero praesent. Ullamcorper sit amet facilisi diam libero adipiscing. Vel in et et accumsan.',
        },
        {
          id: '45',
          name: 'Department Name',
          description:
            'Lorem ipsum dolor sit amet consectetur. Ultricies lorem nulla at vestibulum in consequat turpis diam. Id semper orci adipiscing libero praesent. Ullamcorper sit amet facilisi diam libero adipiscing. Vel in et et accumsan.',
        },
        {
          id: '45',
          name: 'Department Name',
          description:
            'Lorem ipsum dolor sit amet consectetur. Ultricies lorem nulla at vestibulum in consequat turpis diam. Id semper orci adipiscing libero praesent. Ullamcorper sit amet facilisi diam libero adipiscing. Vel in et et accumsan.',
        },
      ],
    },
  },
};
