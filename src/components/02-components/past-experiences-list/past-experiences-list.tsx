import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material';
import Link from '../../01-elements/link/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export type PastExpericiencesListProps = {
  experienceInfo: { experience: string; status: string }[];
  ctaLink: string;
};

export default function PastExpericiencesList({
  experienceInfo,
  ctaLink,
}: PastExpericiencesListProps) {
  const theme = useTheme();

  const headingStyles = {
    mb: theme.spacing(1),
    fontWeight: '700',
    color: 'primary.main',
  };

  const tableStyle = {
    th: {
      fontWeight: 700,
    },
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    mb: theme.spacing(2),
    textTransform: 'uppercase',
    fontWeight: 700,
    textDecoration: 'none',
  };

  const iconStyle = {
    ml: theme.spacing(2),
  };

  // Components
  const renderedHeader = ['Experience', 'Status'].map((label) => {
    return <TableCell>{label}</TableCell>;
  });

  const renderedBody = experienceInfo.map((row) => {
    return (
      <TableRow>
        <TableCell>{row.experience}</TableCell>
        <TableCell>{row.status}</TableCell>
      </TableRow>
    );
  });

  const renderTable = (
    <Table>
      <TableHead>
        <TableRow sx={tableStyle}>{renderedHeader}</TableRow>
      </TableHead>
      <TableBody>{renderedBody}</TableBody>
    </Table>
  );

  return (
    <Box>
      <Typography sx={headingStyles} variant="h2">
        Past experiences
      </Typography>
      <Link href={ctaLink} sx={linkStyle}>
        See all
        <ArrowForwardIcon sx={iconStyle} />
      </Link>
      <Paper>{renderTable}</Paper>
    </Box>
  );
}
