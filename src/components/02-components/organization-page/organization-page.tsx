import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Link from '../../01-elements/link/link';
import Pager from '../../01-elements/pager/pager';

export type OrganizationPageProps = {
  title: string;
  url: string;
  editUrl: string;
  description?: string;
  healthSafety?: string;
  programs?: string;
  industry: string;
  type: string;
  focusPopulation: string;
  focusAreas: string;
  address?: string;
  phone?: string;
  email?: string;
  webpage?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
  mainContact: {
    name: string;
    role?: string;
    phone: string;
    email: string;
  };
  departments?: {
    pages: number;
    currentPage: number;
    items: {
      id: string;
      name: string;
      description: string;
    }[];
  };
};

export default function OrganizationPage({
  title,
  url,
  editUrl,
  description,
  healthSafety,
  programs,
  industry,
  type,
  focusPopulation,
  focusAreas,
  address,
  phone,
  email,
  webpage,
  mainContact,
  departments,
}: OrganizationPageProps) {
  const theme = useTheme();
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

  const definitionListStyles = {
    mt: theme.spacing(2),
    mb: 0,
    pt: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.black.main}`,
    dt: {
      display: 'inline',
      fontWeight: '700',
    },
    dd: {
      display: 'inline',
      ml: 0,
    },
    '> div:not(:last-child)': {
      mb: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      flex: '1 1 33%',
      mt: 0,
      pt: 0,
      pl: theme.spacing(2),
      borderTop: 'none',
      borderLeft: `1px solid ${theme.palette.black.main}`,
    },
  };

  const orgDetailsStyles = {
    ul: {
      m: 0,
      p: 0,
      listStyleType: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: theme.spacing(2),
      },
    },
    'li + li': {
      [theme.breakpoints.down('sm')]: {
        mt: theme.spacing(1),
      },
    },
    [theme.breakpoints.up('md')]: {
      flex: '1 1 67%',
    },
  };

  const mainContactStyles = {
    mt: theme.spacing(3),
    ul: {
      m: 0,
      p: 0,
      listStyleType: 'none',
    },
    'li + li': {
      mt: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      mt: 0,
      flex: '1 1 33%',
    },
  };

  const detailsTitleStyles = {
    mb: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      mb: theme.spacing(3),
    },
  };

  const iconStyles = {
    fontSize: '1rem',
    color: 'primary.dark',
    verticalAlign: '-4px',
    mr: theme.spacing(1),
  };

  const deptsListStyles = {
    m: `${theme.spacing(3)} 0 0`,
    p: 0,
    listStyleType: 'none',
  };

  const deptsItemStyles = {
    py: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.secondary.light}`,
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
  };

  const deptsItemContentStyles = {
    mt: theme.spacing(1),
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
    },
  };

  const deptsItemDescStyles = {
    flex: '1 0 100%',
    [theme.breakpoints.up('md')]: {
      flex: 'initial',
      mr: theme.spacing(5),
    },
  };

  const deptsItemActionStyles = {
    display: 'flex',
    gap: theme.spacing(2),
    flexWrap: 'wrap',
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      flexWrap: 'nowrap',
    },
  };

  return (
    <article>
      <Breadcrumbs items={[{ title: 'Organization', url }]} />
      <Box sx={titleContainerStyles}>
        <Typography variant="h1" color="primary.main" sx={titleStyles}>
          {title}
        </Typography>
        <Button
          variant="contained"
          component={Link}
          href={editUrl}
          sx={{ flexShrink: 0 }}
        >
          Edit Organization
        </Button>
      </Box>
      <Paper sx={paperStyles}>
        <Box sx={{ flex: '1 1 67%' }}>
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }} />
          )}
          {healthSafety && (
            <>
              <Typography component="h2" variant="h3">
                Additional requirements and/or considerations
              </Typography>
              <p dangerouslySetInnerHTML={{ __html: healthSafety }} />
            </>
          )}
        </Box>
        <Box component="dl" sx={definitionListStyles}>
          {programs && (
            <div>
              <dt>Program(s): </dt>
              <dd>{programs}</dd>
            </div>
          )}
          <div>
            <dt>Industry: </dt>
            <dd>{industry}</dd>
          </div>
          <div>
            <dt>Type: </dt>
            <dd>{type}</dd>
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
      </Paper>
      <Paper sx={paperStyles}>
        <Box sx={orgDetailsStyles}>
          <Typography component="h2" variant="h3" sx={detailsTitleStyles}>
            Organization Details
          </Typography>
          <Box component="ul">
            {address && (
              <li>
                <PlaceIcon sx={iconStyles} />
                {address}
              </li>
            )}
            {email && (
              <li>
                <MailIcon sx={iconStyles} />
                <Link href={`mailto:${email}`}>{email}</Link>
              </li>
            )}
            {phone && (
              <li>
                <PhoneIcon sx={iconStyles} />
                {phone}
              </li>
            )}
            {webpage && (
              <li>
                <WebAssetIcon sx={iconStyles} />
                <Link href={webpage}>{webpage}</Link>
              </li>
            )}
          </Box>
        </Box>
        <Box sx={mainContactStyles}>
          <Typography component="h2" variant="h3" sx={detailsTitleStyles}>
            Main Contact
          </Typography>
          <Box component="ul">
            <li>
              <strong>Name:</strong> {mainContact.name}
            </li>
            {mainContact.role && (
              <li>
                <strong>Role:</strong> {mainContact.role}
              </li>
            )}
            <li>
              <PhoneIcon sx={iconStyles} />
              {mainContact.phone}
            </li>
            <li>
              <MailIcon sx={iconStyles} />
              <Link href={`mailto:${mainContact.email}`}>
                {mainContact.email}
              </Link>
            </li>
          </Box>
        </Box>
      </Paper>
      {departments && (
        <Paper sx={{ p: theme.spacing(3) }}>
          <Typography component="h2" variant="h3">
            Departments
          </Typography>
          <Box component="ul" sx={deptsListStyles}>
            {departments.items.map((item) => (
              <Box component="li" key={item.id} sx={deptsItemStyles}>
                <Typography component="h3" variant="h4">
                  {item.name}
                </Typography>
                <Box sx={deptsItemContentStyles}>
                  <Box sx={deptsItemDescStyles}>{item.description}</Box>
                  <Box sx={deptsItemActionStyles}>
                    <Button
                      variant="outlined"
                      component={Link}
                      href={`/organization/offerings?department=${item.id}`}
                      sx={{ flexShrink: 0 }}
                    >
                      See Offerings
                    </Button>
                    <Button
                      variant="outlined"
                      component={Link}
                      href={`/organization/staff?department=${item.id}`}
                      sx={{ flexShrink: 0 }}
                    >
                      See Staff
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Pager
            baseUrl={url}
            count={departments.pages}
            page={departments.currentPage}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: theme.spacing(3),
            }}
          />
        </Paper>
      )}
    </article>
  );
}
