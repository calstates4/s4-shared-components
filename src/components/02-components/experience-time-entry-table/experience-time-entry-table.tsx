import {
  useTheme,
  Button,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from '@mui/material';
import Pager from '../../01-elements/pager/pager';
import Link from '../../01-elements/link/link';

export type ExperienceTimeEntriesTableProps = {
  url: string;
  totalItems: number,
  itemsPerPage: number,
  currentPage: number,
  items?: {
    id: string;
    state: string;
    startDate: string;
    endDate: string;
    calculatedHours: number;
    description: string;
    learningOutcomes: string;
  }[],
}



export default function ExperienceTimeEntriesTable({
  url,
  totalItems,
  itemsPerPage,
  currentPage,
  items,
}: ExperienceTimeEntriesTableProps) {
  const theme = useTheme();

  // Styles.
  const paperStyles = {
    p: theme.spacing(3),
    mb: theme.spacing(3),
    fontSize: '1rem',
  };

  const tableStyles = {
    minWidth: '56.25rem',
    th: {
      fontWeight: 700,
    }
  }

  // Render elements.
  const renderedTable = items && items.length
    ? (
    <TableContainer component={Paper} sx={paperStyles}>
      <Typography sx={{mb: theme.spacing(2)}} component="h2" variant="h2">
        Time log
      </Typography>
      <Table sx={tableStyles}>
        <TableHead>
          <TableRow>
            <TableCell>Date/Time</TableCell>
            <TableCell>Hours Calculated</TableCell>
            <TableCell>How have you contributed to the goals/mission of the organization?</TableCell>
            <TableCell>Learning outcomes</TableCell>
            <TableCell aria-label="actions">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{`${row.startDate} ${row.endDate}`}</TableCell>
              <TableCell>{row.calculatedHours}</TableCell>
              <TableCell><div dangerouslySetInnerHTML={{ __html: row.description }} /></TableCell>
              <TableCell><div dangerouslySetInnerHTML={{ __html: row.learningOutcomes }} /></TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  component={Link}
                  sx={{fontWeight: 700, mr: theme.spacing(1)}}
                  href='/hola'
                  >
                    Approve
                  </Button>
                  <Button
                  variant="outlined"
                  component={Link}
                  sx={{fontWeight: 700}}
                  href='/hola'
                  >
                    Needs update
                  </Button>
              </TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
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
    </TableContainer>)
    : (
      <Paper sx={paperStyles}>
        <Typography component="h2" variant="h2">
          No time tracked yet
        </Typography>
      </Paper>
    );

  return (renderedTable);
}