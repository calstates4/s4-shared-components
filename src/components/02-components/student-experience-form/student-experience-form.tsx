import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { ElementType, ReactNode } from 'react';

export type StudentExperienceFormProps = {
  id?: string,
  children: ReactNode;
  stepsBar: ReactNode;
  FormElement?: ElementType;
};

export default function StudentExperienceForm({
  id,
  children,
  stepsBar,
  FormElement,
}: StudentExperienceFormProps) {
  const theme = useTheme();

  // Styles.
  const contentContainerStyles = {
    width: '100%',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    fontSize: '1rem',
  };

  const formInner = (
    <>
      <input type="hidden" name="opportunityId" value={id ? id : 0} />
      <Button type="button" variant="outlined" sx={{ mr: 1 }}>Cancel</Button>
      <Button type="submit" variant="contained" sx={{ mr: 1 }}>Continue</Button>
    </>
  );

  const form = FormElement ? (
    <FormElement method="post">{formInner}</FormElement>
  ) : (
    <form>{formInner}</form>
  );

  return (
    <>
      <Paper sx={contentContainerStyles} component="article">
        <Typography variant="h1" color="primary.main" sx={{ mb: theme.spacing(2) }}>Create your Experience</Typography>
        This simple process will guide you through the steps to sign up for your selected experiential learning opportunity.
      </Paper>
      {stepsBar}
      <Paper sx={contentContainerStyles}>
        <Typography variant="h2" color="primary.main" sx={{ mb: theme.spacing(1) }}>Opportunity</Typography>
        {(children) ? (
          <>
            <Typography sx={{ mb: theme.spacing(2) }}>
              You have selected the following Opportunity to start creating your experience:
            </Typography>
            {children}
          </>
        ) : (
          <>
            <Typography>
              In order to start the process you should first select an Opportunity.
            </Typography>
            <Typography sx={{ mb: theme.spacing(3) }}>
              Please visit the Opportunities page to discover all the options available for you.
            </Typography>
            <Button variant="contained" href="/opportunities">VIEW ALL OPPORTUNITIES</Button>
          </>
        )}
      </Paper>
      {(children) && (
        <Box sx={{ textAlign: 'right', }}>{form}</Box>
      )}

    </>
  );
}
