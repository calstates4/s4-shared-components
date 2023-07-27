import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  Typography,
  useTheme,
} from '@mui/material';
import { ElementType, ReactNode } from 'react';
import Pager from '../../01-elements/pager/pager';

type ExperiencesListProps = {
  children: ReactNode;
  url: string;
  FormElement?: ElementType;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  programFilterValues: {
    id: string;
    label: string;
  }[];
  termFilterValues: {
    id: string;
    label: string;
  }[];
  currentFilters: {
    program: string | null;
    term: string | null;
  };
};

export default function CampusList({
  children,
  url,
  FormElement,
  totalItems,
  itemsPerPage,
  currentPage,
  programFilterValues,
  termFilterValues,
  currentFilters,
}: ExperiencesListProps) {
  const theme = useTheme();

  // const firstItem = itemsPerPage * (currentPage - 1) + 1;
  // const lastItem =
  //   totalItems > itemsPerPage ? firstItem + itemsPerPage - 1 : totalItems;

  // Styles.
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
        <InputLabel id="program-select-label">Program</InputLabel>
        <Select
          id="program-select"
          label="Program"
          native={true}
          name="program"
          defaultValue={currentFilters.program}
        >
          {programFilterValues.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl size="small" sx={formItemStyles}>
        <InputLabel id="term-select-label">Term</InputLabel>
        <Select
          id="term-select"
          label="Term"
          native={true}
          name="term"
          defaultValue={currentFilters.term}
        >
          {termFilterValues.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </Select>
      </FormControl>
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
    <Box>
      <Typography variant="h1" mb={2}>
        Experiences
      </Typography>
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
    </Box>
  );
}
