import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Paper,
  Select,
  Typography,
  useTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ElementType, ReactNode } from 'react';
import Link from '../../01-elements/link/link';
import Pager from '../../01-elements/pager/pager';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import { ArrowForward } from "@mui/icons-material";

type OfferingListProps = {
  listOnly?: boolean;
  title?: string;
  breadcrumb?: {
    title: string;
    url: string;
  }[];
  children?: ReactNode;
  pagerUrl?: string;
  addUrl?: string;
  seeAllUrl?: string;
  FormElement?: ElementType;
  totalItems?: number;
  itemsPerPage?: number;
  currentPage?: number;
  categoryFilterValues?: {
    id: string;
    name: string;
  }[];
  departmentFilterValues?: {
    id: string;
    name: string;
  }[];
  currentFilters?: {
    category: string | null;
    department: string | null;
  };
};

export default function OfferingList({
  listOnly,
  title,
  breadcrumb,
  children,
  pagerUrl,
  addUrl,
  seeAllUrl,
  FormElement,
  totalItems,
  itemsPerPage,
  currentPage,
  categoryFilterValues,
  departmentFilterValues,
  currentFilters,
}: OfferingListProps) {
  const theme = useTheme();

  let firstItem = null;
  if (itemsPerPage && currentPage) {
    firstItem = itemsPerPage * (currentPage - 1) + 1;
  }

  let lastItem = null;
  if (totalItems && itemsPerPage && firstItem) {
    lastItem =
      totalItems > itemsPerPage ? firstItem + itemsPerPage - 1 : totalItems;
  }

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
      {categoryFilterValues && currentFilters && (
        <FormControl size="small" sx={formItemStyles}>
          <InputLabel id="category-select-label" htmlFor="category-select">
            Category
          </InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            label="Category"
            native={true}
            name="category"
            defaultValue={currentFilters.category}
          >
            {categoryFilterValues.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Select>
        </FormControl>
      )}
      {departmentFilterValues && currentFilters && (
        <FormControl size="small" sx={formItemStyles}>
          <InputLabel id="department-select-label" htmlFor="department-select">
            Department
          </InputLabel>
          <Select
            labelId="department-select-label"
            id="department-select"
            label="Department"
            native={true}
            name="department"
            defaultValue={currentFilters.department}
          >
            {departmentFilterValues.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Select>
        </FormControl>
      )}
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
    <>
      {breadcrumb && (
        <Breadcrumbs items={breadcrumb} />
      )}
      {listOnly ? (
        <>
          <Typography variant="h2" sx={titleStyles}>
            {title}
          </Typography>
          <Box sx={{ ...listStyles, mt: '2rem' }}>{children}</Box>
          <Button sx={{ fontWeight: 700, float: "right" }} href={seeAllUrl}>See all <ArrowForward /></Button>
        </>
      ) : (
        <>
          <Box sx={titleContainerStyles}>
            <Typography variant="h1" sx={titleStyles}>
              {title}
            </Typography>
            {addUrl && (
              <Button
                variant="outlined"
                component={Link}
                href={addUrl}
                startIcon={
                  <AddIcon
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
                Add offering
              </Button>
            )}
          </Box>
          <Paper elevation={0} sx={containerStyles}>
            {categoryFilterValues || departmentFilterValues ? (
              <Box sx={{ pt: theme.spacing(2), pb: theme.spacing(6) }}>{form}</Box>
            ) : null}
            {totalItems && lastItem ? (
              <Typography sx={{ mb: theme.spacing(2) }}>
                Showing {firstItem} to {lastItem} of {totalItems} results
              </Typography>
            ) : null}
            <Box sx={listStyles}>{children}</Box>
            {totalItems && itemsPerPage && currentPage && totalItems > itemsPerPage && pagerUrl && (
              <Pager
                baseUrl={pagerUrl}
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
      </>
      )}
    </>
  );
}
