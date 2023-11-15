
import type { Meta, StoryObj } from '@storybook/react';

import ProgramList from './program-list';
import { ProgramCardProps } from '../program-card/program-card';

const meta: Meta<typeof ProgramList> = {
  title: 'Components/Program List',
  component: ProgramList,
};

export default meta;

const programs: ProgramCardProps[] = [
  {
    id: '001',
    title: 'Service learning',
    description: `<p>Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Praesent ac sem eget est egestas volutpat. Fusce commodo aliquam arcu. Vestibulum eu odio. Aliquam lobortis.</p>`,
    url: '#',
    joinUrl: '#',
    btnDisable: false,
    btnText: 'APPLY',
  }, {
    id: '002',
    title: 'Social Work Field Placements',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    joinUrl: '#',
    btnDisable: true,
    btnText: 'Pending',
  }, {
    id: '003',
    title: 'Teacher Credentialing Programs',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    joinUrl: '#',
    btnDisable: true,
    btnText: 'Active',
  }, {
    id: '004',
    title: 'Academic Internships',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    joinUrl: '#',
    btnDisable: false,
    btnText: 'APPLY',
  }, {
    id: '005',
    title: 'Service learning',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    joinUrl: '#',
    btnDisable: false,
    btnText: 'APPLY',
  }, {
    id: '006',
    title: 'Teacher Credentialing Programs',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    joinUrl: '#',
    btnDisable: false,
    btnText: 'APPLY',
  }, {
    id: '007',
    title: 'Academic Internships',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    joinUrl: '#',
    btnDisable: false,
    btnText: 'APPLY',
  }, {
    id: '008',
    title: 'Service learning',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    joinUrl: '#',
    btnDisable: false,
    btnText: 'APPLY',
  },
];

const displayFilterValues = [
  { id: '1', label: 'Show my programs' },
  { id: '2', label: 'Show all programs' },
];

const programsData = {
  items: programs,
  totalItems: 20,
  itemsPerPage: 8,
  currentPage: 1,
  displayFilterValues: displayFilterValues,
  defaultProgramDisplay: '1',
};

export const Default: StoryObj<typeof ProgramList> = {
  args: {
    ...programsData,
  },
};
