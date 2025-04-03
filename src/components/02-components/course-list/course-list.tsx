import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { ElementType, ReactNode } from 'react';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Pager from '../../01-elements/pager/pager';
import AutocompleteField, {
  type AutocompleteOptionType,
} from '../autocomplete-field/autocomplete-field';

export type CourseListProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  children: ReactNode;
  url: string;
  FormElement?: ElementType;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  programFilterValues?: AutocompleteOptionType[];
  termFilterValues?: AutocompleteOptionType[];
  currentFilters: {
    program: string | null;
    term: string | null;
  };
};

export default function OpportunityList({
  breadcrumb,
  children,
  url,
  FormElement,
  totalItems,
  itemsPerPage,
  currentPage,
  programFilterValues,
  termFilterValues,
  currentFilters,
}: CourseListProps) {
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
    overflowX: 'auto',
    '& article + article': {
      mt: theme.spacing(3),
    },
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    p: '20px',
    pb: '1px',
    gap: '10px',
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    minWidth: '1300px',
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
      {termFilterValues && (
        <AutocompleteField
          id="course-term"
          name="course-term"
          label="Term"
          options={termFilterValues}
          selected={currentFilters.term}
          sx={formItemStyles}
        />
      )}

      {programFilterValues && (
        <AutocompleteField
          id="course-program"
          name="course-program"
          label="Program"
          options={programFilterValues}
          selected={currentFilters.program}
          sx={formItemStyles}
        />
      )}

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
          Manage Courses
        </Typography>
      </Box>
      <Paper elevation={0} sx={containerStyles}>
        <Box>{form}</Box>
        <Box sx={listStyles}>
          <Box sx={gridStyles}>
            <Box>
              <Typography component="h5" variant="h5" mb={3}>
                Term
              </Typography>
            </Box>
            <Box>
              <Typography component="h5" variant="h5" mb={3}>
                Course Name
              </Typography>
            </Box>
            <Box>
              <Typography component="h5" variant="h5" mb={3}>
                Program
              </Typography>
            </Box>
            <Box>
              <Typography component="h5" variant="h5" mb={3}>
                Enrollment
              </Typography>
            </Box>
            <Box>
              <Typography component="h5" variant="h5" mb={3}>
                Student with<br></br>experiences
              </Typography>
            </Box>
            <Box>
              <Typography component="h5" variant="h5" mb={3}>
                Hour approved
              </Typography>
            </Box>
          </Box>
          {children}
        </Box>
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
