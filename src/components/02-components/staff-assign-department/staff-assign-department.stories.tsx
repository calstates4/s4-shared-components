import type { Meta, StoryObj } from '@storybook/react';
import StaffAssignDepartment from "../staff-assign-department/staff-assign-department";
import {ReactNode} from "react";
import CheckboxInput, {
  type CheckboxProps,
} from "../../01-elements/checkbox/checkbox-input";
import React from 'react';

const meta: Meta<typeof StaffAssignDepartment> = {
  title: 'Components/Staff Assign Departments',
  component: StaffAssignDepartment,
};

const departments: ReactNode[] = [];

const departmentsList= [
  {
    id: '1',
    value: '1',
    name: 'Education',
    title: 'Education',
    checked: true,
  },
  {
    id: '2',
    value: '2',
    name: 'Finance',
    title: 'Finance',
    checked: false,
  },
  {
    id: '3',
    value: '3',
    name: 'Administration',
    title: 'Administration',
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
    goBackText: 'Back to Staff Page',
    goBackUrl: '#',
    orgId: '10',
    uid: '1',
    fName: 'Peter',
    lName: 'Parker',
    departments: departments,
  }
}
