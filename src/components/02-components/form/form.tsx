import { Box, Button, useTheme } from '@mui/material';
import { ElementType } from 'react';
import Link from '../../01-elements/link/link';
import AutocompleteField, {
  type AutocompleteOptionType,
} from '../autocomplete-field/autocomplete-field';

type Control = {
  id: string;
  label: string;
  name: string;
  options: AutocompleteOptionType[];
  defaultValue?: string;
};

export type ExposedFormProps = {
  controls: Control[];
  FormElement?: ElementType;
  resetUrl: string;
};

export default function ExposedForm({
  controls,
  FormElement,
  resetUrl,
}: ExposedFormProps) {
  const theme = useTheme();

  const formItemStyles = {
    mb: theme.spacing(2),
    display: 'flex',
    minWidth: '12rem',
    [theme.breakpoints.up('sm')]: {
      display: 'inline-flex',
      mr: theme.spacing(2),
    },
  };

  const formStyles = {
    mb: theme.spacing(4),
  };

  const renderedControls = controls.map((control) => (
    <AutocompleteField
      key={control.id}
      id={control.id}
      name={control.name}
      label={control.label}
      options={control.options}
      selected={control.defaultValue}
      sx={formItemStyles}
    />
  ));

  const formInner = (
    <>
      {renderedControls}
      <Button variant="contained" type="submit">
        Apply Filters
      </Button>
      <Button
        variant="outlined"
        type="reset"
        component={Link}
        href={resetUrl}
        sx={{ ml: 2 }}
      >
        Reset Filters
      </Button>
    </>
  );

  const form = FormElement ? (
    <FormElement>{formInner}</FormElement>
  ) : (
    <form>{formInner}</form>
  );

  return <Box sx={formStyles}>{form}</Box>;
}
