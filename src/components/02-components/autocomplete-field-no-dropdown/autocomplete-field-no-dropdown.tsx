import { Autocomplete, TextField } from '@mui/material';
import { type SyntheticEvent, useState, useEffect } from 'react';

export type AutocompleteOptionTypeNoDropdown = {
  id: string;
  label: string;
  key?: string;
};

type AutocompleteFieldNoDropdownProps = {
  id: string;
  label: string;
  name: string;
  helptext?: string;
  options: AutocompleteOptionTypeNoDropdown[];
  selected?: string | string[] | null;
  required?: boolean;
  sx?: any;
  error?: boolean;
  onChange?: (event: SyntheticEvent, value: AutocompleteOptionTypeNoDropdown | AutocompleteOptionTypeNoDropdown[] | null) => void;
};

export default function AutocompleteFieldNoDropdown({
  id,
  name,
  label,
  helptext,
  options,
  selected = null,
  required = false,
  sx,
  error = false,
  onChange,
}: AutocompleteFieldNoDropdownProps) {
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<AutocompleteOptionTypeNoDropdown[]>([]);
  const [inputValueId, setInputValueId] = useState<string>('');


  useEffect(() => {
    if (selected) {
      const selectedOption = options.find((item) => item.id === selected);
      setInputValue(selectedOption ? selectedOption.label : (Array.isArray(selected) ? selected.join(', ') : selected ?? ''));
      setInputValueId(selectedOption?.id ?? '');
    } else {
      setInputValue('');
      setInputValueId('');
    }

    setTimeout(() => setOpen(false), 100); // 🔥 Cierra el dropdown después de la carga inicial
  }, [selected, options]);

  function handleInputChange(event: SyntheticEvent, newInputValue: string) {
    setInputValue(newInputValue);

    if (newInputValue.length < 2) {
      setFilteredOptions([]); // 🔥 No mostrar opciones hasta que haya 2+ letras
      setOpen(false);
      return;
    }

    // 🔥 Filtrar opciones solo si hay 2 o más letras
    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(newInputValue.toLowerCase())
    );

    setFilteredOptions(filtered);
    setOpen(filtered.length > 0);
  }

  function onChangeHandler(event: SyntheticEvent, value: AutocompleteOptionTypeNoDropdown | string | null) {
    if (typeof value === 'string') {
      setInputValue(value);
      setInputValueId('');
      setOpen(value.length >= 2);
      if (onChange) onChange(event, null);
    } else {
      setInputValue(value?.label ?? '');
      setInputValueId(value?.id ?? '');
      setOpen(false);
      if (onChange) onChange(event, value);
    }
  }


  return (
    <>
      <Autocomplete
        id={id}
        options={filteredOptions} // 🔥 Solo muestra opciones si hay 2+ letras
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
        freeSolo={true}
        open={open}
        onOpen={() => setOpen(inputValue.length >= 2)} // 🔥 Evita que se abra con 1 sola letra
        onClose={() => setOpen(false)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            value={inputValue}
            onChange={(e) => handleInputChange(e, e.target.value)}
            required={required}
            helperText={helptext}
            error={error}
          />
        )}
        value={inputValue}
        onInputChange={handleInputChange}
        onChange={onChangeHandler}
        sx={sx}
        noOptionsText="No options match your search"
      />
      <input
        type="hidden"
        name={name}
        value={JSON.stringify({
          id: inputValueId,
          label: inputValue
        })}
      />

    </>
  );
}
