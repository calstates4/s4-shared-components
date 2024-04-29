import type { Meta, StoryObj } from '@storybook/react';
import DepartmentDelete from "../department-delete/department-delete";

const meta: Meta<typeof DepartmentDelete> = {
  title: 'Components/Department Delete',
  component: DepartmentDelete,
};
export default meta;

const description = "We exist to serve the most vulnerable in our communities. We do this by partnering with agencies to give us insight into areas where volunteers can meet the most pressing needs, empowering volunteers to manifest compassion and service as representatives of their communities, and mobilizing churches and businesses to serve in projects in their cities throughout the year!";

const members = [
  'Emily Parker (emily@test.com)',
  'Mathew Ross (csmit@test.com)',
  'Carlos Smith (csmit@test.com)',
  'Robert Thomsom (csmit@test.com)',
  'Peter Brown (csmit@test.com)',
  'David Mask (csmit@test.com)',
  'Martin James (csmit@test.com)',
  'David Mask (csmit@test.com)',
  'Cameron Dias Mask (csmit@test.com)',
  'Moiches HArris (csmit@test.com)',
  'Scott Westom (csmit@test.com)',
];

export const Default: StoryObj<typeof DepartmentDelete> = {
  args: {
    id: '1',
    name: 'Test Department',
    description,
    members,
    goBackText: 'Back to Organization',
    goBackUrl: '#',
  },
};