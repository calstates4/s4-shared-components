import React from 'react';
import {
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ElementType } from 'react';
import Link from '../../01-elements/link/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export type DepartmentFormProps = {
  isEdit?: boolean;
  id?: string;
  name?: string;
  description?: string;
  departments: string;
  FormElement: ElementType;
  goBackText: string;
  goBackUrl: string;
};

export default function DepartmentForm({
  isEdit= false,
  id,
  name,
  description,
  departments,
  FormElement,
  goBackText,
  goBackUrl,
}: DepartmentFormProps) {
  const theme = useTheme();

  // Set states for form fields.
  const [nameValue, setName] = React.useState(name || ""); // Initialize with name prop
  const [error, setErrorText] = React.useState("");

  // Form submission validation.
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const form = e.currentTarget.form;
    if (!nameValue) {
      setErrorText("Please enter a value.");
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
      {id && <input type="hidden" name="id" value={id} />}
      <input type="hidden" name="departmentsList" value={departments}/>
      <TextField
        required
        fullWidth
        id="field-name"
        variant="outlined"
        name="field-name"
        label="Name"
        defaultValue={name}
        sx={baseFormItemStyles}
        error={!!error}
        helperText={error}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        fullWidth
        multiline
        rows={4}
        id="field-description"
        variant="outlined"
        name="field-description"
        label="Description"
        defaultValue={description}
        sx={baseFormItemStyles}
      />
      { !isEdit &&
        <Button
          type="submit"
          variant="contained"
          onClick={onSubmit}
        >
          Create Department
        </Button>
      }
      { isEdit &&
        <Button
          type="submit"
          variant="contained"
        >
          Update Department
        </Button>
      }
      { isEdit &&
        <Button
          variant="outlined"
          sx={{ ml: 2 }}
        >
          Delete Department
        </Button>
      }
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
          {isEdit ? 'Edit' : 'Create a'} Department
        </Typography>
        {form}
      </Paper>
    </>
  );
}
