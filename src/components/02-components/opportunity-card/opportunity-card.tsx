import { ElementType } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Typography,
  useTheme,
} from '@mui/material';
import Link from '../../01-elements/link/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlaceIcon from '@mui/icons-material/Place';

export type OpportunityCardProps = {
  id: string | number;
  title: string;
  url: string;
  location?: string;
  type?: string;
  timeCommitment?: string;
  termPeriod?: string;
  program?: string;
  description?: string;
  FormElement?: ElementType;
};

export default function OpportunityCard({
  id,
  title,
  url,
  location,
  type,
  timeCommitment,
  termPeriod,
  program,
  description,
  FormElement,
}: OpportunityCardProps) {
  const theme = useTheme();

  // Styles.
  const buttonsContainerSyles = {
    display: 'flex',
    mt: theme.spacing(2),
    gap: theme.spacing(1),
  };

  const textStyles = {
    mb: theme.spacing(1),
  };

  const innerForm = (
    <>
      <input type="hidden" name="action" value="selectOpportunity" />
      <input type="hidden" name="opportunityId " value={id} />
      <Button type="submit" variant="contained">
        Select
      </Button>
    </>
  );
  const form = FormElement ? (
    <FormElement method="post">{innerForm}</FormElement>
  ) : (
    <form>{innerForm}</form>
  );

  return (
    <article>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'primary.dark' }} />}
          aria-controls={`opportunity-content-${id}`}
          id={`opportunity-header-${id}`}
        >
          <Typography component="h3" variant="h2">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {location && (
            <Typography sx={textStyles}>
              <PlaceIcon />
              {location}
            </Typography>
          )}
          {type && (
            <Typography sx={textStyles}>
              <strong>Type: </strong>
              {type}
            </Typography>
          )}
          {timeCommitment && (
            <Typography sx={textStyles}>
              <strong>Time commitment: </strong>
              {timeCommitment}
            </Typography>
          )}
          {termPeriod && (
            <Typography sx={textStyles}>
              <strong>Term: </strong>
              {termPeriod}
            </Typography>
          )}
          {program && (
            <Typography sx={textStyles}>
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
            {form}
          </Box>
        </AccordionDetails>
      </Accordion>
    </article>
  );
}
