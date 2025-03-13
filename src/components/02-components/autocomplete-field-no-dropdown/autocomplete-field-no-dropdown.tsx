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
  const [open, setOpen] = useState(false); // Controla la apertura del dropdown
  const [filteredOptions, setFilteredOptions] = useState(options); // Estado para las opciones filtradas

  useEffect(() => {
    if (selected) {
      const selectedOption = options.find((item) => item.id === selected);
      setInputValue(selectedOption ? selectedOption.label : (Array.isArray(selected) ? selected.join(', ') : selected ?? ''));
    } else {
      setInputValue('');
    }

    setTimeout(() => setOpen(false), 100); // 🔥 Cierra el dropdown después de la carga inicial
  }, [selected, options]);

  function onChangeHandler(event: SyntheticEvent, value: AutocompleteOptionTypeNoDropdown | string | null) {
    if (typeof value === 'string') {
      setInputValue(value);
      setOpen(value.length > 0); // Solo abrir si hay texto
      if (onChange) onChange(event, null);
    } else {
      setInputValue(value?.label ?? '');
      setOpen(false); // Cierra dropdown al seleccionar un valor
      if (onChange) onChange(event, value);
    }
  }

  function handleInputChange(event: SyntheticEvent, newInputValue: string) {
    setInputValue(newInputValue);

    // 🔥 Filtrar opciones en tiempo real
    if (newInputValue.length > 0) {
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().includes(newInputValue.toLowerCase())
        )
      );
      setOpen(true);
    } else {
      setFilteredOptions(options); // Restablecer opciones si el input está vacío
      setOpen(false);
    }
  }

  return (
    <>
      <Autocomplete
        id={id}
        options={filteredOptions} // 🔥 Usamos las opciones filtradas
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
        freeSolo={true} // Permite escritura libre
        open={open} // 🔥 Controlamos manualmente si se muestra el dropdown
        onOpen={() => setOpen(inputValue.length > 0)} // Solo abrir si hay texto
        onClose={() => setOpen(false)} // Cierra el dropdown cuando haga clic afuera
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
        onInputChange={handleInputChange} // 🔥 Manejo centralizado de cambios
        onChange={onChangeHandler}
        sx={sx}
        noOptionsText="No options match your search"
      />
      <input type="hidden" name={name} value={inputValue} />
    </>
  );
}
