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
import { useTheme } from '@mui/material/styles';
import Link from '../../01-elements/link/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type PastExpericiencesPageProps = {
  experienceInfo: { experience: string; status: string; }[];
  ctaLink: string;
};

export default function PastExpericiencesList({
  experienceInfo,
  ctaLink,
}: PastExpericiencesPageProps) {
  const theme = useTheme();

  // Styles.
  const contentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const headingStyles = {
    mb: theme.spacing(1),
    fontWeight: '700',
    color: 'primary.main',
  };

  const tableWrapperStyles = {
    flexBasis: '65%',
  };
  
  const tableStyle = {
    th: {
      fontWeight: 700,
    }
  }

  const cardPendingWrapperStyles = {
    flexBasis: '30%',
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    mb: theme.spacing(2),
    textTransform: 'uppercase',
    fontWeight: 700,
    textDecoration: 'none',
}

const iconStyle = {
  ml: theme.spacing(2),
}



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
    <Box sx={contentStyle}>
      <Box sx={tableWrapperStyles}>
        <Typography sx={headingStyles} variant="h2">
          Past experiences
        </Typography>
        <Link href={ctaLink} sx={linkStyle}>
          See all
          <ArrowForwardIcon sx={iconStyle}/>
        </Link>
        <Paper>
          {renderTable}
        </Paper>
      </Box>
    </Box>
  );
}
