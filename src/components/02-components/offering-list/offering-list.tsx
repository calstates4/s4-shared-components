import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Paper,
  Select,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { ElementType, ReactNode } from "react"
import Pager from '../../01-elements/pager/pager';

type OfferingListProps = {
  children: ReactNode
  url: string;
  FormElement?: ElementType;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  categoryFilterValues: {
    id: string;
    label: string;
  }[],
  departmentFilterValues?: {
    id: string;
    label: string;
  }[],
  currentFilters: {
    category: string | null;
    departmentId: string | null;
  };
}

export default function OfferingList({
  children,
  url,
  FormElement,
  totalItems,
  itemsPerPage,
  currentPage,
  categoryFilterValues,
  departmentFilterValues,
  currentFilters,
}: OfferingListProps) {
  const theme = useTheme();

  const firstItem = itemsPerPage * (currentPage - 1) + 1;
  const lastItem =
    totalItems > itemsPerPage ? firstItem + itemsPerPage - 1 : totalItems;

  // Stules.
  const containerStyles = {
    mt: theme.spacing(3),
    p: theme.spacing(3),
    pb: theme.spacing(4),
  };

  const listStyles = {
    '& article + article': {
      mt: theme.spacing(3),
    },
  };

  const formItemStyles = {
    mb: theme.spacing(2),
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'inline-flex',
      mb: 0,
      mr: theme.spacing(2),
    },
  };

  const formInner = (
    <>
      <FormControl size="small" sx={formItemStyles}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          id="category-select"
          label="Category"
          native={true}
          name="category"
          defaultValue={currentFilters.category}
        >
          {categoryFilterValues.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </Select>
      </FormControl>
        {departmentFilterValues ? (
          <FormControl size="small" sx={formItemStyles}>
            <InputLabel id="department-select-label">Department</InputLabel>
            <Select
              id="department-select"
              label="Department"
              native={true}
              name="department"
              defaultValue={currentFilters.departmentId}
            >
              {departmentFilterValues.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </Select>
          </FormControl>
        ) : null}
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
      <Typography variant="h1">Offerings</Typography>
      <Paper elevation={0} sx={containerStyles}>
        <Box sx={{ pt: theme.spacing(2), pb: theme.spacing(6) }}>{form}</Box>
        {totalItems ? (
          <Typography sx={{ mb: theme.spacing(2) }}>
            Showing {firstItem} to {lastItem} of {totalItems} results
          </Typography>
        ) : null}
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
