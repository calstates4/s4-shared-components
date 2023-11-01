import type { Meta, StoryObj } from '@storybook/react';
import StaffAssignDepartment from "../staff-assign-department/staff-assign-department";

const meta: Meta<typeof StaffAssignDepartment> = {
  title: 'Components/Staff Assign Departments',
  component: StaffAssignDepartment,
};
export default meta;

export const Default: StoryObj<typeof StaffAssignDepartment> = {
  args: {
    orgId: '10' as string,
    uid: '1',
    fName: 'Peter',
    lName: 'parket',
    departments: [
      {
        id: '1',
        title: 'Department 1',
        checked: true,
      },
      {
        id: '2',
        title: 'Department 2',
        checked: false,
      },
      {
        id: '3',
        title: 'Department 3',
        checked: false,
      },
    ],
  }
}