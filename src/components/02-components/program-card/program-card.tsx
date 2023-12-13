import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import Link from '../../01-elements/link/link';
import {useState} from "react";

export type ProgramCardProps = {
  id: string;
  title: string;
  url: string;
  joinUrl: string;
  description?: string;
  btnDisable?: boolean;
  btnText?: string;
};

export default function ProgramCard({
  id,
  title,
  url,
  joinUrl,
  description,
  btnDisable,
  btnText,
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

  const [isDisabled] = useState(btnDisable);

  return (
    <Paper key={id} sx={containerStyles} component="article">
      <Box sx={headerContainerStyles}>
        <Typography variant="h2" color="black">
          {title}
        </Typography>
      </Box>
      <Box sx={descriptionContainerStyles}>
        {description && (
          <p dangerouslySetInnerHTML={{ __html: description }} />
        )}
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
        <Button
          id={"program-" + id}
          component={Link}
          href={joinUrl}
          type="submit"
          variant="contained"
          disabled={isDisabled}
          sx={{
            mr: theme.spacing(1),
            fontWeight: 700,
          }}
        >
          {btnText}
        </Button>
      </Box>
    </Paper>
  );
}
