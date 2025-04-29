import type { Meta, StoryObj } from '@storybook/react';
import ExperienceDeny from "../experience-deny/experience-deny";

const meta: Meta<typeof ExperienceDeny> = {
  title: 'Components/Experience Deny',
  component: ExperienceDeny,
};
export default meta;

export const DenyExperience: StoryObj<typeof ExperienceDeny> = {
  args: {
    eid: '12',
    pid: '2',
    oid: '3',
    title: 'Experience #12',
    goBackText: 'Back to Experiences',
    goBackUrl: '#',
    reasons: [
      { id: 'interview-process', label: 'Interview Process' },
      { id: 'missing-qualifications', label: 'Missing Qualifications/Experience' },
      { id: 'other', label: 'Other' },
    ],
  },
};
