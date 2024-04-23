import { Autocomplete, TextField } from '@mui/material';
import { type SyntheticEvent, useState, useEffect } from 'react';

export type AutocompleteDependencyOptionType = {
  id: string;
  label: string;
  key?: string;
};

type AutocompleteDependecyFieldProps = {
  id: string;
  label: string;
  name: string;
  helptext?: string;
  options: AutocompleteDependencyOptionType[];
  multiple?: boolean;
  selected?: string | string[] | null;
  required?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx?: any;

  id2: string;
  label2: string;
  name2: string;
  helptext2?: string;
  options2: AutocompleteDependencyOptionType[];
  multiple2?: boolean;
  selected2?: string | string[] | null;
  required2?: boolean;
};

export default function AutocompletesDependecyFields({
  id,
  name,
  label,
  helptext,
  options,
  multiple = false,
  selected = null,
  required = false,
  sx,

  id2,
  name2,
  label2,
  helptext2,
  options2,
  multiple2 = false,
  selected2 = null,
  required2 = false,
}: AutocompleteDependecyFieldProps) {
  const [value, setValue] = useState<AutocompleteDependencyOptionType | AutocompleteDependencyOptionType[] | null>(
    multiple ? [] : null
  );

  const [value2, setValue2] = useState<AutocompleteDependencyOptionType | AutocompleteDependencyOptionType[] | null>(
    multiple2 ? [] : null
  );

  useEffect(() => {
    if (selected) {
      if (multiple)
        setValue(options.filter((item) => selected.includes(item.id)));
      else setValue(options.find((item) => item.id === selected) ?? null);
    } else {
      setValue(multiple ? [] : null);
    }
  }, [selected, multiple, options]);

  useEffect(() => {
    if (!multiple2 && value && !Array.isArray(value)) {
      const option = options2.find((item) => item.id === value.id);
      setValue2(option ? [option] : null);
    }
  }, [value, multiple2, options2]);

  useEffect(() => {
    if (selected2) {
      setValue2(options2.filter((item) => selected2.includes(item.id)));
    } else {
      setValue2(multiple2 ? [] : null);
    }
  }, [selected2, multiple2, options2]);

  useEffect(() => {
    const valueString = value
      ? Array.isArray(value)
        ? value.map((item) => item.id).join(',')
        : value.id
      : '';
    const valueString2 = value2
      ? Array.isArray(value2)
        ? value2.map((item) => item.id).join(',')
        : value2.id
      : '';
    const input1 = document.getElementById(`hidden-${id}`) as HTMLInputElement;
    const input2 = document.getElementById(`hidden-${id2}`) as HTMLInputElement;
    input1.value = valueString;
    input2.value = valueString2;
  }, [value, value2, id, id2]);

  function onChangeHandler(
    event: SyntheticEvent,
    value: AutocompleteDependencyOptionType | AutocompleteDependencyOptionType[] | null,
    inputType: string
  ) {
    if (inputType === 'first') {
      setValue(value);

      if (!value) {
        setValue2(multiple2 ? [] : null);
      }
    } else {
      setValue2(value);
    }
  }

  let valueString, valueString2 = '';

  if (value) {
    if (Array.isArray(value)) {
      valueString = value.map((item) => item.id).join(',');
    } else if ('id' in value) {
      valueString = value.id;
    }
  }

  if (value2) {
    if (Array.isArray(value2)) {
      valueString2 = value2.map((item) => item.id).join(',');
    } else if ('id' in value2) {
      valueString2 = value2.id;
    }
  }

  return (
    <>
      <Autocomplete
        id={id}
        multiple={multiple}
        options={options}
        getOptionLabel={(option) => option.label}
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
          option: AutocompleteDependencyOptionType,
          value: AutocompleteDependencyOptionType,
        ) => option.id === value.id}
        value={value}
        onChange={(event, value) => onChangeHandler(event, value, 'first')}
        sx={sx}
      />
      <input type="hidden" name={name} value={valueString} id={`hidden-${id}`} />
      <Autocomplete
        id={id2}
        multiple={multiple2}
        options={value ? (Array.isArray(value) ? value : [value]) : []}
        getOptionLabel={(option) => option?.label ?? ""}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label2}
            inputProps={{
              ...params.inputProps,
              required: required2
                ? (Array.isArray(value2) && value2.length === 0) || value2 == null
                : false,
            }}
            required={required2}
            helperText={helptext2}
          />
        )}
        isOptionEqualToValue={(
          option: AutocompleteDependencyOptionType,
          value: AutocompleteDependencyOptionType,
        ) => option.id === value.id}
        value={value2}
        onChange={(event, value) => onChangeHandler(event, value, 'second')}
        filterOptions={(options) => {
          const filtered = options.filter((option) => {
            if (value) {
              const selectedIds = Array.isArray(value) ? value.map((v) => v.id) : [value.id];
              return selectedIds.includes(option.id);
            }
            return false;
          });

          return filtered;
        }}
        sx={{ mt: 2, ...sx }}
      />
      <input type="hidden" name={name2} value={valueString2} id={`hidden-${id2}`} />
    </>
  );
}
