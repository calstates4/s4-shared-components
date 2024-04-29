import React from 'react';
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ElementType } from 'react';
import Link from '../../01-elements/link/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export type DepartmentDeleteProps = {
  id?: string;
  name?: string;
  description?: string;
  members: string[];
  FormElement: ElementType;
  goBackText: string;
  goBackUrl: string;
};

export default function DepartmentDelete({
     id,
     name,
     description,
     members,
     FormElement,
     goBackText,
     goBackUrl,
  }: DepartmentDeleteProps) {
  const theme = useTheme();

  // Styles.
  const containerStyles = {
    p: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      p: theme.spacing(3),
    },
  };

  const goBackLinkStyles = {
    textDecoration: 'none',
    mb: 2,
    display: 'block',
    fontSize: '1rem',
  };

  const iconStyles = {
    fontSize: '1rem',
    color: 'text.secondary',
    verticalAlign: '-3px',
  };

  const formListStyles = {
    mb: 3,
    p: 0,
    listStyleType: 'none',
  };

  const formItemStyles = {
    py: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.secondary.light}`,
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
    },
  };

  // Form.
  const innerForm = (
    <>
      <input type="hidden" name="id" value={id} />
      <Button
        type="submit"
        variant="contained"
      >
        Delete Department
      </Button>
    </>
  );


  const form = FormElement ? (
    <FormElement method="post">{innerForm}</FormElement>
  ) : (
    <form method="post">{innerForm}</form>
  );
  return (
    <>
      {goBackText && goBackUrl && (
        <Link href={goBackUrl} color="text.secondary" sx={goBackLinkStyles}>
          <ArrowBackIosNewIcon sx={iconStyles} /> {goBackText}
        </Link>
      )}
      <Paper sx={containerStyles}>
        <Typography variant={"h1"} mb={3} color="primary.main">
          Are you sure that you want to delete this Department?
        </Typography>
        <Typography variant={"h2"} mb={3}>{name}</Typography>
        <Typography mb={3}>{description}</Typography>
        {members.length && <Typography variant={"h3"}>Members</Typography>}
        <Box component="ul" sx={formListStyles}>
          {members.map((item, i) => <Box component="li" sx={formItemStyles} key={i}>{item}</Box> )}
        </Box>
        {form}
      </Paper>
    </>
  );
}
