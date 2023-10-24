import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import Link from '../../01-elements/link/link';
import {ElementType, useState} from "react";

export type ProgramCardProps = {
  id: string;
  title: string;
  url: string;
  FormElement: ElementType;
  description?: string;
  btnDisable?: boolean;
  btnText?: string;
  btnNextStatusText?: string;
};

export default function ProgramCard({
  id,
  title,
  url,
  FormElement,
  description,
  btnDisable,
  btnText,
  btnNextStatusText,
}: ProgramCardProps) {
  const theme = useTheme();

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

  const headerContainerStyles = {
    mb: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
  };

  const descriptionContainerStyles = {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      columnGap: theme.spacing(5),
      mb: theme.spacing(1),
    },
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
    }
  };

  const [isDisabled, setDisabled] = useState(btnDisable);
  const [btnTextB, setTextB] = useState(btnText);

  const handleSubmit = () => {
    setDisabled(true);
    setTextB(btnNextStatusText);
  }

  const innerForm = (
    <>
      <input type="hidden" name="action" value="joinProgram" />
      <input type="hidden" name="progId" value={id} />
      <Button
        id={"program-" + id}
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
    <FormElement sx={btnStyles} method="post">{innerForm}</FormElement>
  ) : (
    <Box sx={btnStyles}>
      <form>{innerForm}</form>
    </Box>
  );

  return (
    <Paper sx={containerStyles} component="article">
      <Box sx={headerContainerStyles}>
        <Typography variant="h2" color="black">
          {title}
        </Typography>
      </Box>
      <Box sx={descriptionContainerStyles}>
        <Typography>
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </Typography>
      </Box>
      <Box sx={{ mt: theme.spacing(2), display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          component={Link}
          href={url}
          sx={{
            mr: theme.spacing(1),
            fontWeight: 700,
          }}
        >
          View
        </Button>
        {form}
      </Box>
    </Paper>
  );
}
