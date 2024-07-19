import { Typography, Stack, useTheme } from '@mui/material';
import React from 'react';

export type StatWithIconProps = {
  icon?: React.ReactElement;
  number?: string;
  text?: string;
};

export default function StatWithIcon({
  icon,
  number,
  text,
}: StatWithIconProps) {
  const theme = useTheme();

  const iconStyles = {
    color: theme.palette.primary.main,
    fontSize: '2.5rem',
    lineHeight: '0',
  };

  const textStyles = {
    color: theme.palette.primary.main,
    fontWeight: '500',
    fontSize: '1.5rem',
  };

  // Render functions.
  const stats = text && (
    <Typography sx={textStyles} variant="h3" component="h3">
      {number && <strong>{number}</strong>} {text}
    </Typography>
  );

  return (
    <Stack direction="row" spacing={1.5} alignItems="center">
      {icon && (
        <div style={iconStyles}>
          {React.cloneElement(icon, { fontSize: 'inherit' })}
        </div>
      )}
      {stats}
    </Stack>
  );
}
