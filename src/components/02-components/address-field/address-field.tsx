import {
  Box,
  type BoxProps,
  Collapse,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';

export type AddressType = {
  label?: string;
  country: string;
  streetAddress1: string;
  streetAddress2?: string;
  city: string;
  state: string;
  zipCode: string;
};

interface AddressFieldProps extends BoxProps {
  id?: string;
  address?: AddressType;
}

const usStates = [
  {
    id: 'AL',
    label: 'Alabama',
  },
  {
    id: 'AK',
    label: 'Alaska',
  },
  {
    id: 'AS',
    label: 'American Samoa',
  },
  {
    id: 'AZ',
    label: 'Arizona',
  },
  {
    id: 'AR',
    label: 'Arkansas',
  },
  {
    id: 'AA',
    label: 'Armed Forces (AA)',
  },
  {
    id: 'AE',
    label: 'Armed Forces (AE)',
  },
  {
    id: 'AP',
    label: 'Armed Forces (AP)',
  },
  {
    id: 'CA',
    label: 'California',
  },
  {
    id: 'CO',
    label: 'Colorado',
  },
  {
    id: 'CT',
    label: 'Connecticut',
  },
  {
    id: 'DE',
    label: 'Delaware',
  },
  {
    id: 'DC',
    label: 'District of Columbia',
  },
  {
    id: 'FL',
    label: 'Florida',
  },
  {
    id: 'GA',
    label: 'Georgia',
  },
  {
    id: 'GU',
    label: 'Guam',
  },
  {
    id: 'HI',
    label: 'Hawaii',
  },
  {
    id: 'ID',
    label: 'Idaho',
  },
  {
    id: 'IL',
    label: 'Illinois',
  },
  {
    id: 'IN',
    label: 'Indiana',
  },
  {
    id: 'IA',
    label: 'Iowa',
  },
  {
    id: 'KS',
    label: 'Kansas',
  },
  {
    id: 'KY',
    label: 'Kentucky',
  },
  {
    id: 'LA',
    label: 'Louisiana',
  },
  {
    id: 'ME',
    label: 'Maine',
  },
  {
    id: 'MH',
    label: 'Marshall Islands',
  },
  {
    id: 'MD',
    label: 'Maryland',
  },
  {
    id: 'MA',
    label: 'Massachusetts',
  },
  {
    id: 'MI',
    label: 'Michigan',
  },
  {
    id: 'FM',
    label: 'Micronesia',
  },
  {
    id: 'MN',
    label: 'Minnesota',
  },
  {
    id: 'MS',
    label: 'Mississippi',
  },
  {
    id: 'MO',
    label: 'Missouri',
  },
  {
    id: 'MT',
    label: 'Montana',
  },
  {
    id: 'NE',
    label: 'Nebraska',
  },
  {
    id: 'NV',
    label: 'Nevada',
  },
  {
    id: 'NH',
    label: 'New Hampshire',
  },
  {
    id: 'NJ',
    label: 'New Jersey',
  },
  {
    id: 'NM',
    label: 'New Mexico',
  },
  {
    id: 'NY',
    label: 'New York',
  },
  {
    id: 'NC',
    label: 'North Carolina',
  },
  {
    id: 'ND',
    label: 'North Dakota',
  },
  {
    id: 'MP',
    label: 'Northern Mariana Islands',
  },
  {
    id: 'OH',
    label: 'Ohio',
  },
  {
    id: 'OK',
    label: 'Oklahoma',
  },
  {
    id: 'OR',
    label: 'Oregon',
  },
  {
    id: 'PW',
    label: 'Palau',
  },
  {
    id: 'PA',
    label: 'Pennsylvania',
  },
  {
    id: 'PR',
    label: 'Puerto Rico',
  },
  {
    id: 'RI',
    label: 'Rhode Island',
  },
  {
    id: 'SC',
    label: 'South Carolina',
  },
  {
    id: 'SD',
    label: 'South Dakota',
  },
  {
    id: 'TN',
    label: 'Tennessee',
  },
  {
    id: 'TX',
    label: 'Texas',
  },
  {
    id: 'UT',
    label: 'Utah',
  },
  {
    id: 'VT',
    label: 'Vermont',
  },
  {
    id: 'VI',
    label: 'Virgin Islands',
  },
  {
    id: 'VA',
    label: 'Virginia',
  },
  {
    id: 'WA',
    label: 'Washington',
  },
  {
    id: 'WV',
    label: 'West Virginia',
  },
  {
    id: 'WI',
    label: 'Wisconsin',
  },
  {
    id: 'WY',
    label: 'Wyoming',
  },
];

export default function AddressField({
  id,
  address,
  ...props
}: AddressFieldProps) {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setExpanded(typeof address !== 'undefined' && address.country !== 'none');
  }, [address, setExpanded]);

  function countryChangeHandler(event: SelectChangeEvent) {
    setExpanded(event.target.value !== 'none');
  }

  // Styles.
  const containerStyles = {
    p: theme.spacing(3),
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.spacing(1),
  };

  const fieldBaseStyles = {
    mb: theme.spacing(3),
  };

  const twoColStyles = {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      gap: theme.spacing(3),
    },
  };

  const idPrefix = typeof id !== 'undefined' ? `${id}-` : '';

  return (
    <Box component="fieldset" sx={containerStyles} {...props}>
      <legend>
        {address?.label ?? 'Address'}
      </legend>
      <FormControl fullWidth>
        <InputLabel id={`${idPrefix}address-country-label`}>Country</InputLabel>
        <Select
          labelId={`${idPrefix}address-country-label`}
          id={`${idPrefix}address-country`}
          label="Country"
          native={true}
          name="address_country"
          defaultValue={address?.country ?? 'none'}
          onChange={countryChangeHandler}
        >
          <option value="none">Select country...</option>
          <option value="US">United States</option>
        </Select>
      </FormControl>
      <Collapse in={expanded}>
        <TextField
          required={expanded}
          fullWidth
          id={`${idPrefix}street-address1`}
          variant="outlined"
          name="address_street_address1"
          label="Street address"
          defaultValue={address?.streetAddress1}
          sx={{ ...fieldBaseStyles, mt: theme.spacing(3) }}
        />
        <TextField
          fullWidth
          id={`${idPrefix}street-address2`}
          variant="outlined"
          name="address_street_address2"
          label="Street address 2"
          defaultValue={address?.streetAddress2}
          sx={fieldBaseStyles}
        />
        <Box sx={twoColStyles}>
          <TextField
            required={expanded}
            fullWidth
            id={`${idPrefix}city`}
            variant="outlined"
            name="address_city"
            label="City"
            defaultValue={address?.city}
            sx={fieldBaseStyles}
          />
          <FormControl fullWidth required sx={fieldBaseStyles}>
            <InputLabel id={`${idPrefix}address-state-label`}>State</InputLabel>
            <Select
              required={expanded}
              labelId="address-state-label"
              id={`${idPrefix}address-state`}
              label="State"
              native={true}
              name="address_state"
              defaultValue={address?.state ?? 'none'}
            >
              <option value="none">Select state…</option>
              {usStates.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.label}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>
        <TextField
          required={expanded}
          id={`${idPrefix}zipcode`}
          variant="outlined"
          name="address_zipcode"
          label="Zip code"
          defaultValue={address?.zipCode}
        />
      </Collapse>
    </Box>
  );
}
