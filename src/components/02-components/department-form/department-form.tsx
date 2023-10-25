import {
  Box,
  Button,
  FormControlLabel,
  Paper,
  Switch,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ElementType, useRef } from 'react';

type DepartmentFormProps = {
  isEdit?: boolean;
  id?: string;
  name?: string;
  description?: string;
  FormElement: ElementType;
};

export default function DepartmentForm({
  isEdit= false,
  id,
  name,
  description,
  FormElement,
}: DepartmentFormProps) {
  const theme = useTheme();

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

  const innerForm = (
    <>
      {id && <input type="hidden" name="id" value={id} />}
      <TextField
        required
        fullWidth
        id="dept-form-name"
        variant="outlined"
        name="label"
        label="Name"
        defaultValue={name}
        sx={baseFormItemStyles}
      />
      <TextField
        fullWidth
        multiline
        rows={4}
        id="dept-form-description"
        variant="outlined"
        name="field_body"
        label="Description"
        defaultValue={description}
        sx={baseFormItemStyles}
      />
      <Button
        type="submit"
        variant="contained"
      >
        {isEdit ? 'Edit' : 'Create'} Department
      </Button>
    </>
  );

  const form = FormElement ? (
    <FormElement method="post">{innerForm}</FormElement>
  ) : (
    <form method="post">{innerForm}</form>
  );

  return (
    <Paper sx={containerStyles}>
      <Typography
        variant={"h1"}
        mb={3}
        color="primary.main"
      >
        {isEdit ? 'Edit' : 'Create a'} Department
      </Typography>
      {form}
    </Paper>
  );
};
