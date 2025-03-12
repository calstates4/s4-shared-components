import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import Pager from '../../01-elements/pager/pager';
import { TimeEntryProps } from '../experience-time-entry-table/experience-time-entry-table';

export type FacultyTimeLogEntryProps = TimeEntryProps

export type FacultyTimeLogTableProps = {
  cta: string;
  currentPage: number;
  itemsPerPage: number;
  items: FacultyTimeLogEntryProps[];
  totalItems: number;
  url: string;
};

export type TimeEntryRevisionProps = {
  date: string;
  message: string;
  status: string;
};

export default function TimeLogTable({
  cta,
  currentPage,
  itemsPerPage,
  items,
  totalItems,
  url,
}: FacultyTimeLogTableProps) {
  const theme = useTheme();
  const pagerCount = Math.ceil(totalItems / itemsPerPage);

  // Style
  const contentStyles = {
    p: theme.spacing(5),
  };

  const headerWrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  };

  const tableStyles = {
    td: {
      p: theme.spacing(3),

      '&:first-child': {
        pl: 0,
      },
    },
    th: {
      p: theme.spacing(3),
      fontWeight: 700,

      '&:first-child': {
        pl: 0,
      },
    },
  };

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

  // Components
  const renderedBody = items.map((item) => {
    return (
      <TableRow key={item.id}>
        <TableCell>{item.date}</TableCell>
        <TableCell>{item.calculatedHours}</TableCell>
        <TableCell>
          {item.description && (
            <div
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          )}
        </TableCell>
        <TableCell>
          {item.learningOutcomes ?? 'None'}
        </TableCell>
        <TableCell>{item.state}</TableCell>
      </TableRow>
    );
  });

  const renderedTable = (
    <TableContainer>
      <Box sx={headerWrapperStyles}>
        <Typography variant="h2">Time log</Typography>
        { cta && (
          <Button variant="outlined" href={cta}>
            Request approval of hours
          </Button>
        )}
      </Box>
      <Table sx={tableStyles}>
        <TableHead>
          <TableRow>
            <TableCell>Date/Time</TableCell>
            <TableCell>Hours Calculated</TableCell>
            <TableCell>
              How have you contributed to the goals/mission of the organization?
            </TableCell>
            <TableCell>Learning outcomes</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderedBody}</TableBody>
      </Table>
      {renderedPager}
    </TableContainer>
  );

  return (
    <Paper sx={contentStyles}>
      {renderedTable}
    </Paper>
  );
}
