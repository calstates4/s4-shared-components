import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ElementType, ReactNode } from 'react';
import Pager from '../../01-elements/pager/pager';
import AutocompleteField, {
  type AutocompleteOptionType,
} from '../autocomplete-field/autocomplete-field';

export type OrganizationFacultyListProps = {
  children: ReactNode;
  url: string;
  FormElement?: ElementType;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  industryFilterValues?: AutocompleteOptionType[];
  typeFilterValues?: AutocompleteOptionType[];
  focusPopulationFilterValues?: AutocompleteOptionType[];
  focusAreaFilterValues?: AutocompleteOptionType[];
  cityFilterValues?: AutocompleteOptionType[];
  currentFilters: {
    type: string | null;
    industry: string | null;
    focusPopulation: string | null;
    focusArea: string | null;
    city: string | null;
    keyword: string | null;
  };
};

export default function OrganizationFacultyList({
  children,
  url,
  FormElement,
  totalItems,
  itemsPerPage,
  currentPage,
  industryFilterValues,
  typeFilterValues,
  focusPopulationFilterValues,
  focusAreaFilterValues,
  cityFilterValues,
  currentFilters,
}: OrganizationFacultyListProps) {
  const theme = useTheme();

  // Styles.
  const containerStyles = {
    mt: theme.spacing(3),
    pb: theme.spacing(4),
  };

  const titleContainerStyles = {
    mb: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
  };

  const filterContainerStyles = {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'left',
    },
  };

  const listStyles = {
    mt: theme.spacing(4),
    '& article + article': {
      mt: theme.spacing(3),
    },
  };

  const formItemStyles = {
    mb: theme.spacing(2),
    display: 'flex',
    minWidth: '12rem',
    [theme.breakpoints.up('sm')]: {
      display: 'inline-flex',
      mr: theme.spacing(2),
    },
  };

  // Render.

  const formInner = (
    <>
      <Box sx={filterContainerStyles}>
        <Box>
          {typeFilterValues && (
            <AutocompleteField
              id="organization-type"
              name="organization-type"
              label="Organization Type"
              options={typeFilterValues}
              selected={currentFilters.type}
              sx={formItemStyles}
            />
          )}

          {industryFilterValues && (
            <AutocompleteField
              id="organization-industry-type"
              name="organization-industry-type"
              label="Industry Type"
              options={industryFilterValues}
              selected={currentFilters.industry}
              sx={formItemStyles}
            />
          )}

          {cityFilterValues && (
            <AutocompleteField
              id="organization-city"
              name="organization-city"
              label="City"
              options={cityFilterValues}
              selected={currentFilters.city}
              sx={formItemStyles}
            />
          )}


          <TextField
            id="organization-keyword"
            name="organization-keyword"
            label="Keyword"
            defaultValue={currentFilters.keyword ?? undefined}
            sx={formItemStyles}
          />

          {focusAreaFilterValues && (
            <AutocompleteField
              id="organization-focus-area"
              name="organization-focus-area"
              label="Focus Area"
              options={focusAreaFilterValues}
              selected={currentFilters.focusArea}
              sx={formItemStyles}
            />
          )}

          {focusPopulationFilterValues && (
            <AutocompleteField
              id="organization-focus-population"
              name="organization-focus-population"
              label="Focus Population"
              options={focusPopulationFilterValues}
              selected={currentFilters.focusPopulation}
              sx={formItemStyles}
            />
          )}
        </Box>
        <Button
          size="large"
          variant="contained"
          type="submit"
          sx={{ display: 'block', minWidth: '150px' }}
        >
          Apply Filters
        </Button>
      </Box>
    </>
  );

  const form = FormElement ? (
    <FormElement>{formInner}</FormElement>
  ) : (
    <form>{formInner}</form>
  );

  return (
    <div>
      <Box sx={titleContainerStyles}>
        <Typography variant="h1">
          Organizations
        </Typography>
      </Box>
      <Box sx={containerStyles}>
        <Box>{form}</Box>
        <Box sx={listStyles}>{children}</Box>
        {totalItems > itemsPerPage && (
          <Pager
            baseUrl={url}
            count={Math.ceil(totalItems / itemsPerPage)}
            page={currentPage}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: theme.spacing(3),
            }}
          />
        )}
      </Box>
    </div>
  );
}
