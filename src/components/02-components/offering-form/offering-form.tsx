import {
  Box,
  Button,
  Switch,
  FormControlLabel,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import {
  ChangeEvent,
  ElementType,
  FormEvent,
  ReactNode,
  SyntheticEvent,
  useState,
} from 'react';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import AddressField, { type AddressType } from '../address-field/address-field';
import AutocompleteField, {
  AutocompleteOptionType,
} from '../autocomplete-field/autocomplete-field';

const OFFERING_TYPES = [
  { value: 'on-site', label: 'On-site' },
  { value: 'remote', label: 'Remote' },
  { value: 'hybrid', label: 'Hybrid' },
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

export type OfferingFormProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  title: string;
  id: string | number;
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
  FormElement?: ElementType;
  submitButtonText: string;
  defaultName?: string;
  defaultRequiresApproval?: boolean;
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
  defaultTraining?: string;
  defaultFocusPopulations?: string[];
  defaultFocusAreas?: string[];
  defaultSubFocusAreas?: string[];
  defaultActivities?: string[];
  defaultTimeAmount?: number;
  defaultTimeUnit?: string;
  defaultTimeFrequency?: string;
  defaultPublished?: boolean;
  formSubmit?: () => void;
};

type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
};

function TabPanel(props: TabPanelProps) {
  const theme = useTheme();
  const { children, value, index, ...other } = props;

  return (
    <Box
      data-index={index}
      className="form-tab"
      role="tabpanel"
      hidden={value !== index}
      id={`offering-form-tabpanel-${index}`}
      aria-labelledby={`offering-form-tab-${index}`}
      sx={{ p: theme.spacing(3) }}
      {...other}
    >
      {children}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `offering-form-tab-${index}`,
    'aria-controls': `offering-form-tabpanel-${index}`,
  };
}

export default function OfferingForm({
  breadcrumb,
  title,
  id,
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
  FormElement,
  submitButtonText,
  defaultName,
  defaultRequiresApproval,
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
  defaultTraining,
  defaultFocusPopulations,
  defaultFocusAreas,
  defaultSubFocusAreas,
  defaultActivities,
  defaultTimeAmount,
  defaultTimeUnit,
  defaultTimeFrequency,
  defaultPublished,
}: OfferingFormProps) {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [startDate, setStartDate] = useState(defaultStartDate);

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

  function handleTabOnChange(event: SyntheticEvent, value: number) {
    setActiveTab(value);
  }

  function handleStartDateOnChange(event: ChangeEvent<HTMLInputElement>) {
    setStartDate(event.target.value);
  }

  function onClickHandler(event: FormEvent<HTMLButtonElement>) {
    const form = event.currentTarget.closest('form');
    if (form && form.elements.length) {
      for (let i = 0; i < form?.elements.length; i++) {
        const element = form.elements[i] as HTMLInputElement;
        if (element && !element.checkValidity()) {
          const tab = element.closest('.form-tab');
          if (tab) {
            const tabIndex = tab.getAttribute('data-index');
            if (tabIndex) {
              setActiveTab(parseInt(tabIndex));
              break;
            }
          }
        }
      }
    }
  }

  // Render.
  const formInner = (
    <>
      <Tabs
        value={activeTab}
        onChange={handleTabOnChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="Offering form tabs"
      >
        <Tab label="Metadata" {...a11yProps(0)} />
        <Tab label="Content" {...a11yProps(1)} />
        <Tab label="Focus" {...a11yProps(2)} />
        <Tab label="Time commitment" {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={activeTab} index={0}>
        <input name="offering-id" type="hidden" value={id} />
        <TextField
          autoFocus
          required
          fullWidth
          id="offering-name"
          name="offering-name"
          label="Offering name"
          defaultValue={defaultName ?? undefined}
          InputLabelProps={{
            shrink: true,
          }}
          sx={formFieldStyles}
        />

        <FormControlLabel
          control={
            <Switch
              id="offering-requires-approval"
              name="offering-requires-approval"
              defaultChecked={defaultRequiresApproval}
            />
          }
          label="Requires approval"
          sx={formFieldStyles}
        />

        {departments && (
          <AutocompleteField
            id="offering-deparment"
            name="offering-deparment"
            label="Department"
            options={departments}
            selected={defaultDepartment}
            sx={{ mb: theme.spacing(3) }}
          />
        )}

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
          required
          type="number"
          id="offering-max-students"
          name="offering-max-students"
          label="Maximum number of students"
          defaultValue={defaultMaxStudents ?? undefined}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 1,
            min: 1,
          }}
          sx={formFieldStyles}
        />

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

        <AddressField address={address} mb={3} />

        {primaryContacts && (
          <AutocompleteField
            required
            id="offering-primary-contact"
            name="offering-primary-contact"
            label="Primary contact"
            options={primaryContacts}
            selected={defaultPrimaryContact}
            sx={{ mb: theme.spacing(3) }}
          />
        )}

        {timeApprovers && (
          <AutocompleteField
            multiple
            required
            id="offering-time-approvers"
            name="offering-time-approvers"
            label="Time approver(s)"
            options={timeApprovers}
            selected={defaultTimeApprovers}
            sx={{ mb: theme.spacing(3) }}
          />
        )}

        {formSigners && (
          <AutocompleteField
            multiple
            required
            id="offering-form-signers"
            name="offering-form-signers"
            label="Form sirner(s)"
            options={formSigners}
            selected={defaultFormSigners}
            sx={{ mb: theme.spacing(3) }}
          />
        )}
        {observers && (
          <AutocompleteField
            multiple
            required
            id="offering-observers"
            name="offering-observers"
            label="Observer(s)"
            options={observers}
            selected={defaultObservers}
            sx={{ mb: theme.spacing(3) }}
          />
        )}
        {preferredLanguages && (
          <AutocompleteField
            multiple
            id="offering-preferred-languages"
            name="offering-preferred-languages"
            label="Preferred langauge(s)"
            options={preferredLanguages}
            selected={defaultPreferredLanguages}
            sx={{ mb: theme.spacing(3) }}
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
            sx={{ mb: theme.spacing(3) }}
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
      </TabPanel>

      <TabPanel value={activeTab} index={1}>
        <TextField
          required
          fullWidth
          multiline
          maxRows={4}
          id="offering-description"
          name="offering-description"
          label="Offering description"
          defaultValue={defaultDescription ?? undefined}
          InputLabelProps={{
            shrink: true,
          }}
          sx={formFieldStyles}
        />

        <TextField
          fullWidth
          multiline
          maxRows={4}
          id="offering-training"
          name="offering-training"
          label="Offering training"
          defaultValue={defaultTraining ?? undefined}
          InputLabelProps={{
            shrink: true,
          }}
          sx={formFieldStyles}
        />
      </TabPanel>

      <TabPanel value={activeTab} index={2}>
        {focusPopulations && (
          <AutocompleteField
            multiple
            required
            id="offering-focus-populations"
            name="offering-focus-populations"
            label="Focus Population(s)"
            options={focusPopulations}
            selected={defaultFocusPopulations}
            sx={{ mb: theme.spacing(3) }}
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
            sx={{ mb: theme.spacing(3) }}
          />
        )}

        {subFocusAreas && (
          <AutocompleteField
            multiple
            required
            id="offering-sub-focus-areas"
            name="offering-sub-focus-areas"
            label="Sub focus Area(s)"
            options={subFocusAreas}
            selected={defaultSubFocusAreas}
            sx={{ mb: theme.spacing(3) }}
          />
        )}

        {activities && (
          <AutocompleteField
            multiple
            required
            id="offering-activities"
            name="offering-activities"
            label="Activities"
            options={activities}
            selected={defaultActivities}
            sx={{ mb: theme.spacing(3) }}
          />
        )}
      </TabPanel>

      <TabPanel value={activeTab} index={3}>
        <TextField
          required
          type="number"
          id="offering-time-amount"
          name="offering-time-amount"
          label="Time Amount"
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
          label="Frequency"
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
      </TabPanel>

      <Button variant="contained" type="submit" onClick={onClickHandler}>
        {submitButtonText}
      </Button>
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
        {title}
      </Typography>
      <Paper sx={paperStyles}>{form}</Paper>
    </article>
  );
}
