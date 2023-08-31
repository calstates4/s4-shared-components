import { ElementType } from 'react';
import Link from '../../01-elements/link/link';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  useTheme,
} from '@mui/material';

interface Control {
  id: string;
  label: string;
  name: string;
  options?: { id: string; name: string }[];
  defaultValue?: string;
}

export interface ExposedFormProps {
  controls: Control[];
  FormElement?: ElementType;
  resetUrl: string;
}

export default function ExposedForm({
  controls,
  FormElement,
  resetUrl,
}: ExposedFormProps) {
  const theme = useTheme();

  const formItemStyles = {
    mb: theme.spacing(2),
    display: 'flex',
    minWidth: '8rem',
    [theme.breakpoints.up('sm')]: {
      display: 'inline-flex',
      mb: 0,
      mr: theme.spacing(2),
    },
  };

  const formStyles = {
    mb: theme.spacing(4),
  };

  const formInner = (
    <>
      {controls.map((control) =>
        control.options ? (
          <FormControl size="small" sx={formItemStyles} key={control.id}>
            <InputLabel id={`${control.name}-select-label`}>
              {control.label}
            </InputLabel>
            <Select
              labelId={`${control.name}-select-label`}
              label={control.label}
              native={true}
              name={control.name}
              defaultValue={control.defaultValue || ''}
            >
              {control.options.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </Select>
          </FormControl>
        ) : null
      )}
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
