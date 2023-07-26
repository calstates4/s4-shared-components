import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Box,
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
import { experienceStatusInfo } from '../../../lib/utils';
import Link from '../../01-elements/link/link';

export type PastExperiencesListProps = {
  experienceInfo: {
    id: string;
    experience: string;
    status: string;
    url: string;
  }[];
  ctaLink: string;
};

export default function PastExperiencesList({
  experienceInfo,
  ctaLink,
}: PastExperiencesListProps) {
  const theme = useTheme();

  const states = experienceStatusInfo(theme);

  const headingStyles = {
    mb: theme.spacing(1),
    fontWeight: '700',
    color: 'primary.main',
  };

  const tableStyles = {
    th: {
      fontWeight: 700,
    },
  };

  const linkStyles = {
    display: 'flex',
    alignItems: 'center',
    mb: theme.spacing(2),
    textTransform: 'uppercase',
    fontWeight: 700,
    textDecoration: 'none',
  };

  const iconStyles = {
    ml: theme.spacing(2),
  };

  // Components
  const renderedBody = experienceInfo.map((row) => {
    return (
      <TableRow key={row.id}>
        <TableCell>
          <Link href={row.url}>{row.experience}</Link>
        </TableCell>
        <TableCell>{states[row.status].label}</TableCell>
      </TableRow>
    );
  });

  const renderTable = (
    <Table>
      <TableHead>
        <TableRow sx={tableStyles}>
          <TableCell>Experience</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{renderedBody}</TableBody>
    </Table>
  );

  return (
    <Box>
      <Typography sx={headingStyles} variant="h2">
        Past experiences
      </Typography>
      <Link href={ctaLink} sx={linkStyles}>
        See all
        <ArrowForwardIcon sx={iconStyles} />
      </Link>
      <TableContainer component={Paper} sx={{ p: theme.spacing(3) }}>
        {renderTable}
      </TableContainer>
    </Box>
  );
}
