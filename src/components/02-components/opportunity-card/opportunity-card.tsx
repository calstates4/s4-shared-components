import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlaceIcon from '@mui/icons-material/Place';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
  useTheme,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import Link from '../../01-elements/link/link';

export type OpportunityCardProps = {
  id: string | number;
  title: string;
  url: string;
  destinationUrl: string;
  location?: string;
  type?: string;
  timeCommitment?: string;
  termPeriod?: string;
  program?: string;
  description?: string;
  cardSelected?: boolean;
  requirements?: string;
  approvalState?: boolean;
};

export default function OpportunityCard({
  id,
  title,
  url,
  destinationUrl,
  location,
  type,
  timeCommitment,
  termPeriod,
  program,
  description,
  cardSelected,
  requirements,
  approvalState,
}: OpportunityCardProps) {
  const theme = useTheme();

  const approvalStatus = approvalState ? 'reviewing' : 'approved';

  const approvalStates: Record<
    string,
    {
      label: string;
      backgroundColor: string;
    }
  > = {
    approved: {
      label: 'approved',
      backgroundColor: '',
    },
    reviewing: {
      label: 'reviewing',
      backgroundColor: 'warning.main',
    },
  };

  // Styles.
  const statusStyles = {
    borderRadius: theme.spacing(0.5),
    display: 'inline-flex',
    textTransform: 'capitalize',
    fontSize: '0.875rem',
    fontWeight: '700',
    px: theme.spacing(1),
    py: theme.spacing(0.5),
    mt: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      mt: 0,
    },

    'svg': {
      maxWidth: '20px',
      height: 'auto',
    },

    '.statusStrutureStyles': {
      display: 'flex',
      gap: '5px',

      '& p': {
        margin: 0,
        padding: 0,
      }
    },
  };

  const accordionSummaryStyles = {
    '& .MuiAccordionSummary-expandIconWrapper': {
      mt: theme.spacing(1.5),
      alignSelf: 'flex-start',
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      mt: theme.spacing(2.5),
    },
  };

  const titleContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: theme.spacing(2),
    rowGap: theme.spacing(1),
  };

  const subtitleContaierStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    alignSelf: 'center',
    alignItems: 'flex-start',
  };

  const subtitleStyles = {
    pr: theme.spacing(1),
    '&:not(:last-child)': {
      borderRight: `1px solid ${theme.palette.secondary.main}`,
    },
  };

  const iconStyles = {
    fontSize: '1rem',
    color: 'primary.dark',
    verticalAlign: '-2px',
    mr: theme.spacing(0.5),
  };

  const buttonsContainerSyles = {
    display: 'flex',
    mt: theme.spacing(2),
    gap: theme.spacing(1),
    flexWrap: 'wrap',
  };

  return (
    <article>
      <Accordion
        defaultExpanded={ cardSelected ? true : false}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'primary.dark' }} />}
          aria-controls={`opportunity-content-${id}`}
          id={`opportunity-header-${id}`}
          sx={accordionSummaryStyles}
        >
          <Box sx={titleContainerStyles}>
            <Typography variant="h2">{title}</Typography>
            <Box sx={subtitleContaierStyles}>
              {location && (
                <Typography sx={subtitleStyles}>
                  <PlaceIcon sx={iconStyles} />
                  {location}
                </Typography>
              )}
              {type && <Typography sx={subtitleStyles}>{type}</Typography>}
              {timeCommitment && (
                <Typography sx={subtitleStyles}>{timeCommitment}</Typography>
              )}
              {termPeriod && (
                <Typography sx={subtitleStyles}>{termPeriod}</Typography>
              )}

              {approvalState && (
                <Typography
                  sx={{
                    ...statusStyles,
                    backgroundColor: approvalStates[approvalStatus].backgroundColor,
                  }}
                  component="span"
                >
                  {approvalStates[approvalStatus].label === 'reviewing' ? (
                    <div className='statusStrutureStyles'>
                      <ErrorOutlineIcon />
                      <p>Pending approval</p>
                    </div>
                  ) : ''}
                </Typography>
              )}
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {program && (
            <Typography sx={{ mb: theme.spacing(1) }}>
              <strong>Program: </strong>
              {program}
            </Typography>
          )}
          {description && (
            <Typography sx={{ mb: theme.spacing(1) }}>
              {cardSelected && (
                <>Description: </>
              )}
              {description}
            </Typography>
          )}
          {requirements && (
            <Typography sx={{ mb: theme.spacing(1) }} dangerouslySetInnerHTML={{ __html: 'Requirements: ' + requirements }} />
          )}
          <Box sx={buttonsContainerSyles}>
            <Button
              variant="outlined"
              component={Link}
              href={url}
              sx={{ flexShrink: 0 }}
            >
              View details
            </Button>
            {!cardSelected && (
              <Button
                variant="contained"
                component={Link}
                href={destinationUrl}
                sx={{ flexShrink: 0 }}
              >
                Select
              </Button>
            )}
          </Box>
        </AccordionDetails>
      </Accordion>
    </article>
  );
}
