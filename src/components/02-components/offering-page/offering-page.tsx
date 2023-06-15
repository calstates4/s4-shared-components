import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Link from '../../01-elements/link/link';
import { ReactNode } from 'react';

type OfferingPageProps = {
  title: string;
  url: string;
  editUrl: string;
  department?: string;
  description: string;
  type: string;
  healthSafety?: string;
  focusPopulation: string;
  focusAreas: string;
  subFocusAreas?: string;
  activities: string;
  timeCommitment: string;
  address?: string;
  maxStudents: number;
  requiredLanguages?: string;
  preferredLanguages?: string;
  startDate: string;
  endDate: string;
  primaryContact: string;
  timeApprovers: string;
  formSigners: string;
  observers: string;
  training?: string;
  published: boolean;
  children?: ReactNode
};

export default function OfferingPage({
  title,
  url,
  editUrl,
  department,
  description,
  type,
  healthSafety,
  focusPopulation,
  focusAreas,
  subFocusAreas,
  activities,
  timeCommitment,
  address,
  maxStudents,
  requiredLanguages,
  preferredLanguages,
  startDate,
  endDate,
  primaryContact,
  timeApprovers,
  formSigners,
  observers,
  training,
  published,
  children,
}: OfferingPageProps) {
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

  // Styles.
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
    [theme.breakpoints.down('sm')]: {
      mb: theme.spacing(2),
    },
  };

  const generalDetailsContainerStyles = {
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

  const twoColContainerStyles = {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      columnGap: theme.spacing(3)
    }
  };

  const paperStyles = {
    p: theme.spacing(3),
    mb: theme.spacing(3),
    fontSize: '1rem',
  };

  const leftColumnContainerStyles = {
    [theme.breakpoints.up('sm')]: {
      flex: '1 1 67%',
    }
  };

  const rightColumnContainerStyles = {
    [theme.breakpoints.up('sm')]: {
      flex: '1 1 33%',
    }
  };

  const contactContainerStyles = {
    mt: theme.spacing(1),
    pt: theme.spacing(1),
    borderTop: `1px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.up('md')]: {
      mt: 0,
      pt: 0,
      pl: theme.spacing(2),
      borderTop: 'none',
      borderLeft: `1px solid ${theme.palette.secondary.main}`,


    }
  }

  const definitionListContainerStyles = {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      columnGap: theme.spacing(5),
    }
  }

  const inlineDefinitionListStyles = {
    m: 0,
    mb: theme.spacing(0.5),
    dt: {
      display: 'inline',
      fontWeight: '700',
    },
    dd: {
      display: 'inline',
      ml: 0,
    },
    [theme.breakpoints.up('sm')]: {
      flex: '1 1 50%'
    },
    '> div': {
      mb: theme.spacing(0.5),
    }
  };

  const definitionListStyles = {
    ...inlineDefinitionListStyles,
    dt: {
      fontWeight: '700',
    },
    dd: {
      ml: 0,
    },
  };

  return (
    <article>
      <Breadcrumbs items={[{ title: 'Oferrings', url: '/offerings' }, { title, url }]} />
      <Box sx={titleContainerStyles}>
        <Typography variant="h1" sx={titleStyles}>
          {title}
        </Typography>
        <Button
          variant="contained"
          component={Link}
          href={editUrl}
          sx={{ flexShrink: 0 }}
        >
          Edit offering
        </Button>
      </Box>
      <Paper sx={paperStyles}>
        <Box sx={generalDetailsContainerStyles}>
          <Typography component="h2" variant="h2">General details</Typography>
          <Typography
            sx={{...statusStyles, backgroundColor: offeringStates[publishedStatus].backgroundColor}} component="span"
            variant="h5"
          >
            {offeringStates[publishedStatus].label}
          </Typography>
        </Box>
        <Box sx={twoColContainerStyles}>
          <Box sx={leftColumnContainerStyles}>
            <Box sx={definitionListContainerStyles}>
              <Box sx={inlineDefinitionListStyles} component="dl">
                <dt>Department: </dt>
                <dd>{department}</dd>
              </Box>
              <Box sx={inlineDefinitionListStyles} component="dl">
                <dt>Address: </dt>
                <dd>{address}</dd>
              </Box>
            </Box>
            <Box sx={definitionListContainerStyles}>
              <Box sx={inlineDefinitionListStyles} component="dl">
                <dt>Type: </dt>
                <dd>{type}</dd>
              </Box>
              <Box sx={inlineDefinitionListStyles} component="dl">
                <dt>Max number of students: </dt>
                <dd>{maxStudents}</dd>
              </Box>
            </Box>
            <Box sx={definitionListContainerStyles}>
              <Box sx={definitionListStyles} component="dl">
                <dt>Time commitment: </dt>
                <dd>{timeCommitment}</dd>
              </Box>
              <Box sx={definitionListStyles} component="dl">
                <dt>Dates: </dt>
                <dd>{`Start: ${startDate}`}</dd>
                <dd>{`End: ${endDate}`}</dd>
              </Box>
            </Box>
            <Box sx={inlineDefinitionListStyles} component="dl">
              <div>
                <dt>Required Language(s) other than English: </dt>
                <dd>{requiredLanguages}</dd>
              </div>
              <div>
                <dt>Preferred Language(s) other than English: </dt>
                <dd>{preferredLanguages}</dd>
              </div>
            </Box>
          </Box>
          <Box sx={{...rightColumnContainerStyles, ...contactContainerStyles}}>
            <Typography sx={{mb: theme.spacing(0.5)}}component="h3" variant="h4">Contact and other roles</Typography>
            <Box sx={inlineDefinitionListStyles} component="dl">
              <div>
                <dt>Primary contact: </dt>
                <dd>{primaryContact}</dd>
              </div>
              <div>
                <dt>Time approver(s): </dt>
                <dd>{timeApprovers}</dd>
              </div>
              <div>
                <dt>Form Signer(s): </dt>
                <dd>{formSigners}</dd>
              </div>
              <div>
                <dt>Observer(s): </dt>
                <dd>{observers}</dd>
              </div>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Paper sx={paperStyles}>
        <Typography component="h2" variant="h2">Description</Typography>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Paper>
      {healthSafety && (
        <>
          <Paper sx={paperStyles}>
            <Typography component="h2" variant="h2">Health & Safety</Typography>
            <div dangerouslySetInnerHTML={{ __html: healthSafety }} />
          </Paper>
        </>
      )}
      {training && (
        <>
          <Paper sx={paperStyles}>
            <Typography component="h2" variant="h2">Training</Typography>
            <div dangerouslySetInnerHTML={{ __html: training }} />
          </Paper>
        </>
      )}
      <Box sx={twoColContainerStyles}>
        <Paper sx={{...paperStyles, ...leftColumnContainerStyles}}>
        <Typography sx={{mb: theme.spacing(1)}}component="h2" variant="h2">Focus</Typography>
        <Box sx={inlineDefinitionListStyles} component="dl">
          <div>
            <dt>Population: </dt>
            <dd>{focusPopulation}</dd>
          </div>
          <div>
            <dt>Areas: </dt>
            <dd>{focusAreas}</dd>
          </div>
          <div>
            <dt>Sub focus areas: </dt>
            <dd>{subFocusAreas}</dd>
          </div>
        </Box>
        </Paper>
        <Paper sx={{...paperStyles, ...rightColumnContainerStyles}}>
          <Typography component="h2" variant="h2">Activities</Typography>
          <Typography>{activities}</Typography>
        </Paper>
      </Box>
      {children &&
        <Paper sx={paperStyles}>
          <Typography component="h2" variant="h2">Experiences related to this offering</Typography>
          {children}
        </Paper>
      }
    </article>
  );
}
