import { Box, Button, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import DocumentIcon from '@mui/icons-material/LibraryBooks';
import Link from '../../01-elements/link/link';

export type CampusCardProps = {
  id: string;
  title: string;
  location?: string;
  website?: string;
  programs?: string;
  agreement?: {
    state: string;
    name: string;
    agreementDocument?: string;
    expireDate?: string;
  };
  initiatePartnershipLink?: string;
  renewPartnershipLink?: string;
  reactivePartnershipLink?: string;
};

export default function CampusCard({
  title,
  location,
  website,
  programs,
  agreement,
  initiatePartnershipLink,
  renewPartnershipLink,
  reactivePartnershipLink,
}: CampusCardProps) {
  const theme = useTheme();

  const agreementStates: Record<
    string,
    {
      label: string;
      color: string;
      expireDateVerb: string;
      buttonText: string;
      buttonLink?: string;
    }
  > = {
    draft: {
      label: 'Pending approval',
      color: '#e5c7ff',
      expireDateVerb: '',
      buttonText: '',
      buttonLink: '',
    },
    published: {
      label: 'Active',
      color: 'success.light',
      expireDateVerb: 'expiring',
      buttonText: 'Download Agreement',
      buttonLink: '',
    },
    expired: {
      label: 'Expired',
      color: 'warning.light',
      expireDateVerb: 'expired',
      buttonText: 'Renew Agreement',
      buttonLink: renewPartnershipLink,
    },
    archived: {
      label: 'Archived',
      color: 'secondary.light',
      expireDateVerb: 'expired',
      buttonText: 'Request to Reactivate',
      buttonLink: reactivePartnershipLink,
    },
  };

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

  console.log(theme.palette);

  const contentContainerStyles = {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      gap: theme.spacing(6),
    },
  };

  const campusInfoStyles = {
    pt: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      flex: '1 1 66%',
    },
  };

  const agreementStyles = {
    borderTop: `1px solid ${theme.palette.secondary.light}`,
    mt: theme.spacing(2),
    pt: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      flex: '0 0 34%',
      mt: 0,
      pl: theme.spacing(3),
      pb: theme.spacing(1),
      borderTop: 'none',
      borderLeft: `1px solid ${theme.palette.secondary.light}`,
    },
  };

  const campusDataListStyles = {
    p: 0,
    mt: 0,
    mb: theme.spacing(2),
    listStyleType: 'none',
    li: {
      display: 'inline-flex',
      alignItems: 'center',
      mr: theme.spacing(2),
    },
  };

  const iconStyles = {
    fontSize: '1rem',
    mr: theme.spacing(1),
  };

  const statusStyles = {
    display: 'inline-block',
    fontSize: '0.75rem',
    lineHeight: 1,
    ml: theme.spacing(1.5),
    px: theme.spacing(1),
    py: theme.spacing(0.5),
  };

  const agreementInfoStyles = {
    display: 'flex',
    mb: theme.spacing(2),
    '& p': {
      margin: 0,
    },
    em: {
      fontSize: '0.8125rem',
    },
  };

  const renderedAgreement = agreement ? (
    <Box>
      <Box sx={{ display: 'flex', mb: theme.spacing(2) }}>
        <Typography variant="h4" component="h3">
          Agreements
        </Typography>
        <Typography
          component="span"
          sx={{
            ...statusStyles,
            backgroundColor: agreementStates[agreement.state].color,
          }}
        >
          {agreementStates[agreement.state].label}
        </Typography>
      </Box>
      {agreement.state !== 'draft' ? (
        <>
          <Box sx={agreementInfoStyles}>
            <DocumentIcon
              sx={{
                fontSize: '1rem',
                mt: theme.spacing(0.75),
                mr: theme.spacing(2),
              }}
            />
            <Box>
              <p>
                {agreement.agreementDocument && (
                  <Link href={agreement.agreementDocument}>
                    {agreement.name}
                  </Link>
                )}
              </p>
              <p>
                <em>{`Agreement ${
                  agreementStates[agreement.state].expireDateVerb
                } on ${agreement.expireDate}`}</em>
              </p>
            </Box>
          </Box>
          {agreement.state === 'published' && agreement.agreementDocument ? (
            <Button
              variant="outlined"
              component={Link}
              href={agreement.agreementDocument}
            >
              {agreementStates[agreement.state].buttonText}
            </Button>
          ) : null}
          {agreement.state !== 'published' &&
          agreementStates[agreement.state].buttonLink ? (
            <Button
              variant="outlined"
              component={Link}
              href={agreementStates[agreement.state].buttonLink}
            >
              {agreementStates[agreement.state].buttonText}
            </Button>
          ) : null}
        </>
      ) : (
        <Typography>
          We have received your request to initiate partnership and it is being
          reviewed for approval.
        </Typography>
      )}
    </Box>
  ) : null;

  return (
    <Paper sx={containerStyles} component="article">
      <Typography variant="h2">{title}</Typography>
      <Box sx={contentContainerStyles}>
        <Box sx={campusInfoStyles}>
          {(location || website) && (
            <Box component="ul" sx={campusDataListStyles}>
              {location && (
                <li>
                  <PlaceIcon sx={iconStyles} />
                  {location}
                </li>
              )}
              {website && (
                <li>
                  <WebAssetIcon sx={iconStyles} />
                  <Link href={website}>{website}</Link>
                </li>
              )}
            </Box>
          )}
          {programs && (
            <>
              <Typography variant="h4">Programs</Typography>
              <Typography>{programs}</Typography>
            </>
          )}
        </Box>
        <Box sx={agreementStyles}>
          {agreement ? (
            renderedAgreement
          ) : (
            <>
              <Typography sx={{ mb: theme.spacing(2) }}>
                You do not have a partnership with this campus yet.
              </Typography>
              {initiatePartnershipLink && (
                <Button
                  variant="contained"
                  component={Link}
                  href={initiatePartnershipLink}
                >
                  Initiate Partnership
                </Button>
              )}
            </>
          )}
        </Box>
      </Box>
    </Paper>
  );
}
