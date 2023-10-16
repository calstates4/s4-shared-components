import { CssBaseline, ThemeProvider } from '@mui/material';
import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing';
import type { Preview } from '@storybook/react';
import React from 'react';
import theme from '../src/theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      const wrappedStory = (
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            <Story />
          </LocalizationProvider>
        </ThemeProvider>
      );

      const RemixStub = createRemixStub([
        {
          path: '/',
          element: wrappedStory,
        },
      ]);
      return <RemixStub />;
    },
  ],
};

export default preview;
