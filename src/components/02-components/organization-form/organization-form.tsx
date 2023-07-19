import { Switch } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Box, Paper, TextField, Typography } from '@mui/material';
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
}: OrganizationFormProps) {
  return (
    <Paper>
      <Typography variant="h1">
        {isEdit ? 'Edit' : 'Create an'} organization
      </Typography>
      <Box>
        <Typography variant="h2">Metadata</Typography>
        <TextField
          required
          fullWidth
          id="org-form-name"
          variant="outlined"
          name="label"
          label="Name"
          defaultValue={name}
        />
        <AddressField address={address} mb={3} />
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
      <Box>
        <Typography variant="h2">Content</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          id="org-form-description"
          variant="outlined"
          name="field_body"
          label="Description"
          defaultValue={description}
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
      <Box>
        <Typography variant="h2">Main Contact Info (Campus Staff)</Typography>
        <TextField
          required
          fullWidth
          id="org-form-main-contact-firstname"
          variant="outlined"
          name="field_main_contact_first"
          label="First Name"
          defaultValue={mainContactInfo?.firstName}
        />
        <TextField
          required
          fullWidth
          id="org-form-main-contact-lastname"
          variant="outlined"
          name="field_main_contact_last"
          label="Last Name"
          defaultValue={mainContactInfo?.lastName}
        />
        <TextField
          fullWidth
          id="org-form-main-contact-jobtitle"
          variant="outlined"
          name="field_main_contact_title"
          label="Job Title"
          defaultValue={mainContactInfo?.jobTitle}
        />
        <TextField
          required
          fullWidth
          id="org-form-main-contact-phone"
          variant="outlined"
          name="field_main_contact_phone"
          label="Phone"
          defaultValue={mainContactInfo?.phone}
        />
        <TextField
          required
          fullWidth
          id="org-form-main-contact-email"
          variant="outlined"
          name="field_main_contact_email"
          label="Email"
          defaultValue={mainContactInfo?.email}
        />
        <AutocompleteField
          id="org-form-main-contact-user"
          name="field_main_contact_user"
          label="User"
          options={mainContactUserOptions}
          selected={mainContactInfo?.user}
        />
      </Box>
      <Box>
        <Typography variant="h2">Public Contact Info (Students)</Typography>
        <TextField
          fullWidth
          id="org-form-public-contact-phone"
          variant="outlined"
          name="field_general_phone"
          label="Phone"
          defaultValue={publicContactInfo?.phone}
        />
        <TextField
          fullWidth
          id="org-form-public-contact-email"
          variant="outlined"
          name="field_general_email"
          label="Email"
          defaultValue={publicContactInfo?.email}
        />
        <TextField
          fullWidth
          id="org-form-public-contact-website"
          variant="outlined"
          name="field_website"
          label="Website"
          defaultValue={publicContactInfo?.website}
        />
        <TextField
          fullWidth
          id="org-form-public-contact-linkedin"
          variant="outlined"
          name="field_linkedin"
          label="Linkedin"
          defaultValue={publicContactInfo?.linkedin}
        />
        <TextField
          fullWidth
          id="org-form-public-contact-instagram"
          variant="outlined"
          name="field_instagram"
          label="Instagram"
          defaultValue={publicContactInfo?.instagram}
        />
        <TextField
          fullWidth
          id="org-form-public-contact-twitter"
          variant="outlined"
          name="field_twitter"
          label="Twitter"
          defaultValue={publicContactInfo?.twitter}
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
      <Box>
        <Typography variant="h2">Legal Contact Info</Typography>
        <FormControlLabel
          control={
            <Switch name="NAME" defaultChecked={legalContactSameAsMain} />
          }
          label="Same as main contact"
        />
        <TextField
          required
          fullWidth
          id="org-form-legal-contact-firstname"
          variant="outlined"
          name="field_legal_contact_first"
          label="First Name"
          defaultValue={legalContactInfo?.firstName}
        />
        <TextField
          required
          fullWidth
          id="org-form-legal-contact-lastname"
          variant="outlined"
          name="field_legal_contact_last"
          label="Last Name"
          defaultValue={legalContactInfo?.lastName}
        />
        <TextField
          fullWidth
          id="org-form-legal-contact-jobtitle"
          variant="outlined"
          name="field_legal_contact_title"
          label="Job Title"
          defaultValue={legalContactInfo?.jobTitle}
        />
        <TextField
          required
          fullWidth
          id="org-form-legal-contact-phone"
          variant="outlined"
          name="field_legal_contact_phone"
          label="Phone"
          defaultValue={legalContactInfo?.phone}
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
      <Box>
        <Typography variant="h2">Focus</Typography>
        <AutocompleteField
          id="org-form-industry"
          name="field_industry"
          label="Industry"
          options={industryOptions}
          selected={industry}
        />
        <AutocompleteField
          id="org-form-org-type"
          name="field_type"
          label="Organization Type"
          options={organizationTypeOptions}
          selected={orgType}
        />
        <AutocompleteField
          multiple
          id="org-form-focus-population"
          name="field_focus_populations"
          label="Focus Population(s)"
          options={focusPopulationOptions}
          selected={focusPopulation}
        />
        <AutocompleteField
          multiple
          id="org-form-focus-areas"
          name="field_focus_areas"
          label="Focus Area(s)"
          options={focusAreaOptions}
          selected={focusAreas}
        />
        <AutocompleteField
          multiple
          id="org-form-subfocus-areas"
          name="field_sub_focus_areas"
          label="Sub Focus Area(s)"
          options={focusAreaOptions}
          selected={subFocusAreas}
        />
        <TextField
          id="org-form-focus-population"
          variant="outlined"
          name="NAME"
          label="Approximately how many people does this organization serve?"
          defaultValue={populationSize}
        />
      </Box>
    </Paper>
  );
}
