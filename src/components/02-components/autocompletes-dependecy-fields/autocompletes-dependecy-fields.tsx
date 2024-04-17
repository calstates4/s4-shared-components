import { Autocomplete, TextField } from '@mui/material';
import { type SyntheticEvent, useState, useEffect } from 'react';
import {element} from "prop-types";

export type AutocompleteOptionType = {
  id: string;
  label: string;
  key?: string;
};

type AutocompleteDependecyFieldProps = {
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

  id2: string;
  label2: string;
  name2: string;
  helptext2?: string;
  options2: AutocompleteOptionType[];
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
  const [value, setValue] = useState<
    AutocompleteOptionType | AutocompleteOptionType[] | null
  >(multiple ? [] : null);

  const [value2, setValue2] = useState<
    AutocompleteOptionType | AutocompleteOptionType[] | null
    >(multiple2 ? [] : null);

  useEffect(() => {
    if (selected) {
      if (multiple)
        setValue(options.filter((item) => selected.includes(item.id)));
      else setValue(options.find((item) => item.id === selected) ?? null);
    } else {
      setValue(multiple ? [] : null);
    }

    if (selected2) {
      if (multiple2)
        setValue(options2.filter((item) => selected2.includes(item.id)));
      else setValue(options2.find((item) => item.id === selected2) ?? null);
    } else {
      setValue(multiple2 ? [] : null);
    }

  }, [selected, multiple, options, setValue, selected2, multiple2, options2, setValue2]);

  function onChangeHandler(
    event: SyntheticEvent,
    value: AutocompleteOptionType | AutocompleteOptionType[] | null,
  ) {
    setValue(value);
  }

  const filterOP = (options:any, state:any) => {
    const opts:any[] = [];
    options.forEach((element: any) => {
      if (element.key) {
        if (element.key
          .replace(",", "")
          .toLowerCase()
          .includes(state.inputValue.toLowerCase()) ||
          element.label
            .replace(",", "")
            .toLowerCase()
            .includes(state.inputValue.toLowerCase())
        ) {
          opts.push(element);
        }
      } else {
        if (element.label
          .replace(",", "")
          .toLowerCase()
          .includes(state.inputValue.toLowerCase())
        ) {
          opts.push(element);
        }
      }
    });
    return opts;
  };

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
          filterOptions={filterOP}
          value={value}
          onChange={onChangeHandler}
          sx={sx}
        />
        <input type="hidden" name={name} value={valueString} />
      </>
      <>
        <Autocomplete
          id={id2}
          multiple={multiple2}
          options={options2}
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
            option: AutocompleteOptionType,
            value: AutocompleteOptionType,
          ) => option.id === value.id}
          filterOptions={filterOP}
          value={value2}
          onChange={onChangeHandler}
          sx={sx}
        />
        <input type="hidden" name={name2} value={valueString} />
      </>
    </>
  );
}
