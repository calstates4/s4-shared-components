import { ElementType, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Collapse,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import Link from '../../01-elements/link/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type OpportunityCardProps = {
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
  const [open, setOpen] = useState(false);

  // Styles.
  const buttonsContainerSyles = {
    display: 'flex',
    gap: theme.spacing(1),
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
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component="h3" variant="h2">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {program && (
            <Typography>
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
