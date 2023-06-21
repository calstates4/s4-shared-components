import { Box, Button, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import Link from '../../01-elements/link/link';

export type OfferingCardProps = {
  id: string;
  title: string;
  url: string;
  editUrl: string;
  published: boolean;
  type?: string;
  department?: string;
  startDate?: string;
  endDate?: string;
  timeCommitment?: string;
};

export default function OfferingCard({
  title,
  url,
  editUrl,
  published,
  type,
  department,
  startDate,
  endDate,
  timeCommitment,
}: OfferingCardProps) {
  const theme = useTheme();

  const publishedStatus = published ? 'published' : 'unpublished';

  const offeringStates: Record<string, {
    label: string;
    backgroundColor: string;
  }> = {
    published: {
      label: 'Published',
      backgroundColor: 'success.dark',
    },
    unpublished: {
      label: 'Unpublished',
      backgroundColor: 'warning.main',
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
      alignItems: 'flex-start',
    }
  };

  const statusStyles = {
    display: 'inline-block',
    lineHeight: 1,
    borderRadius: theme.spacing(0.5),
    textTransform: 'uppercase',
    px: theme.spacing(1),
    py: theme.spacing(0.5),
    mt: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      ml: theme.spacing(1.5),
      mt: 0,

    }
  };

  const definitionListContainerStyles = {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      columnGap: theme.spacing(5),
      mb: theme.spacing(1),
    }
  }

  const definitionListStyles = {
    mt: 0,
    mb: theme.spacing(1),
    dt: {
      display: 'inline',
      fontWeight: '700',
    },
    dd: {
      display: 'inline',
      ml: 0,
    },
    [theme.breakpoints.up('sm')]: {
      mb: 0,
    }
  };

  return (
    <Paper sx={containerStyles} component="article">
      <Box sx={headerContainerStyles}>
        <Typography variant="h2" color="primary.main">{title}</Typography>
        {typeof published !== 'undefined' && (
          <Typography
            sx={{...statusStyles, backgroundColor: offeringStates[publishedStatus].backgroundColor}} component="span"
            variant="h5"
          >
            {offeringStates[publishedStatus].label}
          </Typography>
        )}
      </Box>
      <Box sx={definitionListContainerStyles}>
        {department && (
          <Box sx={definitionListStyles} component="dl">
            <dt>Department: </dt>
            <dd>{department}</dd>
          </Box>
        )}
        {type && (
          <Box sx={definitionListStyles} component="dl">
            <dt>Type: </dt>
            <dd>{type}</dd>
          </Box>
        )}
        {timeCommitment && (
          <Box sx={definitionListStyles} component="dl">
            <dt>Time commitment: </dt>
            <dd>{timeCommitment}</dd>
          </Box>
        )}
      </Box>
      <Box sx={definitionListContainerStyles}>
        {startDate && (
          <Box sx={definitionListStyles} component="dl">
            <dt>Start date: </dt>
            <dd>{startDate}</dd>
          </Box>
        )}
        {endDate && (
          <Box sx={definitionListStyles} component="dl">
            <dt>End date: </dt>
            <dd>{endDate}</dd>
          </Box>
        )}

      </Box>
      <Box sx={{mt: theme.spacing(2)}}>
        <Button
          variant="outlined"
          component={Link}
          href={url}
          sx={{
            mr: theme.spacing(1),
            fontWeight: 700
          }}
        >
          More Details</Button>
        <Button sx={{fontWeight: 700}} href={editUrl}>Edit</Button>
      </Box>
    </Paper>
  );
}
