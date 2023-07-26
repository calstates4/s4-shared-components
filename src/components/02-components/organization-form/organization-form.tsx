import { Box, Button, FormControlLabel, Paper, Switch, TextField, Typography, useTheme } from '@mui/material';
import { ElementType } from 'react';
import Link from '../../01-elements/link/link';
import AddressField, { type AddressType } from '../address-field/address-field';
import AutocompleteField, {
  AutocompleteOptionType,
} from '../autocomplete-field/autocomplete-field';

type OrganizationFormProps = {
  isEdit?: boolean;
  name?: string;
  address?: AddressType;
  offeringRequiresApproval?: boolean;
  description?: string;
  adminNotes?: string;
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
  industry?: string;
  orgType?: string;
  focusPopulation?: string[];
  focusAreas?: string[];
  subFocusAreas?: string[];
  populationSize?: number;
  mainContactUserOptions: AutocompleteOptionType[];
  industryOptions: AutocompleteOptionType[];
  organizationTypeOptions: AutocompleteOptionType[];
  focusAreaOptions: AutocompleteOptionType[];
  focusPopulationOptions: AutocompleteOptionType[];
  FormElement: ElementType;
  mainHeadingLevel?: 'h1' | 'h2';
  subHeadingLevel?: 'h2' | 'h3';
  byline?: string;
};

export default function OrganizationForm({
  isEdit = false,
  name,
  address,
  offeringRequiresApproval,
  description,
  adminNotes,
  healthSafetyInfo,
  mainContactInfo,
  publicContactInfo,
  legalContactSameAsMain,
  legalContactInfo,
  industry,
  orgType,
  focusPopulation,
  focusAreas,
  subFocusAreas,
  populationSize,
  mainContactUserOptions,
  industryOptions,
  organizationTypeOptions,
  focusAreaOptions,
  focusPopulationOptions,
  FormElement,
  mainHeadingLevel = 'h1',
  subHeadingLevel = 'h2',
  byline,
}: OrganizationFormProps) {
  const theme = useTheme();

  // Styles.
  const containerStyles = {
    p: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      p: theme.spacing(3),
    },
  };

  const formSectionStyles = {
    mb: theme.spacing(4),
  };

  const sectionTitleStyles = {
    mb: theme.spacing(3),
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

  const innerForm = (
    <>
      <Box sx={formSectionStyles}>
        <Typography variant={subHeadingLevel} sx={sectionTitleStyles}>
          Metadata
        </Typography>
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
        <AddressField address={address} sx={baseFormItemStyles} />
        <FormControlLabel
          control={
            <Switch
              name="field_offering_requires_approval"
              defaultChecked={offeringRequiresApproval}
            />
          }
          label="Offering requires approval"
        />
      </Box>
      <Box sx={formSectionStyles}>
        <Typography variant={subHeadingLevel} sx={sectionTitleStyles}>
          Content
        </Typography>
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
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          id="org-form-admin-notes"
          variant="outlined"
          name="field_admin_notes"
          label="Administrative Notes"
          defaultValue={adminNotes}
          sx={baseFormItemStyles}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          id="org-form-health-safety"
          variant="outlined"
          name="field_health_safety_info"
          label="Health and safety information"
          defaultValue={healthSafetyInfo}
        />
      </Box>
      <Box sx={formSectionStyles}>
        <Typography variant={subHeadingLevel} sx={sectionTitleStyles}>
          Main Contact Info (Campus Staff)
        </Typography>
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
        <AutocompleteField
          required
          id="org-form-main-contact-user"
          name="field_main_contact_user"
          label="User"
          options={mainContactUserOptions}
          selected={mainContactInfo?.user}
        />
      </Box>
      <Box sx={formSectionStyles}>
        <Typography variant={subHeadingLevel} sx={sectionTitleStyles}>
          Public Contact Info (Students)
        </Typography>
        <TextField
          fullWidth
          id="org-form-public-contact-phone"
          variant="outlined"
          name="field_general_phone"
          label="Phone"
          defaultValue={publicContactInfo?.phone}
          sx={baseFormItemStyles}
        />
        <TextField
          fullWidth
          id="org-form-public-contact-email"
          variant="outlined"
          name="field_general_email"
          label="Email"
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
          label="Linkedin"
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
          label="Twitter"
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
      <Box sx={formSectionStyles}>
        <Typography variant={subHeadingLevel} sx={sectionTitleStyles}>
          Legal Contact Info
        </Typography>
        <FormControlLabel
          control={
            <Switch name="NAME" defaultChecked={legalContactSameAsMain} />
          }
          label="Same as main contact"
          sx={baseFormItemStyles}
        />
        <TextField
          required
          fullWidth
          id="org-form-legal-contact-firstname"
          variant="outlined"
          name="field_legal_contact_first"
          label="First Name"
          defaultValue={legalContactInfo?.firstName}
          sx={baseFormItemStyles}
        />
        <TextField
          required
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
          required
          fullWidth
          id="org-form-legal-contact-phone"
          variant="outlined"
          name="field_legal_contact_phone"
          label="Phone"
          defaultValue={legalContactInfo?.phone}
          sx={baseFormItemStyles}
        />
        <TextField
          required
          fullWidth
          id="org-form-legal-contact-email"
          variant="outlined"
          name="field_legal_contact_email"
          label="Email"
          defaultValue={legalContactInfo?.email}
        />
      </Box>
      <Box sx={formSectionStyles}>
        <Typography variant={subHeadingLevel} sx={sectionTitleStyles}>
          Focus
        </Typography>
        <AutocompleteField
          required
          id="org-form-industry"
          name="field_industry"
          label="Industry"
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
        <AutocompleteField
          multiple
          required
          id="org-form-focus-population"
          name="field_focus_populations"
          label="Focus Population(s)"
          options={focusPopulationOptions}
          selected={focusPopulation}
          sx={baseFormItemStyles}
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
        />
        <AutocompleteField
          multiple
          id="org-form-subfocus-areas"
          name="field_sub_focus_areas"
          label="Sub Focus Area(s)"
          options={focusAreaOptions}
          selected={subFocusAreas}
          sx={baseFormItemStyles}
        />
        <TextField
          fullWidth
          id="org-form-focus-population"
          variant="outlined"
          name="NAME"
          label="Approximately how many people does this organization serve?"
          defaultValue={populationSize}
        />
      </Box>
      <Box sx={buttonContainerStyles}>
        <Button type="submit" variant="contained">
          {isEdit ? 'Update' : 'Create'} Organization
        </Button>
        {isEdit && (
          <Button component={Link} href="/organization" variant="outlined">
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
      <Typography variant={mainHeadingLevel} mb={byline ? 0 : 3} color="primary.main">
        {isEdit ? 'Edit' : 'Create an'} organization
      </Typography>
      <Typography mb={3}>{byline}</Typography>
      {form}
    </Paper>
  );
}
