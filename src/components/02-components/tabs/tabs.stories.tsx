import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import Tabs from './tabs';
import React from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  render: () => (
    <Tabs id="custom-tabs" name="Custom Tabs">
      <div title="hola">Hi</div>
      <Box title="Tab 1">
        <h1>Tab 1</h1>
      </Box>
      <Box title="Tab 2">
        <h1>Tab 2</h1>
      </Box>
      <Box title="Tab 3">
        <h1>Tab 2</h1>
      </Box>
    </Tabs>
  ),
};

export default meta;

export const Default: StoryObj<typeof Tabs> = {};
