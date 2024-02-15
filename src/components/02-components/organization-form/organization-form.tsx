import {
  Box,
  Button,
  FormControlLabel,
  Paper,
  Switch,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ElementType, useRef } from 'react';
import { checkRequiredFormFieldsTabs as onClickHandler } from '../../../lib/utils';
import Link from '../../01-elements/link/link';
import AddressField, { type AddressType } from '../address-field/address-field';
import AutocompleteField, {
  AutocompleteOptionType,
} from '../autocomplete-field/autocomplete-field';
import Tabs, { type RefHandler } from '../tabs/tabs';

type OrganizationFormProps = {
  isEdit?: boolean;
  id?: string;
  name?: string;
  address?: AddressType;
  offeringRequiresApproval?: boolean;
  description?: string;
  additionalInformation?: string;
  healthSafetyInfo?: string;
  mainContactInfo?: {
    firstName: string;
    lastName: string;
    jobTitle?: string;
    phone: string;
    email: string;
    user: string;
  };
  publicContactInfo?: {
    phone?: string;
    email?: string;
    website?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
  legalContactSameAsMain?: boolean;
  legalContactInfo?: {
    firstName: string;
    lastName: string;
    jobTitle?: string;
    phone: string;
    email: string;
  };
  studentContactInfo?: {
    firstName: string;
    lastName: string;
    jobTitle?: string;
    phone: string;
    email: string;
  };
  industry?: string;
  orgType?: string;
  focusPopulation?: string[];
  focusAreas?: string[];
  subFocusAreas?: string[];
  mainContactUserOptions: AutocompleteOptionType[];
  industryOptions: AutocompleteOptionType[];
  organizationTypeOptions: AutocompleteOptionType[];
  focusAreaOptions: AutocompleteOptionType[];
  subFocusAreaOptions: AutocompleteOptionType[];
  focusPopulationOptions: AutocompleteOptionType[];
  FormElement: ElementType;
  mainHeadingLevel?: 'h1' | 'h2';
  byline?: string;
};

export default function OrganizationForm({
  isEdit = false,
  id,
  name,
  address,
  offeringRequiresApproval,
  description,
  additionalInformation,
  healthSafetyInfo,
  mainContactInfo,
  publicContactInfo,
  legalContactSameAsMain,
  legalContactInfo,
  studentContactInfo,
  industry,
  orgType,
  focusPopulation,
  focusAreas,
  subFocusAreas,
  //populationSize,
  mainContactUserOptions,
  industryOptions,
  organizationTypeOptions,
  focusAreaOptions,
  subFocusAreaOptions,
  focusPopulationOptions,
  FormElement,
  mainHeadingLevel = 'h1',
  byline,
}: OrganizationFormProps) {
  const theme = useTheme();
  const tabRef = useRef<RefHandler>(null);

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

  const buttonContainerStyles = {
    display: 'flex',
    gap: theme.spacing(2),
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  };

  const fieldSetStyles = {
    pt: theme.spacing(3),
    pl: theme.spacing(3),
    pr: theme.spacing(3),
    mb: theme.spacing(3),
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.spacing(1),
  };

  const formFieldStyles = {
    mb: theme.spacing(3),
    display: 'block',
  };

  const helpTextStyles = {
    mb: theme.spacing(3),
    display: 'block',
    fontSize: "10px",
  };

  const innerForm = (
    <>
      <Tabs
        name="Organization form"
        id="organization-form"
        tabPanelClassName="organization-form-panel"
        ref={tabRef}
      >
        <div title="General Information">
          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>General Information</legend>
            {id && <input type="hidden" name="id" value={id} />}
            <TextField
              required
              fullWidth
              id="org-form-name"
              variant="outlined"
              name="label"
              label="Name"
              defaultValue={name}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              id="org-form-description"
              variant="outlined"
              name="field_body"
              label="Description"
              defaultValue={description}
              sx={baseFormItemStyles}
              helperText="Please provide a brief description of your organization’s mission and purpose"
            />
            <AutocompleteField
              required
              id="org-form-industry"
              name="field_industry"
              label="Sector"
              options={industryOptions}
              selected={industry}
              sx={baseFormItemStyles}
            />
            <AutocompleteField
              required
              id="org-form-org-type"
              name="field_type"
              label="Organization Type"
              options={organizationTypeOptions}
              selected={orgType}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              id="org-form-health-safety"
              variant="outlined"
              name="field_health_safety_info"
              label="General Safety Information and Training"
              defaultValue={healthSafetyInfo}
              helperText="Please describe general health and safety requirements for your organization, including the type of orientation/training your organization provides to students, and any waivers or forms that will be required by the organization (you may include url links to this information on your website). Organizations will have the opportunity to provide specific health and safety considerations as part of the offering process. "
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              id="org-form-additional-information"
              variant="outlined"
              name="field_additional_information"
              label="Additional Information"
              defaultValue={additionalInformation}
              helperText="Please share any additional information you'd like us to know about your organization (e.g. small business, woman owned, etc.)"
            />
          </Box>
          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Focus Population and Areas</legend>

            <AutocompleteField
              multiple
              required
              id="org-form-focus-population"
              name="field_focus_populations"
              label="Focus Population(s)"
              options={focusPopulationOptions}
              selected={focusPopulation}
              sx={baseFormItemStyles}
              helptext="Please indicate primary population/clientele your organization will serve either directly or indirectly as part of this offering. If you're unsure, select 'Non-specific/any population' (select all that apply)."
            />
            <AutocompleteField
              multiple
              required
              id="org-form-focus-areas"
              name="field_focus_areas"
              label="Focus Area(s)"
              options={focusAreaOptions}
              selected={focusAreas}
              sx={baseFormItemStyles}
              helptext="Please identify the general focus area(s) pertaining to this offering (select all that apply)"
            />
            <AutocompleteField
              multiple
              id="org-form-subfocus-areas"
              name="field_sub_focus_areas"
              label="Sub-focus Area(s)"
              options={subFocusAreaOptions}
              selected={subFocusAreas}
              sx={baseFormItemStyles}
              helptext="For the focus area(s) identified above, please select any subcategories that apply. (Note: not all areas have subcategories)."
            />
          </Box>

          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Default Offering Settings</legend>
            <Typography sx={formFieldStyles}>
              These are settings which affect all offerings your organization provides to students and will auto-populate when creating a new offering. You can change these settings on individual offerings as needed.
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  name="field_offering_requires_approval"
                  defaultChecked={offeringRequiresApproval}
                />
              }
              label="Offerings require approval"
            />
            <Typography sx={helpTextStyles}>
              This setting requires your organization to approve a student who has applied to an offering, i.e. if your organization requires an interview/approval process.
            </Typography>
          </Box>
        </div>

        <div title="Contacts">
          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>General Contact Information</legend>
            <AddressField address={address} sx={baseFormItemStyles} />
            <TextField
              fullWidth
              id="org-form-public-contact-phone"
              variant="outlined"
              name="field_general_phone"
              label="Main Phone"
              defaultValue={publicContactInfo?.phone}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-public-contact-email"
              variant="outlined"
              name="field_general_email"
              label="General Email"
              defaultValue={publicContactInfo?.email}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-public-contact-website"
              variant="outlined"
              name="field_website"
              label="Website"
              defaultValue={publicContactInfo?.website}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-public-contact-linkedin"
              variant="outlined"
              name="field_linkedin"
              label="LinkedIn"
              defaultValue={publicContactInfo?.linkedin}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-public-contact-instagram"
              variant="outlined"
              name="field_instagram"
              label="Instagram"
              defaultValue={publicContactInfo?.instagram}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-public-contact-twitter"
              variant="outlined"
              name="field_twitter"
              label="X (formerly Twitter)"
              defaultValue={publicContactInfo?.twitter}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-public-contact-facebook"
              variant="outlined"
              name="field_facebook"
              label="Facebook"
              defaultValue={publicContactInfo?.facebook}
            />
          </Box>
          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Primary Contact</legend>
            <TextField
              required
              fullWidth
              id="org-form-main-contact-firstname"
              variant="outlined"
              name="field_main_contact_first"
              label="First Name"
              defaultValue={mainContactInfo?.firstName}
              sx={baseFormItemStyles}
            />
            <TextField
              required
              fullWidth
              id="org-form-main-contact-lastname"
              variant="outlined"
              name="field_main_contact_last"
              label="Last Name"
              defaultValue={mainContactInfo?.lastName}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-main-contact-jobtitle"
              variant="outlined"
              name="field_main_contact_title"
              label="Job Title"
              defaultValue={mainContactInfo?.jobTitle}
              sx={baseFormItemStyles}
            />
            <TextField
              required
              fullWidth
              id="org-form-main-contact-phone"
              variant="outlined"
              name="field_main_contact_phone"
              label="Phone"
              defaultValue={mainContactInfo?.phone}
              sx={baseFormItemStyles}
            />
            <TextField
              required
              fullWidth
              id="org-form-main-contact-email"
              variant="outlined"
              name="field_main_contact_email"
              label="Email"
              defaultValue={mainContactInfo?.email}
              sx={baseFormItemStyles}
            />
            {id && (
              <AutocompleteField
                required
                id="org-form-main-contact-user"
                name="field_main_contact_user"
                label="User"
                options={mainContactUserOptions}
                selected={mainContactInfo?.user}
              />
            )}
          </Box>
          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Legal Contact</legend>
            <FormControlLabel
              control={
                <Switch
                  name="field_legal_is_main"
                  defaultChecked={legalContactSameAsMain}
                />
              }
              label="Same as main contact"
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-legal-contact-firstname"
              variant="outlined"
              name="field_legal_contact_first"
              label="First Name"
              defaultValue={legalContactInfo?.firstName}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-legal-contact-lastname"
              variant="outlined"
              name="field_legal_contact_last"
              label="Last Name"
              defaultValue={legalContactInfo?.lastName}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-legal-contact-jobtitle"
              variant="outlined"
              name="field_legal_contact_title"
              label="Job Title"
              defaultValue={legalContactInfo?.jobTitle}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-legal-contact-phone"
              variant="outlined"
              name="field_legal_contact_phone"
              label="Phone"
              defaultValue={legalContactInfo?.phone}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-legal-contact-email"
              variant="outlined"
              name="field_legal_contact_email"
              label="Email"
              defaultValue={legalContactInfo?.email}
            />
          </Box>
          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Organization's Student</legend>
            <TextField
              fullWidth
              id="org-form-student-contact-firstname"
              variant="outlined"
              name="field_student_contact_first"
              label="First Name"
              defaultValue={studentContactInfo?.firstName}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-student-contact-lastname"
              variant="outlined"
              name="field_student_contact_last"
              label="Last Name"
              defaultValue={studentContactInfo?.lastName}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-student-contact-jobtitle"
              variant="outlined"
              name="field_student_contact_title"
              label="Job Title"
              defaultValue={studentContactInfo?.jobTitle}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-student-contact-phone"
              variant="outlined"
              name="field_student_contact_phone"
              label="Phone"
              defaultValue={studentContactInfo?.phone}
              sx={baseFormItemStyles}
            />
            <TextField
              fullWidth
              id="org-form-student-contact-email"
              variant="outlined"
              name="field_student_contact_email"
              label="Email"
              defaultValue={studentContactInfo?.email}
            />
          </Box>
        </div>
      </Tabs>
      <Box sx={buttonContainerStyles}>
        <Button
          type="submit"
          variant="contained"
          onClick={(event) =>
            onClickHandler(event, 'organization-form-panel', tabRef)
          }
        >
          {isEdit ? 'Update' : 'Create'} Organization
        </Button>
        {isEdit && (
          <Button component={Link} href="#/organization" variant="outlined">
            Cancel
          </Button>
        )}
      </Box>
    </>
  );

  const form = FormElement ? (
    <FormElement method="post">{innerForm}</FormElement>
  ) : (
    <form method="post">{innerForm}</form>
  );

  return (
    <Paper sx={containerStyles}>
      <Typography
        variant={mainHeadingLevel}
        mb={byline ? 0 : 3}
        color="primary.main"
      >
        {isEdit ? 'Edit' : 'Create an'} organization
      </Typography>
      <Typography mb={3}>{byline}</Typography>
      {form}
    </Paper>
  );
}
