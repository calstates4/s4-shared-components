import { Paper, Typography, useTheme } from '@mui/material';
import { ElementType, useRef } from 'react';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Tabs, { RefHandler } from '../tabs/tabs';
import { type emergencyContactType } from '../user-profile/user-profile';

type UserProfileFormProps = {
  type: string;
  breadcrumb: {
    title: string;
    url: string;
  }[];
  email: string;
  firstName?: string;
  lastName?: string;
  preferredFirstName?: string;
  preferredLastName?: string;
  timezone?: string;
  primaryEmergencyContact?: emergencyContactType;
  secondaryEmergencyContact?: emergencyContactType;
  profileUrl: string;
  changePasswordLink: string;
  FormElement: ElementType;
};

export default function UserProfileForm({
  type,
  breadcrumb,
  email,
  firstName,
  lastName,
  preferredFirstName,
  preferredLastName,
  timezone,
  primaryEmergencyContact,
  secondaryEmergencyContact,
  profileUrl,
  changePasswordLink,
  FormElement,
}: UserProfileFormProps) {
  const theme = useTheme();
  const tabRef = useRef<RefHandler>(null);

  // Styles.
  const paperStyles = {
    p: theme.spacing(3),
  };

  const tabs = [
    <div title="Email and Password">
      <Typography variant="h2">Edit your username and password</Typography>
    </div>,
    <div title="Personal Information">
      <Typography variant="h2">Edit your personal information</Typography>
    </div>,
  ];

  if (type === 'student') {
    tabs.push(
      <div title="Primary Emergency Contact">
        <Typography variant="h2">
          Edit your primary emergency contact
        </Typography>
      </div>,
    );
    tabs.push(
      <div title="Secondary Emergency Contact">
        <Typography variant="h2">
          Edit your secondary emergency contact
        </Typography>
      </div>,
    );
  }

  const formInner = (
    <Tabs
      name="Offering form tabs"
      id="offering-form"
      tabPanelClassName="offering-form-panel"
      ref={tabRef}
    >
      {tabs}
    </Tabs>
  );

  const form = FormElement ? (
    <FormElement method="post">{formInner}</FormElement>
  ) : (
    <form>{formInner}</form>
  );

  return (
    <article>
      <Breadcrumbs items={breadcrumb} />
      <Typography variant="h1">Edit account</Typography>
      <Paper sx={paperStyles}>{form}</Paper>
    </article>
  );
}
