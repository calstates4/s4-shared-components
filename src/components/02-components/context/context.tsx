import {
  Select,
  Box,
  FormControl,
  InputLabel,
  Button,
  Drawer,
  SelectChangeEvent,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useState } from 'react';

export type ContextProps = {
  level1: {
    items: Array<{ title: string; id: string }>;
    selectedItem: string;
    label: string;
    placeholder: string;
  };
  level2?: {
    items: Array<{ title: string; id: string }>;
    selectedItem: string;
    label: string;
    placeholder: string;
  };
  formSubmit: (a: HTMLFormElement) => void;
};

export default function Context({ level1, level2, formSubmit }: ContextProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [level2Disabled, setLevel2Disabled] = useState(
    level1.selectedItem === '0',
  );

  const theme = useTheme();

  // Event handler for select onChange event.
  function onChangeHandler(event: SelectChangeEvent) {
    const element = event.currentTarget as HTMLSelectElement;
    const isLevel1 = element.getAttribute('id') === 'level1-select';
    // If on level 1 select and level 2 exists, enable/disable level 2 based in level 1 value.
    if (isLevel1 && level2) {
      setLevel2Disabled(element.value === '0');
    }
    // Call formSubmit() when applies.
    if (!level2 || !isLevel1) {
      const form = element.closest('form');
      if (form) formSubmit(form);
    }
  }

  // Styles.
  const desktopContainerStyles = {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      '.MuiFormControl-root + .MuiFormControl-root': {
        ml: theme.spacing(2),
      },
    },
  };

  const mobileDrawerStyles = {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    '& .MuiDrawer-paper': {
      pt: '96px',
      backgroundColor: 'primary.light',
    },
  };

  const mobileContainerStyles = {
    p: theme.spacing(4),
    '.MuiFormControl-root + .MuiFormControl-root': {
      mt: theme.spacing(3),
    },
  };

  const formControlStyles = {
    display: 'flex',
    maxWidth: 400,
    mx: 'auto',
    [theme.breakpoints.up('md')]: {
      mx: 0,
      width: 250,
      display: 'inline-flex',
    },
  };

  const selectStyles = {
    color: 'primary.main',
    [theme.breakpoints.up('md')]: {
      color: 'white',
    },
    'select:disabled': {
      opacity: 0.5,
      WebkitTextFillColor: theme.palette.primary.main,
      [theme.breakpoints.up('md')]: {
        WebkitTextFillColor: 'white',
      },
    },
    '.MuiNativeSelect-icon': {
      fill: theme.palette.primary.main,
      [theme.breakpoints.up('md')]: {
        fill: 'white',
      },
    },
    '&, &:hover, &.Mui-focused, &.Mui-disabled': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'primary.main',
        [theme.breakpoints.up('md')]: {
          borderColor: 'white',
        },
      },
    },
    '&.Mui-disabled': {
      '.MuiOutlinedInput-notchedOutline, .MuiNativeSelect-icon': {
        opacity: 0.5,
      },
    },
  };

  const labelStyles = {
    '&, &.Mui-focused, &.Mui-disabled': {
      color: 'primary.main',
      [theme.breakpoints.up('md')]: {
        color: 'white',
      },
    },
    '&.Mui-disabled': {
      opacity: 0.5,
    },
  };

  const formElements = (
    <>
      <FormControl size="small" sx={formControlStyles}>
        <InputLabel id="level1-select-label" sx={labelStyles}>
          {level1.label}
        </InputLabel>
        <Select
          labelId="level1-select-label"
          id="level1-select"
          label={level1.label}
          IconComponent={SwapHorizIcon}
          native={true}
          name="level1"
          sx={selectStyles}
          defaultValue={level1.selectedItem}
          onChange={onChangeHandler}
        >
          <option value="0">{level1.placeholder}</option>
          {level1.items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </Select>
      </FormControl>
      {level2 && (
        <FormControl
          size="small"
          sx={formControlStyles}
          disabled={level2Disabled}
        >
          <InputLabel id="level2-select-label" sx={labelStyles}>
            {level2.label}
          </InputLabel>
          <Select
            labelId="level2-select-label"
            id="level2-select"
            label={level2.label}
            IconComponent={SwapHorizIcon}
            native={true}
            name="level2"
            sx={selectStyles}
            defaultValue={level2.selectedItem}
            onChange={onChangeHandler}
          >
            <option value="0">{level2.placeholder}</option>
            {level2.items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );

  return (
    <Box>
      <Button
        sx={{
          borderRadius: 0,
          height: 56,
          [theme.breakpoints.up('sm')]: { height: 64 },
          [theme.breakpoints.up('md')]: { display: 'none' },
          '&.is-active': {
            backgroundColor: 'primary.light',
          },
        }}
        onClick={() => {
          setMobileOpen(!mobileOpen);
        }}
        className={mobileOpen ? 'is-active' : undefined}
      >
        <SwapHorizIcon
          sx={{ color: mobileOpen ? 'primary.main' : 'white' }}
          fontSize="large"
        />
      </Button>
      <Box sx={desktopContainerStyles}>{formElements}</Box>
      <Drawer open={mobileOpen} anchor="top" sx={mobileDrawerStyles}>
        <Box sx={mobileContainerStyles}>{formElements}</Box>
      </Drawer>
    </Box>
  );
}
