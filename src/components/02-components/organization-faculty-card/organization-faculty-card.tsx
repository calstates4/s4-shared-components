import {ElementType} from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Link from '../../01-elements/link/link';


export type OrganizationFacultyCardProps = {
  id: string;
  title: string;
  address: string;
  description: string;
  url: string;
  industryType: string;
  focusPopulation: string;
  focusAreas: string;
};

export default function OrganizationFacultyCard({
  title,
  address,
  description,
  url,
  industryType,
  focusPopulation,
  focusAreas,
}: OrganizationFacultyCardProps) {
  const theme = useTheme();

  // Styles.
  const iconLabel = {
    fontSize: '14px',
    color: '#7B7B7B',
    fontWeight: '500',
    mb: '15px',
  };

  const iconStyles = {
    fontSize: '14px',
    color: 'primary.dark',
    verticalAlign: '-2px',
    mr: '4px',
  };

  const paperStyles = {
    p: theme.spacing(3),
    mb: theme.spacing(3),
  };

  const twoColContainerStyles = {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      columnGap: "20px",
    },
  };

  const leftColumnContainerStyles = {
    [theme.breakpoints.up('sm')]: {
      flex: '1 1 67%',
    },
  };

  const rightColumnContainerStyles = {
    [theme.breakpoints.up('sm')]: {
      flex: '1 1 33%',
    },
  };

  const inlineDefinitionListStyles = {
    m: 0,
    mb: '0',
    dt: {
      display: 'inline',
      fontWeight: '700',
    },
    dd: {
      display: 'inline',
      ml: 0,
    },
    [theme.breakpoints.up('sm')]: {
      flex: '1 1 50%',
    },
    '> div:not(:last-child)': {
      mb: theme.spacing(3),
    },
  };

  const contactContainerStyles = {
    mt: '20px',
    pt: '20px',
    borderTop: `1px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.up('md')]: {
      mt: 0,
      pt: 0,
      pl: '20px',
      borderTop: 'none',
      borderLeft: `1px solid ${theme.palette.secondary.main}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <>
      <Paper sx={paperStyles}>
        <Box sx={twoColContainerStyles}>
          <Box sx={leftColumnContainerStyles}>
            <Typography component="h2" variant="h1" sx={{ color: 'primary.dark', }}>
              { title }
            </Typography>
            <Typography sx={iconLabel}><FmdGoodIcon sx={iconStyles} />{address}</Typography>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <Button
              variant="outlined"
              component={Link}
              href={url}
              sx={{ flexShrink: 0, mt: '15px', }}
            >
              View details
            </Button>
          </Box>
          <Box
            sx={{ ...rightColumnContainerStyles, ...contactContainerStyles }}
          >
            <Box sx={inlineDefinitionListStyles} component="dl">
              <div>
                <dt>Type: </dt>
                <dd>{industryType}</dd>
              </div>
              <div>
                <dt>Population: </dt>
                <dd>{focusPopulation}</dd>
              </div>
              <div>
                <dt>Areas: </dt>
                <dd>{focusAreas}</dd>
              </div>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
