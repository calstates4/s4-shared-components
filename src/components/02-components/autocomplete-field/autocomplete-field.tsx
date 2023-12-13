import { Autocomplete, TextField } from '@mui/material';
import { type SyntheticEvent, useState, useEffect } from 'react';

export type AutocompleteOptionType = {
  id: string;
  label: string;
};

type AutocompleteFieldProps = {
  id: string;
  label: string;
  name: string;
  helptext?: string;
  options: AutocompleteOptionType[];
  multiple?: boolean;
  selected?: string | string[] | null;
  required?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx?: any;
};

export default function AutocompleteField({
  id,
  name,
  label,
  helptext,
  options,
  multiple = false,
  selected = null,
  required = false,
  sx,
}: AutocompleteFieldProps) {
  const [value, setValue] = useState<
    AutocompleteOptionType | AutocompleteOptionType[] | null
  >(multiple ? [] : null);

  useEffect(() => {
    if (selected) {
      if (multiple)
        setValue(options.filter((item) => selected.includes(item.id)));
      else setValue(options.find((item) => item.id === selected) ?? null);
    } else {
      setValue(multiple ? [] : null);
    }
  }, [selected, multiple, options, setValue]);

  function onChangeHandler(
    event: SyntheticEvent,
    value: AutocompleteOptionType | AutocompleteOptionType[] | null,
  ) {
    setValue(value);
  }

  let valueString = '';

  if (value) {
    if (Array.isArray(value)) {
      valueString = value.map((item) => item.id).join(',');
    } else if ('id' in value) {
      valueString = value.id;
    }
  }

  return (
    <>
      <Autocomplete
        id={id}
        multiple={multiple}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            inputProps={{
              ...params.inputProps,
              required: required
                ? (Array.isArray(value) && value.length === 0) || value == null
                : false,
            }}
            required={required}
            helperText={helptext}
          />
          )}
        isOptionEqualToValue={(
          option: AutocompleteOptionType,
          value: AutocompleteOptionType,
        ) => option.id === value.id}
        value={value}
        onChange={onChangeHandler}
        sx={sx}
      />
      <input type="hidden" name={name} value={valueString} />
    </>
  );
}
