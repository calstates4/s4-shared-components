import { useTheme,
  Button,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer } from '@mui/material';
import Link from '../../01-elements/link/link';
import Pager from '../../01-elements/pager/pager';

export type OfferingRelatedExperiencesTableRowProps = {
  id: string;
  studentName?: string;
  stundentLastname?: string;
  studentEmail?: string;
  campus?: string;
  signFormUrl: string;
  approveTimeUrl: string;
}

export type OfferingRelatedExperiencesTableProps = {
  url: string;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  items?: OfferingRelatedExperiencesTableRowProps[];
}

export default function OfferingRelatedExperiencesTable({
  url,
  totalItems,
  itemsPerPage,
  currentPage,
  items,
}: OfferingRelatedExperiencesTableProps) {
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

  // Render funtions.
  const renderedTable = items && items.length ? (
    <TableContainer component={Paper} sx={paperStyles}>
      <Typography sx={{mb: theme.spacing(2)}} component="h2" variant="h2">Experiences related to this offering</Typography>
      <Table sx={tableStyles}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Campus</TableCell>
            <TableCell aria-label="actions">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.studentName}</TableCell>
              <TableCell>{row.stundentLastname}</TableCell>
              <TableCell>{row.studentEmail}</TableCell>
              <TableCell>{row.campus}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  component={Link}
                  sx={{fontWeight: 700, mr: theme.spacing(1)}}
                  href={row.signFormUrl}
                  >
                    Sign forms
                  </Button>
                  <Button
                  variant="outlined"
                  component={Link}
                  sx={{fontWeight: 700}}
                  href={row.approveTimeUrl}
                  >
                    Approve time
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
    </TableContainer>
  ) : (
    <Paper sx={paperStyles}>
      <Typography component="h2" variant="h2">No Experiences related to this offering</Typography>
    </Paper>
  );

  return (renderedTable);
}