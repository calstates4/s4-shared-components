import React from 'react';
import {
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Box,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { ElementType } from 'react';
import Link from '../../01-elements/link/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { el } from 'date-fns/locale';

export type ExperienceDenyProps = {
  eid?: string;
  pid?: string;
  oid?: string;
  title: string;
  FormElement: ElementType;
  goBackText: string;
  goBackUrl: string;
  reasons?: {
    id: string;
    label: string;
  }[];
};

export default function ExperienceDeny({
  eid,
  pid,
  oid,
  title,
  FormElement,
  goBackText,
  goBackUrl,
  reasons,
}: ExperienceDenyProps) {
  const theme = useTheme();

  // Set states for form fields.
  const [error, setErrorText] = React.useState("");
  const [showField, setShowField] = useState(false);
  const [optField, setOptField] = useState("none");
  const [otherField, setOtherField] = useState("");

  function selectChangeHandler(event: SelectChangeEvent) {
    setOptField(event.target.value);
    if (event.target.value === 'other') {
      setShowField(true);
    } else {
      setShowField(false);
    }
  }

  // Form submission validation.
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const form = e.currentTarget.form;

    if (optField === 'none') {
      setErrorText("Please enter a reason of rejection this experience.");
    } else if (optField === 'other' && otherField === '') {
      setErrorText("Please enter an other reason of rejection this experience.");
    } else if (form) {
      form.submit();
    }
  };

  // Styles.
  const containerStyles = {
    p: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      p: theme.spacing(3),
    },
  };

  const baseFormItemStyles = {
    mb: theme.spacing(3),
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

  // Form.
  const innerForm = (
    <>
      {eid && <input type="hidden" name="eid" value={eid} />}
      {oid && <input type="hidden" name="oid" value={oid} />}
      {pid && <input type="hidden" name="pid" value={pid} />}
      <FormControl 
        fullWidth
        sx={baseFormItemStyles}
      >
        <InputLabel
          id="lbl-reason"
          htmlFor="field-select-reason"
        >
          Choose the rejection reason
        </InputLabel>
        <Select
          labelId="lbl-reason"
          id="field-select-reason"
          label="Reason of rejection"
          native={true}
          name="field-select-reason"
          defaultValue='none'
          onChange={selectChangeHandler}
        >
          <option value="none">Select one...</option>
          {reasons && reasons.map((r) => (
            <option key={r.id} value={r.id}>
              {r.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <Box sx={{ display: showField ? 'block' : 'none' }}>
        <TextField
          fullWidth
          id="field-other-reason"
          variant="outlined"
          name="field-other-reason"
          label="Other reason"
          sx={baseFormItemStyles}
          value={otherField}
          onChange={(e) => setOtherField(e.target.value)}
          helperText="Please provide the reason of the rejection"
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        onClick={onSubmit}
      >
        Deny
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
        <Typography
          variant={"h1"}
          mb={3}
          color="primary.main"
        >
          Deny {title}
        </Typography>
        {form}
      </Paper>
    </>
  );
}
