import {
  Box,
  Button,
  Checkbox,
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
  ReactNode,
  SyntheticEvent,
  useState,
} from 'react';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';

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
  departments?: {
    id: string;
    name: string;
  }[];
  focousPopulations?: {
    id: string;
    name: string;
  }[];
  focousAreas?: {
    id: string;
    name: string;
  }[];
  subFocusAreas?: {
    id: string;
    name: string;
  }[];
  activities?: {
    id: string;
    name: string;
  }[];
  FormElement?: ElementType;
  defaultName?: string;
  defaultRequiresApproval?: boolean;
  defaultDepartment?: string;
  defaultOfferingType?: string;
  defaultMaxStudents?: number;
  defaultStartDate?: string;
  defaultEndDate?: string;
  defaultDescription?: string;
  defaultTraining?: string;
  defaultFocusPopulations?: string[];
  defaultFocusAreas?: string[];
  defaultSubFocusAreas?: string[];
  defaultActivities?: string[];
  defaultTimeAmount?: number;
  defaultTimeUnit?: string;
  defaultTimeFrequency?: string;
};

type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
};

type MultipleSelectNames =
  | 'focusPopulations'
  | 'focusAreas'
  | 'subFocusAreas'
  | 'activities';

function TabPanel(props: TabPanelProps) {
  const theme = useTheme();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`offering-form-tabpanel-${index}`}
      aria-labelledby={`offering-form-tab-${index}`}
      {...other}
    >
      <Box
        sx={{ p: theme.spacing(3), display: 'flex', flexDirection: 'column' }}
      >
        {children}
      </Box>
    </div>
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
  departments,
  focousPopulations,
  focousAreas,
  subFocusAreas,
  activities,
  FormElement,
  defaultName,
  defaultRequiresApproval,
  defaultDepartment,
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
}: OfferingFormProps) {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [selectedFocusPopulations, setSelectedFocusPopulations] = useState(
    defaultFocusPopulations,
  );
  const [selectedFocusAreas, setSelectedFocusAreas] =
    useState(defaultFocusAreas);
  const [selectedSubFocusAreas, setSelectedSubFocusAreas] =
    useState(defaultSubFocusAreas);
  const [selectedActivities, setSelectedActivities] =
    useState(defaultActivities);

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

  function handleTabChange(event: SyntheticEvent, tabIndex: number) {
    setActiveTab(tabIndex);
  }

  function handleStartDateChange(event: ChangeEvent<HTMLInputElement>) {
    setStartDate(event.target.value);
  }

  function handleMultipleSelectChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { options } = event.target as unknown as HTMLSelectElement;
    const selectedValues: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    return selectedValues;
  }

  // Render.
  const formInner = (
    <>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="Offering form tabs"
      >
        <Tab label="Metadata" {...a11yProps(0)} />
        <Tab label="Content" {...a11yProps(1)} />
        <Tab label="Focus" {...a11yProps(2)} />
        <Tab label="Time commitment" {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={activeTab} index={0}>
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
          sx={{ mb: theme.spacing(3) }}
        />

        <FormControlLabel
          control={<Checkbox defaultChecked={defaultRequiresApproval} />}
          label="Requires approval"
          sx={{ mb: theme.spacing(3) }}
        />

        {departments && (
          <TextField
            select
            id="offering-deparment"
            name="offering-department"
            label="Deparment"
            defaultValue={defaultDepartment ?? undefined}
            InputLabelProps={{
              shrink: true,
            }}
            SelectProps={{
              native: true,
            }}
            sx={{ mb: theme.spacing(3), maxWidth: '13rem' }}
          >
            <option value="">Select a value</option>
            {departments.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </TextField>
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
          sx={{ mb: theme.spacing(3), maxWidth: '13rem' }}
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
          sx={{ mb: theme.spacing(3), maxWidth: '13rem' }}
        />

        <TextField
          required
          type="date"
          id="offering-start-date"
          name="offering-start-date"
          label="Start date"
          onChange={handleStartDateChange}
          defaultValue={defaultStartDate ?? undefined}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            pattern: 'd{4}-d{2}-d{2}',
          }}
          sx={{ mb: theme.spacing(3), maxWidth: '13rem' }}
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
            sx={{ mb: theme.spacing(3), maxWidth: '13rem' }}
          />
        )}
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
          sx={{ mb: theme.spacing(3) }}
        />

        <TextField
          required
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
          sx={{ mb: theme.spacing(3) }}
        />
      </TabPanel>

      <TabPanel value={activeTab} index={2}>
        {focousPopulations && (
          <TextField
            select
            required
            value={selectedFocusPopulations}
            id="offering-focus-populations"
            name="offering-focus-populations"
            label="Focus Population(s)"
            defaultValue={defaultFocusPopulations ?? undefined}
            onChange={(event) =>
              setSelectedFocusPopulations(handleMultipleSelectChange(event))
            }
            InputLabelProps={{
              shrink: true,
            }}
            SelectProps={{
              native: true,
              multiple: true,
            }}
            sx={{ mb: theme.spacing(3), maxWidth: '13rem' }}
          >
            {focousPopulations.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </TextField>
        )}

        {focousAreas && (
          <TextField
            select
            required
            value={selectedFocusAreas}
            id="offering-focus-areas"
            name="offering-focus-areas"
            label="Focus Area(s)"
            defaultValue={defaultFocusAreas ?? undefined}
            onChange={(event) =>
              setSelectedFocusAreas(handleMultipleSelectChange(event))
            }
            InputLabelProps={{
              shrink: true,
            }}
            SelectProps={{
              native: true,
              multiple: true,
            }}
            sx={{ mb: theme.spacing(3), maxWidth: '13rem' }}
          >
            {focousAreas.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </TextField>
        )}

        {subFocusAreas && (
          <TextField
            select
            value={selectedSubFocusAreas}
            id="offering-sub-focus-areas"
            name="offering-sub-focus-areas"
            label="Sub focus Area(s)"
            defaultValue={defaultSubFocusAreas ?? undefined}
            onChange={(event) =>
              setSelectedSubFocusAreas(handleMultipleSelectChange(event))
            }
            InputLabelProps={{
              shrink: true,
            }}
            SelectProps={{
              native: true,
              multiple: true,
            }}
            sx={{ mb: theme.spacing(3), maxWidth: '13rem' }}
          >
            {subFocusAreas.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </TextField>
        )}

        {activities && (
          <TextField
            select
            required
            value={selectedActivities}
            id="offering-activities"
            name="offering-activities"
            label="Activities"
            defaultValue={defaultActivities ?? undefined}
            onChange={(event) =>
              setSelectedActivities(handleMultipleSelectChange(event))
            }
            InputLabelProps={{
              shrink: true,
            }}
            SelectProps={{
              native: true,
              multiple: true,
            }}
            sx={{ mb: theme.spacing(3), maxWidth: '13rem' }}
          >
            {activities.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </TextField>
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
          sx={{ mb: theme.spacing(3), maxWidth: '13rem' }}
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
          sx={{ mb: theme.spacing(3), maxWidth: '13rem' }}
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

      <Button variant="contained" type="submit">
        Create offering
      </Button>
    </>
  );

  const form = FormElement ? (
    <FormElement>{formInner}</FormElement>
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
