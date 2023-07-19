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

const PROGRAM_FILTER_VALUES = [
  {
    id: 'all',
    label: 'All Campus programs',
  },
  {
    id: '1',
    label: 'My programs',
  },
];

const OPPORTUNITY_TYPES = [
  { id: 'on-site', label: 'On-site' },
  { id: 'remote', label: 'Remote' },
  { id: 'hybrid', label: 'Hybrid' },
];

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
  courseFilterValues?: AutocompleteOptionType[];
  termFilterValues: AutocompleteOptionType[];
  focusPopulationFilterValues?: AutocompleteOptionType[];
  focusAreaFilterValues?: AutocompleteOptionType[];
  cityFilterValues?: AutocompleteOptionType[];
  currentFilters: {
    program: string | null;
    course: string | null;
    opportunityType: string | null;
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
  courseFilterValues,
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
    borderTop: `1px solid ${theme.palette.secondary.light}`,
    pt: theme.spacing(4),
    mt: theme.spacing(4),
    '& article + article': {
      mt: theme.spacing(3),
    },
  };
  const formItemStyles = {
    mb: theme.spacing(2),
    display: 'flex',
    minWidth: '8rem',
    [theme.breakpoints.up('sm')]: {
      display: 'inline-flex',
      mb: 0,
      mr: theme.spacing(2),
    },
  };

  const formInner = (
    <>
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
        {PROGRAM_FILTER_VALUES.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </TextField>

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

      <TextField
        select
        id="opportunity-type"
        name="opportunity-type"
        label="Opportunity Type"
        defaultValue={currentFilters.opportunityType ?? undefined}
        InputLabelProps={{
          shrink: true,
        }}
        SelectProps={{
          native: true,
        }}
        sx={formItemStyles}
      >
        {OPPORTUNITY_TYPES.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </TextField>

      <Button variant="contained" type="submit">
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
        <Box sx={{ pt: theme.spacing(2), pb: theme.spacing(6) }}>{form}</Box>
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
