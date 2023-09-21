import { Box, Button, FormControl, InputLabel, Paper, Select, TextField, Typography, useTheme } from '@mui/material';
import { ProgramCardProps } from '../program-card/program-card';
import Pager from '../../01-elements/pager/pager';
import { ElementType, ReactNode } from 'react';

export type ProgramListProps = {
  children: ReactNode;
  url: string;
  FormElement?: ElementType;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  items?: ProgramCardProps[];
  currentFilters: {
    programTag: string | null;
    programDisplay: string | null;
  };
  displatFilterValues: {
    id: string;
    label: string;
  }[];
};

export default function ProgramList({
  children,
  url,
  FormElement,
  totalItems,
  itemsPerPage,
  currentPage,
  items,
  currentFilters,
  displatFilterValues,
}: ProgramListProps) {
  const theme = useTheme();
  const pagerCount = Math.ceil(totalItems / itemsPerPage);

  // Styles
  const containerStyles = {
    px: theme.spacing(3),
    py: theme.spacing(3),
    border: `1px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.up('sm')]: {
      px: theme.spacing(5),
      py: theme.spacing(4),
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

  const listStyles = {
    '& article + article': {
      mt: theme.spacing(3),
    },
  };

  const formInner = (
    <>
      <TextField
        size="small"
        id="program-tag"
        name="program-tag"
        label="Program tag"
        sx={formItemStyles}
        defaultValue={currentFilters.programTag}
      />
      <FormControl size="small" sx={formItemStyles}>
        <InputLabel id="status-select-label">My programs</InputLabel>
        <Select
          native={true}
          label="Status"
          id="program-display"
          name="program-display"
          defaultValue={currentFilters.programDisplay}
        >
          {displatFilterValues.map((item) => (
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

  const renderedPager = pagerCount > 1 && (
    <Pager
      baseUrl={url}
      count={pagerCount}
      page={currentPage}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        pt: theme.spacing(3),
      }}
    />
  );

  return (
    <div>
      <Typography variant="h1">Campuses</Typography>
      <Paper elevation={0} sx={containerStyles}>
        <Typography>
          This page includes a list of campuses and the programs that are
          currently using CalState S4. You can use the filter function to see a
          list of campuses with which your organization has an existing
          partnership. For campuses your organization is not currently partnered
          with, use the Initiate Partnership button to begin the process.
        </Typography>
        <Box sx={{ pt: theme.spacing(2), pb: theme.spacing(6) }}>{form}</Box>
        <Box sx={listStyles}>{children}</Box>
        {renderedPager}
      </Paper>
    </div>
  );
}
