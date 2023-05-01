import {
  Select,
  Box,
  FormControl,
  InputLabel,
  Button,
  Drawer,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useState } from 'react';

export type ContextProps = {
  universities: Array<{ title: string; id: string }>;
  campuses: Array<{ title: string; id: string }>;
  selectedUniversity: number;
  selectedCampus: number;
  formSubmit: Function;
};

export default function Context({
  universities,
  campuses,
  selectedUniversity,
  selectedCampus,
  formSubmit,
}: ContextProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();

  // Styles.
  const desktopContainerStyles = {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
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
      width: 250,
      display: 'inline-flex',
    },
  };

  const selectStyles = {
    color: 'primary.main',
    [theme.breakpoints.up('md')]: {
      color: 'white',
    },
    '& .MuiNativeSelect-icon': {
      fill: 'primary.main',
      [theme.breakpoints.up('md')]: {
        fill: 'white',
      },
    },
    '&, &:hover, &.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'primary.main',
        [theme.breakpoints.up('md')]: {
          borderColor: 'white',
        },
      },
    },
  };

  const labelStyles = {
    '&, &.Mui-focused': {
      color: 'primary.main',
      [theme.breakpoints.up('md')]: {
        color: 'white',
      },
    },
  };

  const formElements = (
    <>
      <FormControl size="small" sx={formControlStyles}>
        <InputLabel id="university-select-label" sx={labelStyles}>
          University
        </InputLabel>
        <Select
          labelId="university-select-label"
          id="university-select"
          label="University"
          IconComponent={SwapHorizIcon}
          native={true}
          name="university"
          sx={selectStyles}
          defaultValue={selectedUniversity}
        >
          <option value="0">Select university...</option>
          {universities.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl size="small" sx={formControlStyles}>
        <InputLabel id="campus-select-label" sx={labelStyles}>
          Campus
        </InputLabel>
        <Select
          labelId="campus-select-label"
          id="campus-select"
          label="Campus"
          IconComponent={SwapHorizIcon}
          native={true}
          name="campus"
          sx={selectStyles}
          defaultValue={selectedCampus}
          onChange={(event) => {
            const element = event.currentTarget as HTMLSelectElement;
            formSubmit(element.closest('form'));
          }}
        >
          <option value="0">Select campus...</option>
          {campuses.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </Select>
      </FormControl>
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
