import type { Meta, StoryObj } from '@storybook/react';
import DepartmentForm from "../department-form/department-form";

const meta: Meta<typeof DepartmentForm> = {
  title: 'Components/Department Form',
  component: DepartmentForm,
};
export default meta;

const description = "We exist to serve the most vulnerable in our communities. We do this by partnering with agencies to give us insight into areas where volunteers can meet the most pressing needs, empowering volunteers to manifest compassion and service as representatives of their communities, and mobilizing churches and businesses to serve in projects in their cities throughout the year!";

export const AddDepartment: StoryObj<typeof DepartmentForm> = {
  args: {
    isEdit: false,
    departments: '1, 2, 3',
    goBackText: 'Back to Organization',
    goBackUrl: '#',
    btnLink: '#',
  },
};

export const EditDepartment: StoryObj<typeof DepartmentForm> = {
  args: {
    isEdit: true,
    id: '1',
    name: 'Test Department',
    description,
    departments: '1, 2, 3',
    goBackText: 'Back to Organization',
    goBackUrl: '#',
    btnLink: '#',
  }
}
