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
}: OpportunityCardProps) {
  const theme = useTheme();

  // Styles.
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
      <Accordion>
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
            <Typography dangerouslySetInnerHTML={{ __html: description }} />
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
            <Button
              variant="contained"
              component={Link}
              href={`${destinationUrl}/${id}`}
              sx={{ flexShrink: 0 }}
            >
              Select
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </article>
  );
}