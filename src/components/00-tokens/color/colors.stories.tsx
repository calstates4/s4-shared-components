import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Paper, Box } from '@mui/material';

import ColorComponent from './color';
import { useTheme } from '@mui/material/styles';

const meta: Meta<typeof ColorComponent> = {
  title: 'Tokens/Color',
  component: ColorComponent,
};

export default meta;

const ColorPalette = () => {
  const theme = useTheme();
  const palette = theme.palette;

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
  };

  return palette ? (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={gridStyles}>
        {Object.keys(palette).map((color) => (
          <Box key={color} textAlign="center">
            <Typography variant="h3" gutterBottom>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Typography>
            {Object.keys(palette[color]).map((shade) => (
              palette[color][shade] && (
                <ColorComponent
                  key={`${color}.${shade}`}
                  color={palette[color][shade]}
                  name={`${color}.${shade}`}
                  hex={palette[color][shade]}
                />
              )
            ))}
          </Box>
        ))}
      </div>
    </div>
  ) : null;
};

export const Default: StoryObj<typeof ColorComponent> = {
  render: () => (
    <Paper>
      <ColorPalette />
    </Paper>
  ),
};
