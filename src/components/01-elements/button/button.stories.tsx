import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@mui/material';

const meta: Meta<typeof Button> = {
  title: 'Elements/Button',
  component: Button,
  render: () => <Button>Primary Button</Button>,
};

export default meta;

export const Default: StoryObj<typeof Button> = {};
