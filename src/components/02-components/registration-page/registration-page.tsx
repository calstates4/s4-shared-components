import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ElementType } from 'react';
import Link from '../../01-elements/link/link';

export type RegistrationPageProps = {
  goBackUrl?: string;
  goBackText?: string;
  title: string;
  description?: string;
  accountUrl?: string;
  assistanceUrl?: string;
  FormElement: ElementType;
};

export default function RegistrationPage({
  goBackUrl,
  goBackText,
  title,
  description,
  accountUrl,
  assistanceUrl,
  FormElement,
}: RegistrationPageProps) {
  const theme = useTheme();

  // Styles.
  const containerStyles = {
    p: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      p: theme.spacing(3),
    },
  };

  const baseFormItemStyles = {
    mb: theme.spacing(3),
  };

  const goBackLinkStyles = {
    textDecoration: 'none',
    mb: 2,
    display: 'block',
    fontSize: '1rem',
  };

  const iconStyles = {
    fontSize: '1rem',
    color: 'text.secondary',
    verticalAlign: '-3px',
  };

  const footerLinkStyles = {
    mt: 3,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  };

  const innerForm = (
    <>
      <TextField
        required
        fullWidth
        id="register-form-username"
        variant="outlined"
        name="username"
        label="Username"
        sx={baseFormItemStyles}
        helperText="Several special characters are allowed, including space, period (.), hyphen (-), apostrophe ('), underscore (_), and the @ sign."
      />
      <TextField
        required
        fullWidth
        id="register-form-email"
        variant="outlined"
        name="email"
        label="Email"
        sx={baseFormItemStyles}
        type="email"
        helperText="The email address is not made public. It will only be used if you need to be contacted about your account or for opted-in notifications."
      />
      <TextField
        required
        fullWidth
        id="register-form-first-name"
        variant="outlined"
        name="first-name"
        label="First Name"
        sx={baseFormItemStyles}
      />
      <TextField
        required
        fullWidth
        id="register-form-last-name"
        variant="outlined"
        name="last-name"
        label="Last Name"
        sx={baseFormItemStyles}
      />
      <Button variant="contained" type="submit">
        Create account
      </Button>
    </>
  );

  const form = FormElement ? (
    <FormElement method="post">{innerForm}</FormElement>
  ) : (
    <form method="post">{innerForm}</form>
  );

  return (
    <>
      {goBackText && goBackUrl && (
        <Link href={goBackUrl} color="text.secondary" sx={goBackLinkStyles}>
          <ArrowBackIosNewIcon sx={iconStyles} /> {goBackText}
        </Link>
      )}
      <Paper sx={containerStyles}>
        <Typography variant="h1" color="primary.main" mb={1}>
          {title}
        </Typography>
        {description && <Typography mb={3}>{description}</Typography>}
        {form}
      </Paper>
      <Box sx={footerLinkStyles}>
        {accountUrl && (
          <Box>
            <Typography>
              Already have an account? <Link href={accountUrl}>Log in</Link>
            </Typography>
          </Box>
        )}
        {assistanceUrl && (
          <Box sx={{ ml: 2, pl: 2, borderLeft: `1px solid` }}>
            <Typography>
              Need assistance? <Link href={assistanceUrl}>Contact Us</Link>
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
}
