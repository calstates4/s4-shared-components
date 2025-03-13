import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ElementType, ReactNode } from 'react';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Pager from '../../01-elements/pager/pager';
import AutocompleteField, {
  type AutocompleteOptionType,
} from '../autocomplete-field/autocomplete-field';
import AutocompleteFieldNoDropdown, {
  AutocompleteOptionTypeNoDropdown,
} from '../autocomplete-field-no-dropdown/autocomplete-field-no-dropdown';

export type OpportunityListProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  children: ReactNode;
  url: string;
  listView: boolean;
  onClickHandler: () => void;
  FormElement?: ElementType;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  programFilterValues?: AutocompleteOptionType[];
  courseFilterValues?: AutocompleteOptionType[];
  typeFilterValues?: AutocompleteOptionType[];
  termFilterValues?: AutocompleteOptionType[];
  focusPopulationFilterValues?: AutocompleteOptionType[];
  categoryFilterValues?: AutocompleteOptionType[];
  focusAreaFilterValues?: AutocompleteOptionType[];
  cityFilterValues?: AutocompleteOptionType[];
  organizationByCampus?: AutocompleteOptionTypeNoDropdown[];
  currentFilters: {
    program: string | null;
    course: string | null;
    type: string | null;
    term: string | null;
    focusPopulation: string | null;
    category : string | null;
    focusArea: string | null;
    city: string | null;
    keyword: string | null;
    organization: string | null;
  };
};

export default function OpportunityList({
  breadcrumb,
  children,
  url,
  listView,
  onClickHandler,
  FormElement,
  totalItems,
  itemsPerPage,
  currentPage,
  programFilterValues,
  courseFilterValues,
  typeFilterValues,
  termFilterValues,
  focusPopulationFilterValues,
  categoryFilterValues,
  focusAreaFilterValues,
  cityFilterValues,
  organizationByCampus,
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

  const listIconStyles = { fontSize: '1rem', mr: theme.spacing(0.5) };

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

      {categoryFilterValues && (
        <AutocompleteField
          id="opportunity-category"
          name="opportunity-category"
          label="Category"
          options={categoryFilterValues}
          selected={currentFilters.category}
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

      {organizationByCampus && (
        <AutocompleteFieldNoDropdown
          id="opportunity-organization"
          name="opportunity-organization"
          label="Organization"
          options={organizationByCampus}
          selected={currentFilters.organization}
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

  const renderedViewIcon = listView ? (
    <MapOutlinedIcon sx={listIconStyles} />
  ) : (
    <ListAltOutlinedIcon sx={listIconStyles} />
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
          onClick={onClickHandler}
          endIcon={renderedViewIcon}
          sx={{
            flexShrink: 0,
            fontWeight: 700,
          }}
        >
          {`View as ${listView ? 'map' : 'list'}`}
        </Button>
      </Box>
      <Paper elevation={0} sx={containerStyles}>
        <Box>{form}</Box>
        <Box sx={listStyles}>{children}</Box>
        {listView && totalItems > itemsPerPage && (
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
