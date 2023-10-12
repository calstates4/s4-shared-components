import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import TvIcon from '@mui/icons-material/Tv';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Link from '../../01-elements/link/link';

export type ProgramPageProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  title: string;
  description: string;
  opportunitiesUrl: string;
  joinProgramUrl: string;
  phone: string;
  mail: string;
  campusSite: string;
};

export default function ProgramPage({
  breadcrumb,
  title,
  description,
  opportunitiesUrl,
  joinProgramUrl,
  phone,
  mail,
  campusSite,
}: ProgramPageProps) {
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
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      mb: theme.spacing(2),
    },
  };
  const paperStyles = {
    p: theme.spacing(3),
    mb: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      gap: theme.spacing(3),
    },
  };
  const detailsTitleStyles = {
    mb: theme.spacing(2),
    mt: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      borderTop: `0px`,
      mb: theme.spacing(4),
      mt: '0',
    },
  };
  const detailsStyles = {
    borderTop: `1px solid ${theme.palette.black.main}`,
    [theme.breakpoints.up('md')]: {
      borderLeft: `1px solid ${theme.palette.black.main}`,
      borderTop: `0px`,
      pl: theme.spacing(2),
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
    color: 'primary.dark',
    verticalAlign: '-4px',
    mr: theme.spacing(1),
  };

  const btnStyles = {
    flexShrink: 0,
    mr: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      mb: theme.spacing(2),
      mr: '0',
      width: '100%',
    }
  };

  return (
    <article>
      <Breadcrumbs items={breadcrumb} />
      <Box sx={titleContainerStyles}>
        <Typography variant="h1" color="primary.main" sx={titleStyles}>
          {title}
        </Typography>
      </Box>
      <Paper sx={paperStyles}>
        <Box sx={{ flex: '1 1 60%' }}>
          <Typography variant="h3" color="primary.main" sx={titleStyles}>
            Program Description
          </Typography>
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }} />
          )}
          <Button
            variant="outlined"
            component={Link}
            href={opportunitiesUrl}
            sx={btnStyles}
          >
            SEE AVAILABLE OPPORTUNITIES
          </Button>
          <Button
            variant="contained"
            component={Link}
            href={joinProgramUrl}
            sx={btnStyles}
          >
            JOIN THIS PROGRAM
          </Button>
        </Box>
        <Box sx={detailsStyles}>
          <Typography component="h2" variant="h3" sx={detailsTitleStyles}>
            Contact us
          </Typography>
          <Box component="ul">
            {phone && (
              <li>
                <PhoneIcon sx={iconStyles} />
                {phone}
              </li>
            )}
            {mail && (
              <li>
                <MailIcon sx={iconStyles} />
                <Link href={`mailto:${mail}`}>
                  {mail}
                </Link>
              </li>
            )}
            {campusSite && (
              <li>
                <TvIcon sx={iconStyles} />
                <Link href={campusSite}>{campusSite} <ArrowOutwardIcon sx={iconStyles}/></Link>
              </li>
            )}
          </Box>
        </Box>
      </Paper>
    </article>
  );
}