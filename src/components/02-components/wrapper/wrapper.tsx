import React from 'react';
import { Paper, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

export type WrapperProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  component?: React.ElementType;
  variant?: React.ComponentProps<typeof Typography>['variant'];
};

export default function Wrapper({
  title,
  description,
  children,
  component,
  variant
}: WrapperProps) {
  const theme = useTheme();

  // Styles.
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  };

  const headerTitle = title && (
    <Typography
      component={component || 'h2'}
      variant={variant || 'h2'}
      mb={3}
      color="primary.main"
    >
      {title}
    </Typography>
  );

  return (
    <Paper elevation={0} sx={containerStyles} component="article">
      {headerTitle}
      {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
      {children}
    </Paper>
  );
}

Wrapper.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  component: PropTypes.elementType,
  variant: PropTypes.string,
};
