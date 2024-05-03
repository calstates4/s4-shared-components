import type { Meta, StoryObj } from '@storybook/react';
import MembershipRequest from "../membership-request/membership-request";

const meta: Meta<typeof MembershipRequest> = {
  title: 'Components/Conformation Membership Request',
  component: MembershipRequest,
};

export default meta;

export const Default: StoryObj<typeof MembershipRequest> = {
  args: {
    goBackText: 'Back to Staff Page',
    goBackUrl: '#',
    orgId: '1',
    uid: '1',
    fName: 'Peter',
    lName: 'Parker',
    action: 'approve', // approve or deny
    isApprove: true // approve true or deny false
  }
}
