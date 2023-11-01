import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import Link from '../../01-elements/link/link';

export type emergencyContactType = {
  name?: string;
  relationship?: string;
  primaryPhone?: string;
  secondaryPhone?: string;
  email?: string;
};

type UserProfileProps = {
  email: string;
  firstName?: string;
  lastName?: string;
  preferredFirstName?: string;
  preferredLastName?: string;
  timezone?: string;
  universityId?: string;
  primaryEmergencyContact?: emergencyContactType;
  secondaryEmergencyContact?: emergencyContactType;
  editProfileUrl: string;
};

type EmergencyContactProps = {
  title: string;
  contact?: emergencyContactType;
};

export default function UserProfile({
  email,
  firstName,
  lastName,
  preferredFirstName,
  preferredLastName,
  timezone,
  universityId,
  primaryEmergencyContact,
  secondaryEmergencyContact,
  editProfileLink,
  changePasswordLink,
}: UserProfileProps) {
  const theme = useTheme();
  // Styles.
  const headingStyles = {
    mb: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    alignItems: 'flex-start',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      gap: 0,
      justifyContent: 'space-between',
    },
  };

  const paperStyles = {
    p: `${theme.spacing(3)} ${theme.spacing(10)} ${theme.spacing(
      10,
    )} ${theme.spacing(3)}`,
    '& > div:not(:last-child)': {
      pb: theme.spacing(3),
      mb: theme.spacing(3),
      borderBottom: `1px solid ${theme.palette.primary.light}`,
    },
  };

  const listStyles = {
    m: 0,
    '& div': {
      mb: theme.spacing(2),
    },
    '& dt': {
      fontWeight: '700',
      display: 'inline',
    },
    '& dd': {
      display: 'inline',
      ml: theme.spacing(0.5),
    },
    [theme.breakpoints.up('sm')]: {
      columnCount: 2,
      columnGap: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      pr: '20%',
    },
    [theme.breakpoints.up('lg')]: {
      pr: '40%',
    },
  };

  const threeColListStyles = {
    ...listStyles,
    [theme.breakpoints.up('md')]: {
      columnCount: 3,
      pr: 0,
    },
    [theme.breakpoints.up('lg')]: {
      pr: '30%',
    },
  };

  function EmergencyContact({ title, contact }: EmergencyContactProps) {
    return contact && Object.keys(contact) ? (
      <Box>
        <Typography variant="h3" component="h2" mb={3}>
          {title}
        </Typography>
        <Box component="dl" sx={threeColListStyles}>
          {contact.name && (
            <div>
              <dt>Name:</dt>
              <dd>{contact.name}</dd>
            </div>
          )}
          {contact.relationship && (
            <div>
              <dt>Relationship:</dt>
              <dd>{contact.relationship}</dd>
            </div>
          )}
          {contact.primaryPhone && (
            <div>
              <dt>Primary Phone:</dt>
              <dd>{contact.primaryPhone}</dd>
            </div>
          )}
          {contact.secondaryPhone && (
            <div>
              <dt>Secondary Phone:</dt>
              <dd>{contact.secondaryPhone}</dd>
            </div>
          )}
          {contact.email && (
            <div>
              <dt>Email:</dt>
              <dd>{contact.email}</dd>
            </div>
          )}
        </Box>
      </Box>
    ) : null;
  }

  return (
    <article>
      <Box sx={headingStyles}>
        <Typography variant="h1">My account</Typography>
        <Button component={Link} variant="contained" href={editProfileLink}>
          Edit account info
        </Button>
      </Box>
      <Paper sx={paperStyles}>
        <Box>
          <Typography variant="h3" component="h2" mb={3}>
            Username and password
          </Typography>
          <Box component="dl" sx={listStyles}>
            <div>
              <dt>Email address:</dt>
              <dd>{email}</dd>
            </div>
            <div>
              <dt>Student/Employee ID:</dt>
              <dd>{universityId}</dd>
            </div>
            <div>
              <dt>Password:</dt>
              <dd>*********</dd>
            </div>
          </Box>
        </Box>
        <Box>
          <Typography variant="h3" component="h2" mb={3}>
            Personal Information
          </Typography>
          <Box component="dl" sx={threeColListStyles}>
            <div>
              <dt>First name:</dt>
              <dd>{firstName}</dd>
            </div>
            <div>
              <dt>Last name:</dt>
              <dd>{lastName}</dd>
            </div>
            <div>
              <dt>Preferred first name:</dt>
              <dd>{preferredFirstName}</dd>
            </div>
            <div>
              <dt>Preferred last name:</dt>
              <dd>{preferredLastName}</dd>
            </div>
            <div>
              <dt>Time zone:</dt>
              <dd>{timezone}</dd>
            </div>
          </Box>
        </Box>
        <EmergencyContact
          title="Primary Emergency Contact"
          contact={primaryEmergencyContact}
        />
        <EmergencyContact
          title="Secondary Emergency Contact"
          contact={secondaryEmergencyContact}
        />
      </Paper>
    </article>
  );
}
