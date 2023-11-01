import {
  Box,
  Button,
  Paper,
  Checkbox,
  Typography,
  useTheme,
} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import { ElementType, useRef } from "react";

export type StaffAssignDepartmentProps = {
  orgId?: string;
  uid?: string;
  fName?: string;
  lName?: string;
  departments?: {
    id: string,
    title: string,
    checked: boolean,
  }[];
  FormElement: ElementType;
};

export default function StaffAssignDepartment({
  orgId,
  uid,
  fName,
  lName,
  departments,
  FormElement,
}: StaffAssignDepartmentProps ) {
  const theme = useTheme();

  const containerStyles = {
    p: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      p: theme.spacing(3),
    },
  };

  const innerForm = (
    <>
      <input type="hidden" name="userId" value={uid}/>
      <input type="hidden" name="orgId" value={orgId}/>
      { departments && (
        departments.map((data) => (
          <Box>
            <FormControlLabel
              value={data.id}
              control={<Checkbox />}
              label={data.title}
              checked={data.checked}
            />
          </Box>
        ))
      )}
      <Box sx={{ mt: theme.spacing(4) }}>
        <Button type="submit" variant="contained">
          Assign
        </Button>
      </Box>
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
        Departments assignation
      </Typography>
      {(fName && lName) && (
        <Typography
          variant="h3"
          mb={4}>
          Staff member: {fName} {lName}
        </Typography>
      )}

      {form}
    </Paper>
  );
}