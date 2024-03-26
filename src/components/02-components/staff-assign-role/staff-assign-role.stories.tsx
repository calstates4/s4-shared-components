import type { Meta, StoryObj } from '@storybook/react';
import StaffAssignRole from "../staff-assign-role/staff-assign-role";
import {ReactNode} from "react";
import React from 'react';

const meta: Meta<typeof StaffAssignRole> = {
  title: 'Components/Staff Assign Role',
  component: StaffAssignRole,
};
const rolesList = [
  {
    id: '1',
    label: 'Staff',
  },
  {
    id: '2',
    label: 'Organization Editor',
  },
  {
    id: '3',
    label: 'Organization Manager',
  },
];

export default meta;

export const Default: StoryObj<typeof StaffAssignRole> = {
  args: {
    goBackText: 'Back to Staff Page',
    goBackUrl: '#',
    orgId: '10',
    uid: '1',
    fName: 'Peter',
    lName: 'Parker',
    roles: rolesList,
    memberRole: '3'
  }
}
