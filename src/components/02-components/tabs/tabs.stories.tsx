import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import Tabs from './tabs';
import React from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  render: () => (
    <Tabs id="custom-tabs" name="Custom Tabs">
      <Box aria-label="Tab 1">
        <h1>Tab 1</h1>
      </Box>
      <Box aria-label="Tab 2">
        <h1>Tab 2</h1>
      </Box>
      <Box aria-label="Tab 3">
        <h1>Tab 2</h1>
      </Box>
    </Tabs>
  ),
};

export default meta;

export const Default: StoryObj<typeof Tabs> = {};
