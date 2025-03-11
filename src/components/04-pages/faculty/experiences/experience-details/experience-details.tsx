import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { ReactNode } from 'react';
import Breadcrumbs from '../../../../01-elements/breadcrumbs/breadcrumbs';
import Link from '../../../../01-elements/link/link';

export type FacultyExperienceDetailsPageProps = {
  children?: ReactNode;
  id: string;
  experienceName: string;
  programName: string;
  courseName?: string;
  organizationName: string;
  placedByName: string;
  opportunityName: string;
  siteStaffName?: string;
  term: string;
  estimatedHours: number;
  totalHours: number;
  url: string;
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

export default function FacultyExperienceDetailsPage({
  children,
  experienceName,
  programName,
  courseName,
  organizationName,
  placedByName,
  opportunityName,
  siteStaffName,
  term,
  estimatedHours,
  totalHours,
  url,
  formsBegining,
  formsDuring,
}: FacultyExperienceDetailsPageProps) {
  const theme = useTheme();

  // Styles
  const experienceNameStyles = {
    mb: theme.spacing(3),
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

  const descriptionContainerStyles = {
    flexBasis: '60%',
    marginRight: theme.spacing(5),

    '& ul': {
      listStyleType: 'none',
      p: 0,

      '& li:not(:last-child)': {
        mb: '6px',
      }
    }
  };

  const programInfoStyles = {
    flexBasis: '40%',

    '& ul': {
      listStyleType: 'none',
      p: 0,

      '& li:not(:last-child)': {
        mb: '6px',
      }
    }
  };

  const cardHoursStyles = {
    flex: '1 0 25%',

    [theme.breakpoints.up('md')]: {
      pl: '28px',
      borderLeft: '1px solid #CCCCCC',
    },

    '& ul': {
      listStyleType: 'none',
      p: 0,

      '& li:not(:last-child)': {
        mb: '6px',
      }
    }
  };

  const iconSubmittedStyles = {
    color: theme.palette.success.main,
    marginRight: theme.spacing(1),
  };

  const iconPendingStyles = {
    color: theme.palette.warning.main,
    marginRight: theme.spacing(1),
  };

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
            <Box sx={descriptionContainerStyles}>
              <ul>
                <li>
                  <strong>Program: </strong>
                  {programName}
                </li>
                {courseName && (
                  <li>
                    <strong>Course: </strong>
                    {courseName}
                  </li>
                )}
                <li>
                  <strong>Organization: </strong>
                  {organizationName}
                </li>
              </ul>
            </Box>
            <Box sx={programInfoStyles}>
              <ul>
                <li>
                  <strong>Placed by: </strong>
                  {placedByName}
                </li>
                <li>
                  <strong>Opportunity: </strong>
                  {opportunityName}
                </li>
                {siteStaffName && (
                  <li>
                    <strong>Site staff: </strong>
                    {siteStaffName}
                  </li>
                )}
              </ul>
            </Box>
            <Box sx={cardHoursStyles}>
              <ul>
                <li>
                  <strong>Term: </strong>
                  {term}
                </li>
                <li>
                  <strong>Estimated hours: </strong>
                  {estimatedHours}
                </li>
                <li>
                  <strong>Reported hours: </strong>
                  {totalHours}
                </li>
              </ul>
            </Box>
          </Box>
        </Paper>

        {formsBegining || formsDuring ? (
          <Paper sx={formWrapperStyle}>
            <Typography sx={headingFormStyles} variant="h2">
              Submissions
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
                        // href={item.urlForm}
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
                        // href={item.urlForm}
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
