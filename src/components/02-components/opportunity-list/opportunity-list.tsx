import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Link from '../../01-elements/link/link';
import AutocompleteField, {
  type AutocompleteOptionType,
} from '../autocomplete-field/autocomplete-field';
import Pager from '../../01-elements/pager/pager';
import { ElementType, ReactNode } from 'react';

export type OpportunityListProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  children: ReactNode;
  url: string;
  viewAsMapUrl: string;
  FormElement?: ElementType;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  programFilterValues?: AutocompleteOptionType[];
  courseFilterValues?: AutocompleteOptionType[];
  typeFilterValues?: AutocompleteOptionType[];
  termFilterValues?: AutocompleteOptionType[];
  focusPopulationFilterValues?: AutocompleteOptionType[];
  focusAreaFilterValues?: AutocompleteOptionType[];
  cityFilterValues?: AutocompleteOptionType[];
  currentFilters: {
    program: string | null;
    course: string | null;
    type: string | null;
    term: string | null;
    focusPopulation: string | null;
    focusArea: string | null;
    city: string | null;
    keyword: string | null;
  };
};

export default function OpportunityList({
  breadcrumb,
  children,
  url,
  viewAsMapUrl,
  FormElement,
  totalItems,
  itemsPerPage,
  currentPage,
  programFilterValues,
  courseFilterValues,
  typeFilterValues,
  termFilterValues,
  focusPopulationFilterValues,
  focusAreaFilterValues,
  cityFilterValues,
  currentFilters,
}: OpportunityListProps) {
  const theme = useTheme();

  // Styles.
  const containerStyles = {
    mt: theme.spacing(3),
    p: theme.spacing(3),
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

  const titleStyles = {
    color: 'primary.main',
    [theme.breakpoints.down('sm')]: {
      mb: theme.spacing(2),
    },
  };

  const listStyles = {
    borderTop: `1px solid ${theme.palette.secondary.main}`,
    pt: theme.spacing(4),
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

  const formInner = (
    <>
      {programFilterValues && (
        <TextField
          select
          id="opportunity-program"
          name="opportunity-program"
          label="Programs"
          defaultValue={currentFilters.program ?? undefined}
          InputLabelProps={{
            shrink: true,
          }}
          SelectProps={{
            native: true,
          }}
          sx={formItemStyles}
        >
          {programFilterValues.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </TextField>
      )}

      {courseFilterValues && (
        <AutocompleteField
          id="opportunity-course"
          name="opportunity-course"
          label="Course"
          options={courseFilterValues}
          selected={currentFilters.course}
          sx={formItemStyles}
        />
      )}

      {typeFilterValues && (
        <AutocompleteField
          id="opportunity-type"
          name="opportunity-type"
          label="Opportunity Type"
          options={typeFilterValues}
          selected={currentFilters.type}
          sx={formItemStyles}
        />
      )}

      {termFilterValues && (
        <AutocompleteField
          id="opportunity-term"
          name="opportunity-term"
          label="Term"
          options={termFilterValues}
          selected={currentFilters.term}
          sx={formItemStyles}
        />
      )}

      {focusPopulationFilterValues && (
        <AutocompleteField
          id="opportunity-focus-population"
          name="opportunity-focus-population"
          label="Focus Population"
          options={focusPopulationFilterValues}
          selected={currentFilters.focusPopulation}
          sx={formItemStyles}
        />
      )}

      {focusAreaFilterValues && (
        <AutocompleteField
          id="opportunity-focus-area"
          name="opportunity-focus-area"
          label="Focus Area"
          options={focusAreaFilterValues}
          selected={currentFilters.focusArea}
          sx={formItemStyles}
        />
      )}

      {cityFilterValues && (
        <AutocompleteField
          id="opportunity-city"
          name="opportunity-city"
          label="City"
          options={cityFilterValues}
          selected={currentFilters.city}
          sx={formItemStyles}
        />
      )}

      <TextField
        id="opportunity-keyword"
        name="opportunity-keyword"
        label="Keyword"
        defaultValue={currentFilters.keyword ?? undefined}
        sx={formItemStyles}
      />

      <Button
        size="large"
        variant="contained"
        type="submit"
        sx={{ display: 'block' }}
      >
        Apply Filters
      </Button>
    </>
  );

  const form = FormElement ? (
    <FormElement>{formInner}</FormElement>
  ) : (
    <form>{formInner}</form>
  );

  return (
    <div>
      <Breadcrumbs items={breadcrumb} />
      <Box sx={titleContainerStyles}>
        <Typography variant="h1" sx={titleStyles}>
          Opportunities
        </Typography>
        <Button
          variant="outlined"
          component={Link}
          href={viewAsMapUrl}
          endIcon={
            <MapOutlinedIcon
              sx={{
                fontSize: '1rem',
                mr: theme.spacing(0.5),
              }}
            />
          }
          sx={{
            flexShrink: 0,
            fontWeight: 700,
          }}
        >
          View as map
        </Button>
      </Box>
      <Paper elevation={0} sx={containerStyles}>
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
      </Paper>
    </div>
  );
}
