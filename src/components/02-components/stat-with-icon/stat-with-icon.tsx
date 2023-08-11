import { Typography, useTheme } from '@mui/material';
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

  // Styles.
  const inlineStyles = {
    display: 'inline-block',
    marginRight: theme.spacing(6),
  };

  const containerStyles = {
    display: 'flex',
    alignItems: 'center', // Vertically center items within the row
  };

  const iconStyles = {
    color: theme.palette.primary.main,
    fontSize: '2.5rem',
    marginRight: theme.spacing(2),
  };

  const numberStyles = {
    color: theme.palette.primary.main,
    fontWeight: '700',
    fontSize: '1.5rem',
  };

  const textStyles = {
    color: theme.palette.primary.main,
    fontWeight: '500',
    fontSize: '1.5rem',
    marginLeft: theme.spacing(2)
  };

  // Render functions.
  const renderedNumber = number && (
    <Typography sx={numberStyles} variant="h2">
      {number}
    </Typography>
  );

  const renderedDescription = text && (
    <Typography sx={textStyles}>{text}</Typography>
  );

  return (
    <div style={inlineStyles}>
      <div style={containerStyles}>
        {icon && (
          <div style={iconStyles}>
            {React.cloneElement(icon, { fontSize: 'inherit' })}
          </div>
        )}
        {renderedNumber}
        {renderedDescription}
      </div>
    </div>
  );
}
