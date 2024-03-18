import type { Meta, StoryObj } from '@storybook/react';

import ScheduleFields from './schedule-fields';

const meta: Meta<typeof ScheduleFields> = {
  title: 'Components/Schedule Fields',
  component: ScheduleFields,
};

export default meta;

export const Default: StoryObj<typeof ScheduleFields> = {
  args: {
    day: '7',
    startHour: '8',
    startMin: '30',
    startAmpm: 'am',
    endHour: '5',
    endMin: '00',
    endAmpm: 'pm',
  },
};