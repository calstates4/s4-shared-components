import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { ReactNode } from 'react';
import { experienceStatusInfo } from '../../../../../../lib/utils';
import Breadcrumbs from '../../../../../01-elements/breadcrumbs/breadcrumbs';
import Link from '../../../../../01-elements/link/link';
import CardExperienceHours from '../../../../../02-components/card-experience-hours/card-experience-hours';

export type PartnerExperienceDetailsPageProps = {
  children?: ReactNode;
  id: string;
  experienceName: string;
  opportunityName: string;
  state: string;
  experienceDetails: string;
  firstName: string;
  lastName: string;
  email: string;
  dates: string;
  timeCommitment: string;
  location: string;
  hours: number;
  campus: string;
  url: string;
  primaryContact: string;
  formSigner: string;
  timeApprover: string;
  observer: string;
  hasPendingForm: boolean;
  formsBegining?: {
    items: {
      id: string;
      formName: string;
      statusFoms: string;
      urlForm: string;
    }[];
  };
  formsDuring?: {
    items: {
      id: string;
      formName: string;
      statusFoms: string;
      urlForm: string;
    }[];
  };
};

export default function PartnerExperienceDetailsPage({
  children,
  experienceName,
  url,
  opportunityName,
  state,
  experienceDetails,
  firstName,
  lastName,
  email,
  dates,
  timeCommitment,
  location,
  hours,
  campus,
  formsBegining,
  formsDuring,
  primaryContact,
  formSigner,
  timeApprover,
  observer,
  hasPendingForm,
}: PartnerExperienceDetailsPageProps) {
  const theme = useTheme();

  // Variables to manage workflow status
  const states = experienceStatusInfo(theme);

  // Styles
  const experienceNameStyles = {
    mb: theme.spacing(3),
  };

  const headingStyles = {
    fontWeight: '700',
  };

  const headingFormItemStyles = {
    fontWeight: '700',
    marginTop: theme.spacing(3),
  };

  const headingFormStyles = {
    mb: theme.spacing(3),
  };

  const formWrapperStyle = {
    p: `${theme.spacing(2)} ${theme.spacing(4)} `,
    mb: theme.spacing(5),
  };

  const formListStyles = {
    m: `${theme.spacing(3)} 0 0`,
    p: 0,
    listStyleType: 'none',
  };

  const formItemStyles = {
    display: 'flex',
    py: theme.spacing(2),
    alignItems: 'center',
    flexDirection: 'column',
    borderTop: `1px solid ${theme.palette.secondary.light}`,
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
  };

  const formItemNameStyles = {
    flexBasis: '30%',
  };

  const formItemStatusStyles = {
    display: 'flex',
    flexBasis: '20%',
  };

  const descriptionStyles = {
    display: 'flex',
    flexDirection: 'column',
  };

  const stateStyles = {
    marginTop: theme.spacing(2),
    backgroundColor: states[state].color,
    px: theme.spacing(1),
    borderRadius: '4px',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(2),
      my: '0',
    },
  };

  const containerStyles = {
    display: 'flex',
    p: theme.spacing(3),
    mb: theme.spacing(5),
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      p: theme.spacing(5),
      minWidth: '600px',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  };

  const contentStyles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 'auto',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  };

  const bodyWrapperStyles = {
    flex: '1 0 70%',
  };

  const infoStyles = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      marginBottom: 0,
    },
  };

  const headingWrapperStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(1),
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  };

  const descriptionContainerStyles = {
    flexBasis: '60%',
    marginRight: theme.spacing(5),
  };

  const programInfoStyles = {
    flexBasis: '40%',
  };

  const cardHoursStyles = {
    flex: '1 0 25%',
  };

  const iconSubmittedStyles = {
    color: theme.palette.success.main,
    marginRight: theme.spacing(1),
  };

  const iconPendingStyles = {
    color: theme.palette.warning.main,
    marginRight: theme.spacing(1),
  };

  const dividerStyles = {
    width: '100%',
  };

  const staffWrapperStyles = {
    marginTop: theme.spacing(3),
  };

  const listStaffStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: `${theme.spacing(2)} ${theme.spacing(5)} `,
    },
  };

  const pendingFormStyles = {
    display: 'flex',
    marginBottom: theme.spacing(3),
    border: `1px solid ${theme.palette.warning.main}`,
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
  };

  const renderedDescription = experienceDetails && (
    <Box sx={descriptionStyles}>
      <strong>Experience Details:</strong>
      <div dangerouslySetInnerHTML={{ __html: experienceDetails }} />
    </Box>
  );

  const renderedState = state && (
    <Typography sx={stateStyles} variant="body2">
      {states[state].label}
    </Typography>
  );

  return (
    <article>
      <Breadcrumbs
        items={[
          { title: 'Experiences', url: '/organization/experiences' },
          { title: experienceName, url },
        ]}
      />
      <Box>
        <Typography variant="h1" color="primary.main" sx={experienceNameStyles}>
          {experienceName}
        </Typography>

        <Paper sx={containerStyles}>
          <Box sx={contentStyles}>
            <Box sx={bodyWrapperStyles}>
              <Box sx={headingWrapperStyles}>
                <Typography sx={headingStyles} variant="h2">
                  {opportunityName}
                </Typography>
                {renderedState}
              </Box>
              <Box sx={infoStyles}>
                <Box sx={descriptionContainerStyles}>{renderedDescription}</Box>
                <Box sx={programInfoStyles}>
                  <Box>
                    <strong>Name: </strong>
                    {firstName}
                  </Box>
                  <Box>
                    <strong>Last Name: </strong>
                    {lastName}
                  </Box>
                  <Box>
                    <strong>E-mail: </strong>
                    {email}
                  </Box>
                  <Box>
                    <strong>Dates: </strong>
                    {dates}
                  </Box>
                  <Box>
                    <strong>Campus: </strong>
                    {campus}
                  </Box>
                  <Box>
                    <strong>Time commitment: </strong>
                    {timeCommitment}
                  </Box>
                  {location && (
                    <Box>
                      <strong>Location: </strong>
                      {location}
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
            <Box sx={cardHoursStyles}>
              <CardExperienceHours
                hours={hours}
                position="column"
              />
            </Box>
          </Box>
          {hasPendingForm && (
            <Box sx={pendingFormStyles}>
              <ErrorOutlineIcon sx={iconPendingStyles} />
              <Box>
                <Typography sx={headingStyles} variant="h4">
                  Pending forms
                </Typography>
                <Typography variant="body2">
                  There are pending forms for this experience, please fill all
                  the forms.
                </Typography>
              </Box>
            </Box>
          )}
          <Divider sx={dividerStyles} />
          <Box sx={staffWrapperStyles}>
            <Typography sx={headingStyles} variant="h3">
              Site Staff
            </Typography>
            <Box sx={listStaffStyles}>
              <Box>
                <strong>Primary contact(s): </strong>
                {primaryContact}
              </Box>
              <Box>
                <strong>Form signer(s): </strong>
                {formSigner}
              </Box>
              <Box>
                <strong>Time approver(s): </strong>
                {timeApprover}
              </Box>
              {observer && (
                <Box>
                  <strong>Observer(s): </strong>
                  {observer}
                </Box>
              )}
            </Box>
          </Box>
        </Paper>

        {formsBegining || formsDuring ? (
          <Paper sx={formWrapperStyle}>
            <Typography sx={headingFormStyles} variant="h2">
              Forms
            </Typography>
            {formsBegining && (
              <Box>
                <Typography sx={headingFormItemStyles} variant="h4">
                  Beginning of Term
                </Typography>
                <Box component="ul" sx={formListStyles}>
                  {formsBegining.items.map((item) => (
                    <Box component="li" key={item.id} sx={formItemStyles}>
                      <Typography sx={formItemNameStyles}>
                        {item.formName}
                      </Typography>
                      <Typography variant="body2" sx={formItemStatusStyles}>
                        {item.statusFoms === 'Submitted' ? (
                          <CheckCircleOutlineOutlinedIcon
                            sx={iconSubmittedStyles}
                          />
                        ) : (
                          <ErrorOutlineIcon sx={iconPendingStyles} />
                        )}
                        {item.statusFoms}
                      </Typography>
                      <Button
                        variant="outlined"
                        component={Link}
                        href={item.urlForm}
                        sx={{ flexShrink: 0 }}
                      >
                        Complete form
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
            {formsDuring && (
              <Box>
                <Typography sx={headingFormItemStyles} variant="h4">
                  During Term
                </Typography>
                <Box component="ul" sx={formListStyles}>
                  {formsDuring.items.map((item) => (
                    <Box component="li" key={item.id} sx={formItemStyles}>
                      <Typography sx={formItemNameStyles}>
                        {item.formName}
                      </Typography>
                      <Typography variant="body2" sx={formItemStatusStyles}>
                        {item.statusFoms === 'Submitted' ? (
                          <CheckCircleOutlineOutlinedIcon
                            sx={iconSubmittedStyles}
                          />
                        ) : (
                          <ErrorOutlineIcon sx={iconPendingStyles} />
                        )}
                        {item.statusFoms}
                      </Typography>
                      <Button
                        variant="outlined"
                        component={Link}
                        href={item.urlForm}
                        sx={{ flexShrink: 0 }}
                      >
                        Complete form
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Paper>
        ) : null}
        {children}
      </Box>
    </article>
  );
}
