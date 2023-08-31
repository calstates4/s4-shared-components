import React, { ElementType } from 'react';
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
}

export interface ExposedFormProps {
  controls: Control[];
  FormElement?: ElementType;
  onSubmit: () => void;
  onReset: () => void;
}

export default function ExposedForm({
  controls,
  FormElement,
  onSubmit,
  onReset,
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
              defaultValue=""
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
      <Button variant="contained" type="submit" onClick={onSubmit}>
        Apply Filters
      </Button>
      <Button variant="outlined" onClick={onReset} sx={{ ml: 2 }}>
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
