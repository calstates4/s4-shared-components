import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ElementType, ReactNode } from 'react';
import Link from '../../01-elements/link/link';
import Pager from '../../01-elements/pager/pager';

type OrganizationListProps = {
  currentFilters: {
    orgName: string | null;
  };
  url: string;
  createOrgUrl: string;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  FormElement?: ElementType;
  children: ReactNode;
};
export default function OrganizationList({
  currentFilters,
  url,
  createOrgUrl,
  totalItems,
  itemsPerPage,
  currentPage,
  FormElement,
  children,
}: OrganizationListProps) {
  const theme = useTheme();

  const firstItem = itemsPerPage * (currentPage - 1) + 1;
  const lastItem =
    totalItems > itemsPerPage ? firstItem + itemsPerPage - 1 : totalItems;

  // Styles.
  const containerStyles = {
    p: theme.spacing(4),
  };

  const formContainerStyles = {
    pt: theme.spacing(2),
    pb: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
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

  const createOrgStyles = {
    backgroundColor: theme.palette.primary.light,
    px: theme.spacing(1),
    py: theme.spacing(0.5),
    borderRadius: theme.spacing(0.25),
    mt: theme.spacing(3),
    '&, & a': {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.up('md')]: {
      mt: 0,
      ml: theme.spacing(3),
    },
  };

  const listStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  };

  const formInner = (
    <>
      <TextField
        label="Name"
        id="name"
        size="small"
        name="orgName"
        sx={formItemStyles}
        defaultValue={currentFilters.orgName}
      />
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
    <Paper sx={containerStyles}>
      <Typography variant="h2" mb={2}>
        Select the organization you belong to
      </Typography>
      <Box sx={formContainerStyles}>
        {form}
        <Box sx={createOrgStyles}>
          <strong>Can’t find your Organization?</strong>{' '}
          <Link href={createOrgUrl}>Create an organization</Link>
        </Box>
      </Box>
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
  );
}
