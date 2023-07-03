import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Paper,
  Select,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ElementType } from 'react';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
type OfferingFormProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  title: string;
  FormElement?: ElementType;
};

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

export default function OfferingForm({
  breadcrumb,
  title,
  FormElement,
}: OfferingFormProps) {
  const theme = useTheme();

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

  // Render.
  const formInner = (
    <>
      <TextField
        autoFocus
        required
        fullWidth
        id="offering-name"
        name="offering-name"
        label="Offering name"
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ mb: theme.spacing(3) }}
      />

      <TextField
        select
        required
        id="offering-type"
        name="offering-type"
        label="Offering Type"
        InputLabelProps={{
          shrink: true,
        }}
        SelectProps={{
          native: true,
        }}
        sx={{ mb: theme.spacing(3), minWidth: '7rem' }}
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
        label="Amount"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 1,
          min: 1,
        }}
        sx={{ mb: theme.spacing(3), minWidth: '13rem' }}
      />

      <TextField
        required
        type="date"
        id="offering-start-date"
        name="offering-start-date"
        label="Start date"
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ mb: theme.spacing(3), minWidth: '13rem' }}
      />

      <TextField
        required
        type="date"
        id="offering-end-date"
        name="offering-end-date"
        label="End date"
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ mb: theme.spacing(3), minWidth: '13rem' }}
      />

      <TextField
        required
        fullWidth
        multiline
        maxRows={4}
        id="offering-description"
        name="offering-description"
        label="Offering description"
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
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ mb: theme.spacing(3) }}
      />

      <TextField
        required
        type="number"
        id="offering-time-amount"
        name="offering-time-amount"
        label="Time Amount"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 0.1,
          min: 1,
        }}
        sx={{ mb: theme.spacing(3), minWidth: '13rem' }}
      />

      <TextField
        select
        required
        id="offering-time-unit"
        name="offering-time-unit"
        label="Unit of time"
        InputLabelProps={{
          shrink: true,
        }}
        SelectProps={{
          native: true,
        }}
        sx={{ mb: theme.spacing(3) }}
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
        InputLabelProps={{
          shrink: true,
        }}
        SelectProps={{
          native: true,
        }}
        sx={{ mb: theme.spacing(3) }}
      >
        {OFFERING_TIME_FREQUENCY.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>

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
