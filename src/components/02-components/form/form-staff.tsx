import { ElementType } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  useTheme,
} from '@mui/material';

export interface FormStaffProps {
  FormElement?: ElementType;
  currentFilters: {
    department: string | null;
  };
  departmentFilterValues?: {
    id: string;
    name: string;
  }[];
}

export default function FormStaff({
  FormElement,
  currentFilters,
  departmentFilterValues,
}: FormStaffProps) {

  const theme = useTheme();

  const formItemStyles = {
    mb: theme.spacing(2),
    display: 'flex',
    minWidth: '8rem',
    [theme.breakpoints.up('sm')]: {
      display: 'inline-flex',
      mb: 0,
      mr: theme.spacing(2),
    },
  };

  const formStyles = {
    mb: theme.spacing(4),
  };

  const formInner = (
    <>
      {departmentFilterValues ? (
        <FormControl size="small" sx={formItemStyles}>
          <InputLabel id="department-select-label">Department</InputLabel>
          <Select
            labelId="department-select-label"
            id="department-select"
            label="Department"
            native={true}
            name="department"
            defaultValue={currentFilters.department}
          >
            {departmentFilterValues.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </Select>
        </FormControl>
      ) : null}
      <Button variant="contained" type="submit">
        Apply Filters
      </Button>
    </>
  );

  const form = FormElement ? (
    <FormElement>{formInner}</FormElement>
  ) : (
    <form>{formInner}</form>
  );

  return (
    <Box sx={formStyles}>
      { form }
    </Box>
  );

}
