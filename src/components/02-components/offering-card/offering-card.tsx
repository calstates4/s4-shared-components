import { Box, Button, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import Link from '../../01-elements/link/link';

type CardOfferingProps = {
  title: string;
  url: string;
  editUrl: string;
  published: boolean;
  type: string;
  departments?: string;
  startDate: string;
  endDate: string;
  timeCommitment: string;
};

export default function CardOffering({
  title,
  url,
  editUrl,
  published,
  type,
  departments,
  startDate,
  endDate,
  timeCommitment,
}: CardOfferingProps) {
  const theme = useTheme();

  const publishedStatus = published ? 'published' : 'unpublished';

  const offeringStates: Record<string, {
    label: string;
    backgroundColor: string;
  }> = {
    published: {
      label: 'PUBLISHED',
      backgroundColor: 'success.light',
    },
    unpublished: {
      label: 'UNPUBLISHED',
      backgroundColor: 'warning.light',
    }
  }

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

  const headerContainerStyles = {
    mb: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }
  };

  const statusStyles = {
    display: 'inline-block',
    fontSize: '0.75rem',
    lineHeight: 1,
    px: theme.spacing(1),
    py: theme.spacing(0.5),
    [theme.breakpoints.up('sm')]: {
      ml: theme.spacing(1.5),
    }
  };

  const textGroupContainerStyles = {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      columnGap: theme.spacing(5),
      mb: theme.spacing(1),
    }
  }

  const textContainerStyles = {
    mb: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      mb: 0,
    }
  };

  const textStyles = {
    [theme.breakpoints.up('sm')]: {
      display: 'inline-block',
      mr: theme.spacing(0.5),
    }
  };

  return (
    <Paper sx={containerStyles} component="article">
      <Box sx={headerContainerStyles}>
        <Typography variant="h2">{title}</Typography>
        <Typography sx={{...statusStyles, backgroundColor: offeringStates[publishedStatus].backgroundColor}} component="span">{offeringStates[publishedStatus].label}</Typography>
      </Box>
      <Box sx={textGroupContainerStyles}>
        <Box sx={textContainerStyles}>
          <Typography sx={textStyles} variant="h4">Department:</Typography>
          <Typography sx={textStyles}>{departments}</Typography>
        </Box>
        <Box sx={textContainerStyles}>
          <Typography sx={textStyles} variant="h4">Type:</Typography>
          <Typography sx={textStyles}>{type}</Typography>
        </Box>
        <Box sx={textContainerStyles}>
          <Typography sx={textStyles} variant="h4">Time commitment:</Typography>
          <Typography sx={textStyles}>{timeCommitment}</Typography>
        </Box>
      </Box>
      <Box sx={textGroupContainerStyles}>
        <Box sx={textContainerStyles}>
          <Typography sx={textStyles} variant="h4">Start date:</Typography>
          <Typography sx={textStyles}>{startDate}</Typography>
        </Box>
        <Box sx={textContainerStyles}>
        <Typography sx={textStyles} variant="h4">End date:</Typography>
        <Typography sx={textStyles}>{endDate}</Typography>
        </Box>
      </Box>
      <Box sx={{mt: theme.spacing(2)}}>
        <Button
          variant="outlined"
          component={Link}
          href={url}
        >
          MORE DETAILS</Button>
        <Button href={editUrl}>EDIT</Button>
      </Box>
    </Paper>
  );
}
