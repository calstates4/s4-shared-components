import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import TvIcon from '@mui/icons-material/Tv';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useState, ElementType } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
  Stack,
  Divider,
} from '@mui/material';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Link from '../../01-elements/link/link';

export type ProgramPageProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  id: string;
  title: string;
  description: string;
  opportunitiesUrl: string;
  FormElement?: ElementType;
  btnDisable: boolean;
  btnText: string;
  btnNextStatusText: string;
  phone: string;
  mail: string;
  campusSite: string;
};

export default function ProgramPage({
  breadcrumb,
  id,
  title,
  description,
  opportunitiesUrl,
  FormElement,
  btnDisable,
  btnText,
  btnNextStatusText,
  phone,
  mail,
  campusSite,
}: ProgramPageProps) {
  const theme = useTheme();
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
  const detailsStyles = {
    ul: {
      m: 0,
      p: 0,
      listStyleType: 'none',
      li: {
        mb: theme.spacing(1),
      },
    },
  };
  const iconStyles = {
    fontSize: '1rem',
    color: 'primary.dark',
    verticalAlign: '-4px',
    mr: theme.spacing(1),
  };

  const btnStyles = {
    flexShrink: 0,
    mr: theme.spacing(2),
    textAlign: 'center',
    width: 'auto',
    float: 'left',
    [theme.breakpoints.down('sm')]: {
      mb: theme.spacing(2),
      mr: '0',
      width: '100%',
      float: 'none',
    },
  };

  const [isDisabled, setDisabled] = useState(btnDisable);
  const [btnTextB, setTextB] = useState(btnText);
  const handleSubmit = () => {
    setDisabled(true);
    setTextB(btnNextStatusText);
  };

  const innerForm = (
    <>
      <input type="hidden" name="action" value="joinProgram" />
      <input type="hidden" name="progId" value={id} />
      <Button
        type="submit"
        variant="contained"
        disabled={isDisabled}
        onClick={handleSubmit}
      >
        {btnTextB}
      </Button>
    </>
  );
  const form = FormElement ? (
    <FormElement sx={btnStyles} method="post">
      {innerForm}
    </FormElement>
  ) : (
    <Box sx={btnStyles}>
      <form>{innerForm}</form>
    </Box>
  );

  return (
    <article>
      <Breadcrumbs items={breadcrumb} />
      <Box sx={titleContainerStyles}>
        <Typography variant="h1" color="primary.main" sx={titleStyles}>
          {title}
        </Typography>
      </Box>
      <Paper sx={paperStyles}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={3}
        >
          <Box sx={{ flex: '1 1 60%' }}>
            <Typography variant="h3" color="primary.main" sx={titleStyles}>
              Program Description
            </Typography>
            {description && (
              <p dangerouslySetInnerHTML={{ __html: description }} />
            )}
            <Box sx={{ mt: theme.spacing(2) }}>
              <Button
                variant="outlined"
                component={Link}
                href={opportunitiesUrl}
                sx={btnStyles}
              >
                SEE AVAILABLE OPPORTUNITIES
              </Button>
              {form}
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography component="h3" variant="h3" sx={{mb: theme.spacing(2)}}>
              Contact us
            </Typography>
            <Box component="ul" sx={detailsStyles.ul}>
              {phone && (
                <li>
                  <PhoneIcon sx={iconStyles} />
                  {phone}
                </li>
              )}
              {mail && (
                <li>
                  <MailIcon sx={iconStyles} />
                  <Link href={`mailto:${mail}`}>{mail}</Link>
                </li>
              )}
              {campusSite && (
                <li>
                  <TvIcon sx={iconStyles} />
                  <Link href={campusSite}>
                    {campusSite} <ArrowOutwardIcon sx={iconStyles} />
                  </Link>
                </li>
              )}
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </article>
  );
}
