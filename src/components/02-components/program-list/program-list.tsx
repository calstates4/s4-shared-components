import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Paper,
  Select,
  Typography,
  TextField,
  Autocomplete,
  Stack,
  useTheme,
} from '@mui/material';
import ProgramCard, { ProgramCardProps } from '../program-card/program-card';
import Pager from '../../01-elements/pager/pager';
import { ElementType } from 'react';

export type ProgramListProps = {
  url: string;
  FormElement?: ElementType;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  items?: ProgramCardProps[];
  defaultProgramDisplay?: string;
  displayFilterValues: {
    id: string;
    label: string;
  }[];
};

export default function ProgramList({
  url,
  FormElement,
  totalItems,
  itemsPerPage,
  currentPage,
  items,
  displayFilterValues,
  defaultProgramDisplay,
}: ProgramListProps) {
  const theme = useTheme();
  const pagerCount = Math.ceil(totalItems / itemsPerPage);

  const titleStyles = {
    textTransform: 'uppercase',
    mb: theme.spacing(2),
  };

  // Styles
  const containerStyles = {
    px: theme.spacing(3),
    py: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      px: theme.spacing(5),
      py: theme.spacing(4),
    },
  };

  const responsiveWidth = {
    width: '500px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  };

  const formInner = (
    <>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 4 }}>
        <FormControl margin="none">
          <Autocomplete
            id="program-tag-autocomplete"
            sx={responsiveWidth}
            options={items?.map((option) => option.title) || []}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Program Name"
                id="program-tag"
                name="program-tag"
                InputProps={{
                  ...params.InputProps,
                }}
              />
            )}
          />
        </FormControl>
        <FormControl margin="none">
          <InputLabel
            id="status-select-program-display"
            htmlFor="program-display"
            aria-label="program-display"
          >
            My programs
          </InputLabel>
          <Select
            native={true}
            label="My programs"
            id="program-display"
            name="program-display"
            defaultValue={defaultProgramDisplay}
            sx={{ pr: theme.spacing(4) }}
          >
            {displayFilterValues.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" type="submit">
          Apply Filters
        </Button>
      </Stack>
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
      <Typography variant="h1" sx={titleStyles}>
        Programs
      </Typography>
      <Paper elevation={0} sx={containerStyles}>
        <Typography>
          This page includes a list of campuses and the programs that are
          currently using CalState S4. You can use the filter function to see a
          list of campuses with which your organization has an existing
          partnership. For campuses your organization is not currently partnered
          with, use the Initiate Partnership button to begin the process.
        </Typography>
        <Box sx={{ pt: theme.spacing(2), pb: theme.spacing(6) }}>{form}</Box>
        {items ? (
          <>
            <Grid container spacing={5} alignItems="stretch">
              {items?.map((item, _index) => (
                <Grid item xs={12} md={6} key={_index}>
                  <ProgramCard
                    id={item.id}
                    title={item.title}
                    url={item.url}
                    joinUrl={item.joinUrl}
                    description={item.description}
                    btnDisable={item.btnDisable}
                    btnText={item.btnText}
                  />
                </Grid>
              ))}
            </Grid>
            {renderedPager}
          </>
        ) : (
          <Stack spacing={2} direction="row" alignItems="center">
            <Typography variant="body1">No programs found.</Typography>
            <Button variant="outlined" href={url}>
              Show all programs
            </Button>
          </Stack>
        )}
      </Paper>
    </div>
  );
}
