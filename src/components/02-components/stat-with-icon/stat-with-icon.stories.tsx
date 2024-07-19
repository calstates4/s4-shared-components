import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MoodIcon from '@mui/icons-material/Mood';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { Stack } from '@mui/material';

import Wrapper from '../wrapper/wrapper';
import StatWithIcon from './stat-with-icon';

const meta: Meta<typeof StatWithIcon> = {
  title: 'Components/Stat with icon',
  component: StatWithIcon,
};

export default meta;

export const Default: StoryObj<typeof StatWithIcon> = {
  render: () => (
    <Wrapper>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 6 }}>
        <StatWithIcon
          icon={<LocationCityIcon />}
          number='4'
          text='Campuses'
        />
        <StatWithIcon
          icon={<LibraryBooksIcon />}
          number='25'
          text='Offerings'
        />
        <StatWithIcon
          icon={<MoodIcon />}
          number='30'
          text='Experiences'
        />
        <StatWithIcon
          icon={<ScheduleIcon />}
          number='240'
          text='Hours approved'
        />
      </Stack>
    </Wrapper>
  ),
};
