import type { Meta, StoryObj } from '@storybook/react';
import StaffArchiveMember from "../staff-archive-member/staff-archive-member";

const meta: Meta<typeof StaffArchiveMember> = {
  title: 'Components/Staff Archive Member',
  component: StaffArchiveMember,
};

export default meta;

export const Default: StoryObj<typeof StaffArchiveMember> = {
  args: {
    goBackText: 'Back to Staff Page',
    goBackUrl: '#',
    orgId: '10',
    uid: '1',
    fName: 'Peter',
    lName: 'Parker'
  }
}
