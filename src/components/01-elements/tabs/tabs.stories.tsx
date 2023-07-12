import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import Tabs from './tabs';
import React from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'Elements/Tabs',
  component: Tabs,
  render: () => (
    <Tabs
      id="custom-tabs"
      name="Custom Tabs"
      tabs={[
        {
          name: 'Metadata',
          content: (
            <Box>
              <h1>Tab 1</h1>
            </Box>
          ),
        },
        {
          name: 'Content',
          content: (
            <Box>
              <h1>Tab 2</h1>
            </Box>
          ),
        },
        {
          name: 'Focus',
          content: (
            <Box>
              <h1>Tab 3</h1>
            </Box>
          ),
        },

        {
          name: 'Commitment',
          content: (
            <Box>
              <h1>Tab 4</h1>
            </Box>
          ),
        },
      ]}
    >
      <Box>
        <h1>Hi</h1>
      </Box>
    </Tabs>
  ),
};

export default meta;

export const Default: StoryObj<typeof Tabs> = {};
