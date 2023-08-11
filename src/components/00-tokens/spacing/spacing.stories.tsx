import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Paper, Box } from '@mui/material';

import { useTheme } from '@mui/material/styles';

const meta: Meta = {
  title: 'Tokens/Spacing',
};

export default meta;

const SpacingPalette = () => {
  const theme = useTheme();
  const spacingValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ];

  const gridStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: theme.spacing(2),
  };

  const spacingBoxStyles = (spacing) => ({
    width: '100%',
    borderColor: 'primary.main', // Light gray border
    borderWidth: theme.spacing(spacing),
    borderStyle: 'solid',
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    flexBasis: '30%',
  });

  return spacingValues ? (
    <Box>
      <Typography variant="h1" gutterBottom textAlign={'center'}>
        Spacing is calculated as a multiple of 8px
      </Typography>
      <Box sx={gridStyles}>
        {Object.keys(spacingValues).map((key) => (
          <Box key={key} textAlign='center' sx={spacingBoxStyles(theme.spacing(Number(key)))}>
            <Typography variant="h3" gutterBottom>
              theme.spacing({key})
            </Typography>
            <Typography variant="h3" gutterBottom>
              {theme.spacing(Number(key))}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  ) : null;
};

export const Default: StoryObj = {
  render: () => (
    <Paper>
      <SpacingPalette />
    </Paper>
  ),
};
