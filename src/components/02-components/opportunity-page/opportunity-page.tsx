import {Box, Button, Divider, Paper, Typography, useTheme} from '@mui/material';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Link from '../../01-elements/link/link';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export type OpportunityPageProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  title: string;
  description: string;
  selectURL: string;
  address: string;
  type: string;
  timeCommitment: string;
  term: string;
  learningOutcomes: string;
  training: string;
  other: string;
  risk: string;
};

export default function OpportunityPage({
  breadcrumb,
  title,
  description,
  selectURL,
  address,
  type,
  timeCommitment,
  term,
  learningOutcomes,
  training,
  other,
  risk,
}: OpportunityPageProps) {
  const theme = useTheme();

  const titleContainerStyles = {
    mb: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      gap: theme.spacing(2),
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
  };

  const titleStyles = {
    color: 'primary.main',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      mb: theme.spacing(2),
    },
  };

  const subtitle = {
    mb: theme.spacing(2),
    mt: theme.spacing(2),
    color: 'primary.main',
  };

  const paperStyles = {
    p: theme.spacing(3),
    mb: theme.spacing(3),
    fontSize: '1rem',
  };

  const style75 = {
    width: '73%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  };

  const style25 = {
    width: '23%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      pt: theme.spacing(2),
    },
  };

  const style50 = {
    width: '48%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  };

  const generalDetailsContainerStyles = {
    mb: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    ul: {
      m: 0,
      p: 0,
      listStyleType: 'none',
      li: {
        mb: theme.spacing(1),
      }
    }
  };

  const iconStyles = {
    fontSize: '1rem',
    color: 'black',
    verticalAlign: '-4px',
    mr: theme.spacing(1),
  };

  const dividerStyles = {
    width: '100%',
    mt: theme.spacing(5),
    mb: theme.spacing(5),
  };

  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <article>
      <Breadcrumbs items={breadcrumb} />
      <Box sx={titleContainerStyles}>
        <Typography variant="h1" sx={titleStyles}>
          {title}
        </Typography>
      </Box>
      <Paper sx={paperStyles}>
        <Box sx={generalDetailsContainerStyles}>
          <Box sx={style75}>
            <Typography component="h3" variant="h3" sx={subtitle}>
              Opportunity Summary
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <Button
              variant="contained"
              component={Link}
              href={selectURL}
              sx={{ flexShrink: 0, fontWeight: '700' }}
            >
              Select
            </Button>
          </Box>
          <Box sx={style25}>
            <ul>
              <li><FmdGoodIcon sx={iconStyles} />{address}</li>
              <li>{capitalizedType}</li>
              <li>{timeCommitment}</li>
              <li>{term}</li>
            </ul>
          </Box>
        </Box>
        <Divider sx={dividerStyles} />
        <Box sx={generalDetailsContainerStyles}>
          <Box sx={style50}>
            <Typography component="h3" variant="h3" sx={subtitle}>
              Learning Outcomes
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: learningOutcomes }} />
            <Typography component="h3" variant="h3" sx={subtitle}>
              Risk
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: risk }} />
          </Box>
          <Box sx={style50}>
            <Typography component="h3" variant="h3" sx={subtitle}>
              Training
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: training }} />
            <Typography component="h3" variant="h3" sx={subtitle}>
              Others Details
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: other }} />
          </Box>
        </Box>
      </Paper>
    </article>
  );
}
