import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ElementType, useRef } from 'react';
import { checkRequiredFormFieldsTabs as onClickHandler } from '../../../lib/utils';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Link from '../../01-elements/link/link';
import Tabs, { RefHandler } from '../tabs/tabs';
import TimezoneField from '../timezone-field/timezone-field';
import {
  UserProfileDataType,
  type EmergencyContactType,
} from '../user-profile/user-profile';

type UserProfileFormProps = {
  type: string;
  breadcrumbs: {
    title: string;
    url: string;
  }[];
  userData: UserProfileDataType;
  profileUrl: string;
  changePasswordUrl?: string;
  FormElement: ElementType;
};

export default function UserProfileForm({
  type,
  breadcrumbs,
  userData,
  profileUrl,
  changePasswordUrl,
  FormElement,
}: UserProfileFormProps) {
  const theme = useTheme();
  const tabRef = useRef<RefHandler>(null);

  // Styles.
  const paperStyles = {
    p: theme.spacing(3),
  };

  const baseFormItemStyles = {
    display: 'block',
    mb: theme.spacing(3),
  };

  const buttonContainerStyles = {
    mt: theme.spacing(4),
    display: 'flex',
    gap: theme.spacing(2),
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  };

  function EmergencyContactForm({
    data,
    isPrimary = false,
  }: {
    data?: EmergencyContactType;
    isPrimary?: boolean;
  }) {
    const labelPrefix = isPrimary ? 'primary' : 'secondary';
    return (
      <>
        <TextField
          required={isPrimary}
          fullWidth
          id={`${labelPrefix}-emergency-name`}
          variant="outlined"
          name={`${labelPrefix}EmergencyName`}
          label="Name"
          defaultValue={data?.name}
          sx={baseFormItemStyles}
          helperText="Full name."
        />
        <TextField
          required={isPrimary}
          fullWidth
          id={`${labelPrefix}-emergency-relationship`}
          variant="outlined"
          name={`${labelPrefix}EmergencyRelationship`}
          label="Relationship"
          defaultValue={data?.relationship}
          sx={baseFormItemStyles}
          helperText="Examples: Mother, partner."
        />
        <TextField
          required={isPrimary}
          id={`${labelPrefix}-emergency-primary-phone`}
          variant="outlined"
          name={`${labelPrefix}EmergencyPrimaryPhone`}
          label="Primary Phone Number"
          defaultValue={data?.primaryPhone}
          sx={baseFormItemStyles}
          helperText="Include the Country Code. Example: +1 (555) 123-4567."
        />
        <TextField
          id={`${labelPrefix}-emergency-secondary-phone`}
          variant="outlined"
          name={`${labelPrefix}EmergencySecondaryPhone`}
          label="Secondary Phone Number"
          defaultValue={data?.secondaryPhone}
          sx={baseFormItemStyles}
          helperText="Include the Country Code. Example: +1 (555) 123-4567."
        />
        <TextField
          fullWidth
          id={`${labelPrefix}-emergency-email`}
          variant="outlined"
          name={`${labelPrefix}EmergencyEmail`}
          label="Email"
          defaultValue={data?.email}
          sx={baseFormItemStyles}
          helperText="Example: email@address.com."
        />
      </>
    );
  }

  const tabs = [
    <div aria-label="Personal Information">
      <Typography variant="h2" mb={4}>
        Edit your personal information
      </Typography>
      <TextField
        fullWidth
        id="first-name"
        variant="outlined"
        name="firstName"
        label="First Name"
        defaultValue={userData.firstName}
        sx={baseFormItemStyles}
      />
      <TextField
        fullWidth
        id="last-name"
        variant="outlined"
        name="lastName"
        label="Last Name"
        defaultValue={userData.lastName}
        sx={baseFormItemStyles}
      />
      <TextField
        fullWidth
        id="preferred-first-name"
        variant="outlined"
        name="preferredFirstName"
        label="Preferred First Name"
        defaultValue={userData.preferredFirstName}
        sx={baseFormItemStyles}
        helperText="Preferred name, such as a nickname."
      />
      <TextField
        fullWidth
        id="preferred-last-name"
        variant="outlined"
        name="preferredLastName"
        label="Preferred Last Name"
        defaultValue={userData.preferredLastName}
        sx={baseFormItemStyles}
        helperText="Preferred last name."
      />
      <TimezoneField
        id="timezone"
        name="timezone"
        label="Timezone"
        defaultValue={userData.timezone || ''}
        helperText="Select the desired local time and time zone. Dates and times throughout this site will be displayed using this time zone."
      />
    </div>,
  ];

  if (type === 'partner') {
    tabs.unshift(
      <div aria-label="Email and Password">
        <Typography variant="h2" mb={4}>
          Edit your username and password
        </Typography>
        <TextField
          required
          fullWidth
          id="email"
          variant="outlined"
          name="email"
          label="Email address"
          defaultValue={userData.email}
          sx={baseFormItemStyles}
          helperText="The email address is not made public. It will only be used if you need to be contacted about your account or for opted-in notifications."
        />
        <TextField
          required
          fullWidth
          id="username"
          variant="outlined"
          name="username"
          label="Username"
          defaultValue={userData.username}
          sx={baseFormItemStyles}
          helperText="Several special characters are allowed, including space, period (.), hyphen (-), apostrophe ('), underscore (_), and the @ sign."
        />
        {changePasswordUrl && (
          <Button component={Link} href={changePasswordUrl} variant="outlined">
            Change password
          </Button>
        )}
      </div>,
    );
  }

  if (type === 'student') {
    tabs.push(
      <div aria-label="Primary Emergency Contact">
        <Typography variant="h2" mb={4}>
          Edit your primary emergency contact
        </Typography>
        <EmergencyContactForm
          data={userData.primaryEmergencyContact}
          isPrimary={true}
        />
      </div>,
    );
    tabs.push(
      <div aria-label="Secondary Emergency Contact">
        <Typography variant="h2" mb={4}>
          Edit your secondary emergency contact
        </Typography>
        <EmergencyContactForm data={userData.secondaryEmergencyContact} />
      </div>,
    );
  }

  const formInner = (
    <>
      <input name="id" type="hidden" value={userData.id} />
      <Tabs
        name="Edit account form tabs"
        id="user-profile-form"
        tabPanelClassName="user-profile-form-panel"
        ref={tabRef}
      >
        {tabs}
      </Tabs>
      <Box sx={buttonContainerStyles}>
        <Button
          type="submit"
          variant="contained"
          onClick={(event) =>
            onClickHandler(event, 'user-profile-form-panel', tabRef)
          }
        >
          Save
        </Button>
        <Button component={Link} href={profileUrl} variant="outlined">
          Cancel
        </Button>
      </Box>
    </>
  );

  const form = FormElement ? (
    <FormElement method="post">{formInner}</FormElement>
  ) : (
    <form>{formInner}</form>
  );

  return (
    <article>
      <Breadcrumbs items={breadcrumbs} />
      <Typography variant="h1" mb={4}>
        Edit account
      </Typography>
      <Paper sx={paperStyles}>{form}</Paper>
    </article>
  );
}
