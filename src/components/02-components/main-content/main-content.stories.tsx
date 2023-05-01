import { Typography } from '@mui/material';
import { type Meta, type StoryObj } from '@storybook/react';
import Placeholder from '../placeholder/placeholder';
import MainContent from './main-content';

const meta: Meta<typeof MainContent> = {
  title: 'Components/Main Content',
  component: MainContent,
};

export default meta;

const content = (
  <Placeholder>
    <Typography variant="body1">This is the main content</Typography>
  </Placeholder>
);

export const Default: StoryObj<typeof MainContent> = {
  args: {
    children: content,
    sidebarOpen: true,
    sidebarWidth: 25,
  },
};
