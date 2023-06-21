import type { Meta, StoryObj } from '@storybook/react';

import ExperienceTimeEntriesTable from './experience-time-entry-table';

const meta: Meta<typeof ExperienceTimeEntriesTable> = {
  title: 'Components/Experiences Time Entry Table',
  component: ExperienceTimeEntriesTable,
};

export default meta;

const description = `<p>
  We exist to serve the most vulnerable in our communities. We do this by
  partnering with agencies to give us insight into areas where volunteers can
  meet the most pressing needs, empowering volunteers to manifest compassion and
  service as representatives of their communities, and mobilizing churches and
  businesses to serve in projects in their cities throughout the year!
</p>`;

const learningOutcomes = `<p>
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

export const Default: StoryObj<typeof ExperienceTimeEntriesTable> = {
  args: {
    url: '#',
    totalItems: 6,
    itemsPerPage: 4,
    currentPage: 1,
    items: [
      {
        id: '1',
        state: 'submitted',
        startDate: '08/30/2022',
        endDate: '08/30/2022',
        calculatedHours: 3,
        description,
        learningOutcomes,

      },
      {
        id: '2',
        state: 'submitted',
        startDate: '08/30/2022',
        endDate: '08/30/2022',
        calculatedHours: 3,
        description,
        learningOutcomes,

      },
      {
        id: '3',
        state: 'published',
        startDate: '08/30/2022',
        endDate: '08/30/2022',
        calculatedHours: 3,
        description,
        learningOutcomes,

      },
      {
        id: '4',
        state: 'declined',
        startDate: '08/30/2022',
        endDate: '08/30/2022',
        calculatedHours: 3,
        description,
        learningOutcomes,

      },
      {
        id: '5',
        state: 'declined',
        startDate: '08/30/2022',
        endDate: '08/30/2022',
        calculatedHours: 3,
        description,
        learningOutcomes,

      },
      {
        id: '5',
        state: 'submitted',
        startDate: '08/30/2022',
        endDate: '08/30/2022',
        calculatedHours: 3,
        description,
        learningOutcomes,

      },
    ],
  },
};
