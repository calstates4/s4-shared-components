import {
  Box,
  Button,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  Paper,
  Switch,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ChangeEvent, ElementType, useRef, useState } from 'react';
import { checkRequiredFormFieldsTabs as onClickHandler } from '../../../lib/utils';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Link from '../../01-elements/link/link';
import AddressField, { AddressType } from '../address-field/address-field';
import AutocompleteField, {
  type AutocompleteOptionType,
} from '../autocomplete-field/autocomplete-field';
import Tabs, { type RefHandler } from '../tabs/tabs';

const OFFERING_TYPES = [
  { value: 'on-site', label: 'On-site' },
  { value: 'remote', label: 'Remote' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'negotiable', label: 'Negotiable' },
];

const OFFERING_TIME_UNITS = [
  { value: 'hours', label: 'Hour(s)' },
  { value: 'days', label: 'Day(s)' },
  { value: 'weeks', label: 'Week(s)' },
  { value: 'years', label: 'Year(s)' },
];

const OFFERING_TIME_FREQUENCY = [
  { value: 'not-recurring', label: 'Not recurring' },
  { value: 'day', label: 'Per day' },
  { value: 'week', label: 'Per week' },
  { value: 'month', label: 'Per month' },
  { value: 'year', label: 'Per year' },
];

const PAY_TYPE = [
  { value: 1, label: 'Hourly Pay' },
  { value: 2, label: 'Stipend' },
  { value: 3, label: 'Expense Reimbursement' },
  { value: 4, label: 'Other (please explain)' },
];

const PAY_FREQUENCY = [
  { value: 'weekly', label: 'weekly' },
  { value: 'biweekly', label: 'bi-weekly' },
  { value: 'monthly', label: 'monthly' },
  { value: 'scheduled', label: 'scheduled' },
  { value: 'once', label: 'once' },
];

export type OfferingFormProps = {
  isEdit?: boolean;
  cancelUrl?: string;
  duplidateUr?: string;
  breadcrumb: {
    title: string;
    url: string;
  }[];
  departments?: AutocompleteOptionType[];
  address?: AddressType;
  primaryContacts?: AutocompleteOptionType[];
  timeApprovers?: AutocompleteOptionType[];
  formSigners?: AutocompleteOptionType[];
  observers?: AutocompleteOptionType[];
  preferredLanguages?: AutocompleteOptionType[];
  requiredLanguages?: AutocompleteOptionType[];
  focusPopulations?: AutocompleteOptionType[];
  focusAreas?: AutocompleteOptionType[];
  subFocusAreas?: AutocompleteOptionType[];
  activities?: AutocompleteOptionType[];
  requirements?: AutocompleteOptionType[];
  FormElement?: ElementType;
  defaultName?: string;
  defaultRequiresApproval?: boolean;
  defaultApplicationInstructions?: string;
  defaultDepartment?: string;
  defaultOfferingType?: string;
  defaultMaxStudents?: number;
  defaultStartDate?: string;
  defaultEndDate?: string;
  defaultPrimaryContact?: string;
  defaultTimeApprovers?: string[];
  defaultFormSigners?: string[];
  defaultObservers?: string[];
  defaultPreferredLanguages?: string[];
  defaultRequiredLanguages?: string[];
  defaultDescription?: string;
  defaultHealthSafetyInformation?: string;
  defaultTraining?: string;
  defaultFocusPopulations?: string[];
  defaultFocusAreas?: string[];
  defaultSubFocusAreas?: string[];
  defaultActivities?: string[];
  defaultRequirements?: string[];
  defaultSupervision?: string;
  defaultTimeAmount?: number;
  defaultTimeUnit?: string;
  defaultTimeFrequency?: string;
  defaultPublished?: boolean;
  defaultPayType?: string;
  defaultPayFrequency?: string;
  emailStudentSelected?: string;

  expectedSkillAcquisition?: string;
  safetyConsiderations?: string[];
  knownHazardsComments?: string;
  populationServedComments?: string;
  siteLocationComments?: string;
  supervisionComments?: string;
};

export default function OfferingForm({
  isEdit = false,
  cancelUrl,
  duplidateUr,
  breadcrumb,
  departments,
  address,
  primaryContacts,
  timeApprovers,
  formSigners,
  observers,
  preferredLanguages,
  requiredLanguages,
  focusPopulations,
  focusAreas,
  subFocusAreas,
  activities,
  requirements,
  FormElement,
  defaultName,
  defaultRequiresApproval,
  defaultApplicationInstructions,
  defaultDepartment,
  defaultPrimaryContact,
  defaultTimeApprovers,
  defaultFormSigners,
  defaultObservers,
  defaultPreferredLanguages,
  defaultRequiredLanguages,
  defaultOfferingType,
  defaultMaxStudents,
  defaultStartDate,
  defaultEndDate,
  defaultDescription,
  defaultHealthSafetyInformation,
  defaultTraining,
  defaultFocusPopulations,
  defaultFocusAreas,
  defaultSubFocusAreas,
  defaultActivities,
  defaultRequirements,
  defaultSupervision,
  defaultTimeAmount,
  defaultTimeUnit,
  defaultTimeFrequency,
  defaultPayType,
  defaultPayFrequency,
  defaultPublished,
  emailStudentSelected,
  expectedSkillAcquisition,
  safetyConsiderations,
  knownHazardsComments,
  populationServedComments,
  siteLocationComments,
  supervisionComments,
}: OfferingFormProps) {
  const theme = useTheme();
  const tabRef = useRef<RefHandler>(null);
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [requiresApproval, setRequiresApproval] = useState(
    defaultRequiresApproval,
  );

  const [isKnownHazards, setIsKnownHazards] = useState(safetyConsiderations?.includes('known_hazards'));
  function khChangeHandler() {
    setIsKnownHazards(!isKnownHazards);
  }
  const [isPopulationServed, setIsPopulationServed] = useState(safetyConsiderations?.includes('population_served'));
  function psChangeHandler() {
    setIsPopulationServed(!isPopulationServed);
  }
  const [isSiteLocation, setIsSiteLocation] = useState(safetyConsiderations?.includes('site_location'));
  function slChangeHandler() {
    setIsSiteLocation(!isSiteLocation);
  }
  const [isSupervision, setIsSupervision] = useState(safetyConsiderations?.includes('supervision'));
  function supervisionChangeHandler() {
    setIsSupervision(!isSupervision);
  }

  // Styles.
  const paperStyles = {
    p: theme.spacing(3),
    mb: theme.spacing(3),
    fontSize: '1rem',
  };

  const titleStyles = {
    color: 'primary.main',
    mb: theme.spacing(2),
  };

  const formFieldStyles = {
    mb: theme.spacing(3),
    display: 'block',
  };

  const actionButtonsContainerStyles = {
    display: 'flex',
    gap: theme.spacing(1),
    flexWrap: 'wrap',
  };

  const fieldSetStyles = {
    pt: theme.spacing(3),
    pl: theme.spacing(3),
    pr: theme.spacing(3),
    mb: theme.spacing(3),
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.spacing(1),
  };

  const hlpText = {
    fontWeight: 100,
    fontSize: 14,
    pl: theme.spacing(2),
  };

  function handleStartDateOnChange(event: ChangeEvent<HTMLInputElement>) {
    setStartDate(event.target.value);
  }

  function onChangeRequiresApprovalHandler(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setRequiresApproval(event.target.checked);
  }

  // Render.
  const formInner = (
    <>
      <Tabs
        name="Offering form tabs"
        id="offering-form"
        tabPanelClassName="offering-form-panel"
        ref={tabRef}
      >
        <div title="Offering Details">
          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>General Information</legend>
            <TextField
              autoFocus
              required
              fullWidth
              id="offering-name"
              name="offering-name"
              label="Offering Title"
              defaultValue={defaultName ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              sx={formFieldStyles}
            />
            <TextField
              required
              fullWidth
              multiline
              maxRows={4}
              id="offering-description"
              name="offering-description"
              label="Offering Description"
              defaultValue={defaultDescription ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              sx={formFieldStyles}
            />
            <TextField
              select
              required
              id="offering-type"
              name="offering-type"
              label="Offering Type"
              defaultValue={defaultOfferingType ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              SelectProps={{
                native: true,
              }}
              sx={formFieldStyles}
            >
              {OFFERING_TYPES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              fullWidth
              id="offering-student-selected"
              variant="outlined"
              name="offering-student-selected"
              label="Has a student been selected for this offering?"
              defaultValue={emailStudentSelected}
              sx={formFieldStyles}
            />
            <TextField
              required
              type="number"
              id="offering-max-students"
              name="offering-max-students"
              label="Maximum number of students"
              defaultValue={defaultMaxStudents ?? 0}
              helperText="Use 0 for unlimited"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 1,
                min: 0,
              }}
              sx={formFieldStyles}
            />
            {preferredLanguages && (
              <AutocompleteField
                multiple
                id="offering-preferred-languages"
                name="offering-preferred-languages"
                label="Preferred language(s)"
                options={preferredLanguages}
                selected={defaultPreferredLanguages}
                sx={formFieldStyles}
              />
            )}
            {requiredLanguages && (
              <AutocompleteField
                multiple
                id="offering-required-languages"
                name="offering-required-languages"
                label="Required language(s)"
                options={requiredLanguages}
                selected={defaultRequiredLanguages}
                sx={formFieldStyles}
              />
            )}
            {requirements && (
              <AutocompleteField
                multiple
                id="offering-requirements"
                name="offering-requirements"
                label="Preferred/Required Skills and Knowledge"
                options={requirements}
                selected={defaultRequirements}
                sx={formFieldStyles}
              />
            )}
            {activities && (
              <AutocompleteField
                multiple
                required
                id="offering-activities"
                name="offering-activities"
                label="Activities"
                helptext="Please select the tasks/activities students would be doing for this offering (select all that apply; you can type key words which will then highlight activity options for selection)"
                options={activities}
                selected={defaultActivities}
                sx={formFieldStyles}

              />
            )}
            <TextField
              fullWidth
              multiline
              maxRows={4}
              id="offering-expected-skills"
              name="offering-expected-skills"
              label="Expected Skill Acquisition"
              defaultValue={expectedSkillAcquisition ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              sx={formFieldStyles}
              helperText="Share the skills or knowledge students can expect to gain from this experience (i.e., what are the learning outcomes)."
            />
          </Box>

          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Offering Supervision</legend>
            <Typography sx={formFieldStyles}>
              Only active staff members with an account can be selected.
            </Typography>
            {primaryContacts && (
              <AutocompleteField
                required
                id="offering-primary-contact"
                name="offering-primary-contact"
                label="Primary Contact"
                options={primaryContacts}
                selected={defaultPrimaryContact}
                sx={formFieldStyles}
              />
            )}
            {timeApprovers && (
              <AutocompleteField
                multiple
                required
                id="offering-time-approvers"
                name="offering-time-approvers"
                label="Time Approver(s)"
                options={timeApprovers}
                selected={defaultTimeApprovers}
                sx={formFieldStyles}
              />
            )}
            {formSigners && (
              <AutocompleteField
                multiple
                required
                id="offering-form-signers"
                name="offering-form-signers"
                label="Form Signer(s)"
                options={formSigners}
                selected={defaultFormSigners}
                sx={formFieldStyles}
              />
            )}
            {observers && (
              <AutocompleteField
                multiple
                id="offering-observers"
                name="offering-observers"
                label="Observer(s)"
                options={observers}
                selected={defaultObservers}
                sx={formFieldStyles}
              />
            )}
          </Box>

          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Requirements and Fees</legend>
          </Box>

          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Safety Considerations</legend>
            <FormGroup sx={formFieldStyles}>
              <FormControlLabel
                name="offering-safety-considerations"
                value="known_hazards"
                control={
                  <Checkbox
                    value="known_hazards"
                    onChange={khChangeHandler}
                    checked={isKnownHazards}
                  />
                }
                label="Known Hazards"
              />
              <FormControlLabel
                name="offering-safety-considerations"
                value="population_served"
                control={
                  <Checkbox
                    value="population_served"
                    onChange={psChangeHandler}
                    checked={isPopulationServed}
                  />
                }
                label="Population Served"
              />
              <FormControlLabel
                name="offering-safety-considerations"
                value="site_location"
                control={
                  <Checkbox
                    value="site_location"
                    onChange={slChangeHandler}
                    checked={isSiteLocation}
                  />
                }
                label="Site Location"
              />
              <FormControlLabel
                name="offering-safety-considerations"
                value="supervision"
                control={
                  <Checkbox
                    value="supervision"
                    onChange={supervisionChangeHandler}
                    checked={isSupervision}
                  />
                }
                label="Supervision"
              />
            </FormGroup>

            <Box display={isKnownHazards ? 'block' : 'none'}>
              <TextField
                fullWidth
                multiline
                maxRows={4}
                id="offering-known-hazards-comments"
                name="offering-known-hazards-comments"
                label="Known Hazards comments"
                defaultValue={knownHazardsComments ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={formFieldStyles}
              />
            </Box>
            <Box display={isPopulationServed ? 'block' : 'none'}>
              <TextField
                fullWidth
                multiline
                maxRows={4}
                id="offering-population-served-comments"
                name="offering-population-served-comments"
                label="Population Served comments"
                defaultValue={populationServedComments ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={formFieldStyles}
              />
            </Box>
            <Box display={isSiteLocation ? 'block' : 'none'}>
              <TextField
                fullWidth
                multiline
                maxRows={4}
                id="offering-site-location-comments"
                name="offering-site-location-comments"
                label="Site Location comments"
                defaultValue={siteLocationComments ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={formFieldStyles}
              />
            </Box>
            <Box display={isSupervision ? 'block' : 'none'}>
              <TextField
                fullWidth
                multiline
                maxRows={4}
                id="offering-supervision-comments"
                name="offering-supervision-comments"
                label="Supervision comments"
                defaultValue={supervisionComments ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={formFieldStyles}
              />
            </Box>
            <Typography component="p" sx={hlpText}>
              Please select any health and safety considerations associated with this offering; you may be required to provide additional information based on your selections. This information will be shared with students.
            </Typography>
            <Typography component="ul" sx={hlpText}>
              <li>
                <strong>KNOWN HAZARDS</strong>: This offering requires working with hazardous materials, heavy equipment, construction equipment, heights, or heavy machinery.
              </li>
              <li>
                <strong>POPULATION SERVED</strong>: Students may be working unsupervised with minors.
              </li>
              <li>
                <strong>POPULATION SERVED</strong>: Students may be working with behaviorally challenged populations.
              </li>
              <li>
                <strong>POPULATION SERVED</strong>: Students may be working with individuals who pose an elevated risk of harm or injury to them?
              </li>
              <li>
                <strong>SITE LOCATION</strong>: Parking and work areas may not be secure or adequately illuminated.
              </li>
              <li>
                <strong>SITE LOCATION</strong>: There have been incidents of criminal activity at the organization or site(s) within the last year. Or, the location would be described as a high-crime area.
              </li>
              <li>
                <strong>SUPERVISION</strong>: Students may be required to work at night (after 6pm). Or, students may be supervised less than 50% of the time or the supervisor will be overseeing more than 8 people.
              </li>
              <li>
                None of the above options apply
              </li>
            </Typography>
          </Box>

          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Application Process</legend>
            <FormControlLabel
              control={
                <Switch
                  checked={requiresApproval}
                  onChange={onChangeRequiresApprovalHandler}
                  id="offering-requires-approval"
                  name="offering-requires-approval"
                />
              }
              label="Requires approval"
              sx={formFieldStyles}
            />

            {requiresApproval && (
              <TextField
                required
                fullWidth
                multiline
                maxRows={4}
                id="offering-application-instructions"
                name="offering-application-instructions"
                label="Application Instructions"
                defaultValue={defaultApplicationInstructions ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={formFieldStyles}
              />
            )}

            {departments && (
              <AutocompleteField
                id="offering-department"
                name="offering-department"
                label="Department"
                options={departments}
                selected={defaultDepartment}
                sx={formFieldStyles}
              />
            )}


            <FormControlLabel
              control={
                <Switch
                  id="offering-published"
                  name="offering-published"
                  defaultChecked={defaultPublished}
                />
              }
              label="Published"
              sx={formFieldStyles}
            />
          </Box>
        </div>
        <div title="Time & Compensation">
          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Offering Availability</legend>
            <Box component="fieldset" sx={fieldSetStyles}>
              <legend>Offering Dates</legend>
              <TextField
                required
                type="date"
                id="offering-start-date"
                name="offering-start-date"
                label="Start date"
                onChange={handleStartDateOnChange}
                defaultValue={defaultStartDate ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  pattern: 'd{4}-d{2}-d{2}',
                }}
                sx={formFieldStyles}
              />

              {startDate && (
                <TextField
                  required
                  type="date"
                  id="offering-end-date"
                  name="offering-end-date"
                  label="End date"
                  defaultValue={defaultEndDate ?? undefined}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    min: startDate,
                    pattern: 'd{4}-d{2}-d{2}',
                  }}
                  sx={formFieldStyles}
                />
              )}
            </Box>
            <TextField
              required
              type="number"
              id="offering-time-amount"
              name="offering-time-amount"
              label="Time Commitment"
              defaultValue={defaultTimeAmount ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 0.1,
                min: 1,
              }}
              sx={formFieldStyles}
            />
            <TextField
              select
              required
              id="offering-time-unit"
              name="offering-time-unit"
              label="Unit of time"
              defaultValue={defaultTimeUnit ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              SelectProps={{
                native: true,
              }}
              sx={formFieldStyles}
            >
              {OFFERING_TIME_UNITS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              select
              required
              id="offering-time-frequency"
              name="offering-time-frequency"
              label="Hours Frequency"
              defaultValue={defaultTimeFrequency ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              SelectProps={{
                native: true,
              }}
              sx={{ mb: theme.spacing(3), maxWidth: '13rem' }}
            >
              {OFFERING_TIME_FREQUENCY.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Box>
          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Compensation</legend>
            <TextField
              select
              required
              id="offering-pay-type"
              name="offering-pay-type"
              label="Pay Type"
              defaultValue={defaultPayType ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              SelectProps={{
                native: true,
              }}
              sx={formFieldStyles}
            >
              {PAY_TYPE.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              select
              required
              id="offering-pay-frequency"
              name="offering-pay-frequency"
              label="Pay Frequency"
              defaultValue={defaultPayFrequency ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              SelectProps={{
                native: true,
              }}
              sx={formFieldStyles}
            >
              {PAY_FREQUENCY.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Box>

        </div>
        <div title="Additional Information">
          <AddressField id="offering" address={address} mb={3} />
          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Focus Population and Areas</legend>
            {focusPopulations && (
              <AutocompleteField
                multiple
                required
                id="offering-focus-populations"
                name="offering-focus-populations"
                label="Focus Population(s)"
                options={focusPopulations}
                selected={defaultFocusPopulations}
                sx={formFieldStyles}
                helptext="Please indicate primary population/clientele your organization will serve either directly or indirectly as part of this offering. If you're unsure, select 'Non-specific/any population' (select all that apply)."
              />
            )}

            {focusAreas && (
              <AutocompleteField
                multiple
                required
                id="offering-focus-areas"
                name="offering-focus-areas"
                label="Focus Area(s)"
                options={focusAreas}
                selected={defaultFocusAreas}
                sx={formFieldStyles}
                helptext="Please identify the general focus area(s) pertaining to this offering (select all that apply)."
              />
            )}

            {subFocusAreas && (
              <AutocompleteField
                multiple
                id="offering-sub-focus-areas"
                name="offering-sub-focus-areas"
                label="Sub focus Area(s)"
                options={subFocusAreas}
                selected={defaultSubFocusAreas}
                sx={formFieldStyles}
                helptext="For the focus area(s) identified above, please select any subcategories that apply. (Note: not all areas have subcategories)."
              />
            )}
          </Box>
        </div>
      </Tabs>

      <Box sx={actionButtonsContainerStyles}>
        <Button
          variant="contained"
          type="submit"
          sx={{ flexShrink: 0 }}
          onClick={(event) =>
            onClickHandler(event, 'offering-form-panel', tabRef)
          }
        >
          {isEdit ? 'Update' : 'Create'} offering
        </Button>

        {isEdit && cancelUrl && duplidateUr && (
          <>
            <Button
              variant="contained"
              component={Link}
              href={duplidateUr}
              sx={{ flexShrink: 0 }}
            >
              Duplicate offering
            </Button>
            <Button
              variant="outlined"
              component={Link}
              href={cancelUrl}
              sx={{ flexShrink: 0 }}
            >
              Cancel
            </Button>
          </>
        )}
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
      <Breadcrumbs items={breadcrumb} />
      <Typography variant="h1" sx={titleStyles}>
        {isEdit ? 'Edit' : 'Create an'} offering
      </Typography>
      <Paper sx={paperStyles}>{form}</Paper>
    </article>
  );
}
