import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import { ElementType } from 'react';

export type LoginPageProps = {
  title: string;
  loginTitle?: string;
  description?: string;
  loginButtonText?: string;
  FormElement?: ElementType;
};

export default function LoginPage({
  title,
  loginTitle,
  loginButtonText,
  description,
  FormElement,
}: LoginPageProps) {
  const theme = useTheme();

  // Styles.
  const paperStyles = {
    p: theme.spacing(4),
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  };

  const contentContainerStyles = {
    mb: theme.spacing(3),
    pb: theme.spacing(3),
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.up('md')]: {
      mb: 0,
      pb: 0,
      borderBottom: 'none',
      mr: theme.spacing(3),
      pr: theme.spacing(3),
      borderRight: `1px solid ${theme.palette.secondary.main}`,
    },
  };

  const actionContainerStyles = {
    [theme.breakpoints.up('md')]: {
      flex: '1 0 40%',
      alignSelf: 'center',
    },
  };

  const formInner = (
    <Button
      size="large"
      variant="contained"
      type="submit"
      sx={{ display: 'block', my: theme.spacing(4), mx: 'auto' }}
    >
      {loginButtonText ? loginButtonText : 'Login'}
    </Button>
  );

  const form = FormElement ? (
    <FormElement method="post">{formInner}</FormElement>
  ) : (
    <form>{formInner}</form>
  );

  return (
    <Paper sx={paperStyles}>
      <Box sx={contentContainerStyles}>
        <Typography variant="h1" color="primary" sx={{ mb: theme.spacing(2) }}>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Box>
      <Box sx={actionContainerStyles}>
        <Typography variant="h2" color="primary" textAlign="center">
          {loginTitle}
        </Typography>
        {form}
      </Box>
    </Paper>
  );
}
