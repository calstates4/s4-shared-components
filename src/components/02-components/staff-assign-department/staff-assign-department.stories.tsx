import type { Meta, StoryObj } from '@storybook/react';
import StaffAssignDepartment from "../staff-assign-department/staff-assign-department";
import {ReactNode} from "react";
import CheckboxInput, {
  type CheckboxProps,
} from "../../01-elements/checkbox/checkbox-input";

const meta: Meta<typeof StaffAssignDepartment> = {
  title: 'Components/Staff Assign Departments',
  component: StaffAssignDepartment,
};

const departments: ReactNode[] = [];

const departmentsList= [
  {
    id: '1',
    value: '1',
    name: 'department',
    title: 'Department 1',
    checked: true,
  },
  {
    id: '2',
    value: '2',
    name: 'department',
    title: 'Department 2',
    checked: false,
  },
  {
    id: '3',
    value: '3',
    name: 'department',
    title: 'Department 3',
    checked: true,
  },
];

departmentsList.forEach((dept) => {
  departments.push(
    <CheckboxInput {...(dept as CheckboxProps)} />
  );
});

export default meta;

export const Default: StoryObj<typeof StaffAssignDepartment> = {
  args: {
    orgId: '10',
    uid: '1',
    fName: 'Peter',
    lName: 'parket',
    departments: departments,
  }
}