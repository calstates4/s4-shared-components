import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Button, Link, Paper, Typography, useTheme } from '@mui/material';

type FormProps = {
  id: string;
  name: string;
  status: string;
};

type ExperienceFormListProps = {
  beginningForms: FormProps[] | undefined;
  duringForms: FormProps[] | undefined;
  endForms: FormProps[] | undefined;
  formBaseUrl?: string;
};

export default function ExperienceFormList({
  beginningForms,
  duringForms,
  endForms,
  formBaseUrl = '/forms/',
}: ExperienceFormListProps) {
  const theme = useTheme();

  const formWrapperStyle = {
    py: theme.spacing(2),
    px: theme.spacing(4),
    mb: theme.spacing(5),
  };

  const headingFormStyles = {
    mb: theme.spacing(3),
  };

  const formListStyles = {
    m: `${theme.spacing(3)} 0 0`,
    p: 0,
    listStyleType: 'none',
  };

  const formItemStyles = {
    py: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.secondary.light}`,
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  };

  const formItemNameStyles = {
    mb: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
      pr: theme.spacing(2),
      mb: 0,
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '30%',
    },
  };

  const formItemStatusStyles = {
    display: 'flex',
    alignItems: 'center',
    mb: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      flexBasis: '20%',
      mb: 0,
    },
  };

  const iconSubmittedStyles = {
    color: theme.palette.success.main,
    marginRight: theme.spacing(1),
  };

  const iconPendingStyles = {
    color: theme.palette.warning.main,
    marginRight: theme.spacing(1),
  };

  function ListSection({ items }: { items: FormProps[] }) {
    return (
      <Box component="ul" sx={formListStyles}>
        {items.map((item) => (
          <Box component="li" key={item.id} sx={formItemStyles}>
            <Typography sx={formItemNameStyles}>{item.name}</Typography>
            <Typography variant="body2" sx={formItemStatusStyles}>
              {item.status === 'Submitted' ? (
                <CheckCircleOutlineOutlinedIcon sx={iconSubmittedStyles} />
              ) : (
                <ErrorOutlineIcon sx={iconPendingStyles} />
              )}
              {item.status}
            </Typography>
            {item.status === 'Pending' ? (
              <Button
                variant="outlined"
                component={Link}
                href={`${formBaseUrl}${item.id}`}
                sx={{ flexShrink: 0 }}
              >
                Complete form
              </Button>
            ) : null}
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Paper sx={formWrapperStyle}>
      <Typography sx={headingFormStyles} variant="h2">
        Forms
      </Typography>
      {beginningForms?.length || duringForms?.length || endForms?.length ? (
        <>
          {beginningForms?.length ? (
            <Box>
              <Typography mt={3} variant="h4" component="h3">
                Beginning of Term
              </Typography>
              <ListSection items={beginningForms} />
            </Box>
          ) : null}
          {duringForms?.length ? (
            <Box>
              <Typography mt={3} variant="h4" component="h3">
                During Term
              </Typography>
              <ListSection items={duringForms} />
            </Box>
          ) : null}
          {endForms?.length ? (
            <Box>
              <Typography mt={3} variant="h4" component="h3">
                End of Term
              </Typography>
              <ListSection items={endForms} />
            </Box>
          ) : null}
        </>
      ) : null}
    </Paper>
  );
}
