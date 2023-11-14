import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { ElementType, ReactNode } from "react";
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';

export type StaffAssignDepartmentProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  orgId?: string;
  uid?: string;
  fName?: string;
  lName?: string;
  departments: ReactNode;
  FormElement: ElementType;
};

export default function StaffAssignDepartment({
  breadcrumb,
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
      <input type="hidden" name="userId" value={uid} />
      <input type="hidden" name="orgId" value={orgId} />
      {departments}
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
    <>
      <Breadcrumbs items={breadcrumb} />
      <Paper sx={containerStyles}>
        <Typography
          variant={"h1"}
          mb={3}
          color="primary.main"
        >
          Assign Departments
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
    </>
  );
}
