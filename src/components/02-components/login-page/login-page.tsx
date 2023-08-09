import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import { ElementType } from 'react';
import Link from '../../01-elements/link/link';

export type LoginPageProps = {
  title: string;
  loginTitle?: string;
  description?: string;
  loginButtonText?: string;
  guestAccountUrl?: string;
  FormElement?: ElementType;
};

export default function LoginPage({
  title,
  loginTitle,
  loginButtonText,
  description,
  guestAccountUrl,
  FormElement,
}: LoginPageProps) {
  const theme = useTheme();

  // Styles.
  const containerStyles = {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      gap: theme.spacing(6),
      justifyContent: 'space-between',
    },
  };

  const contentContainerStyles = {
    mb: theme.spacing(3),
  };

  const paperStyles = {
    p: theme.spacing(4),
    fontSize: '1rem',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flex: '1 0 40%',
    },
  };

  const formInner = (
    <>
      <Button
        size="large"
        variant="contained"
        type="submit"
        sx={{ display: 'block', my: theme.spacing(4), mx: 'auto' }}
      >
        {loginButtonText ? loginButtonText : 'Login'}
      </Button>
    </>
  );

  const form = FormElement ? (
    <FormElement method="post">{formInner}</FormElement>
  ) : (
    <form>{formInner}</form>
  );

  return (
    <Box sx={containerStyles}>
      <Box sx={contentContainerStyles}>
        <Typography variant="h1" color="primary" sx={{ mb: theme.spacing(2) }}>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Box>
      <Paper sx={paperStyles}>
        <Typography variant="h2" color="primary" textAlign="center">
          {loginTitle}
        </Typography>
        {form}
        {guestAccountUrl && (
          <Typography textAlign="center">
            Are you a new user that doesn't have an account yet?
            <Link href={guestAccountUrl} sx={{ ml: theme.spacing(1) }}>
              Create a guest account
            </Link>
          </Typography>
        )}
      </Paper>
    </Box>
  );
}
