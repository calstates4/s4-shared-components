import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { ElementType, ReactNode } from "react";
import { useState } from "react";
import Link from '../../01-elements/link/link';

export type StaffAssignDepartmentProps = {
  goBackText: string;
  goBackUrl: string;
  orgId?: string;
  uid?: string;
  fName?: string;
  lName?: string;
  departments: ReactNode;
  FormElement: ElementType;
};

export default function StaffAssignDepartment({
  goBackText,
  goBackUrl,
  orgId,
  uid,
  fName,
  lName,
  departments,
  FormElement,
}: StaffAssignDepartmentProps ) {
  const theme = useTheme();

  // Add state for the disabled variable
  const [disabled, setDisabled] = useState<boolean>(false);

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

  const handleButtonClick = (event: React.FormEvent<HTMLButtonElement>) => {
    // Update the disabled state when the button is clicked
    setDisabled(true);

    // Add any other logic you need when the button is clicked
    event.currentTarget.form?.submit();
  };

  const innerForm = (
    <>
      <input type="hidden" name="userId" value={uid} />
      <input type="hidden" name="orgId" value={orgId} />
      {departments}
      <Box sx={{ mt: theme.spacing(4) }}>
        <Button
          type="submit"
          variant="contained"
          disabled={disabled}
          onClick={handleButtonClick}
        >
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
          Manage Departments
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
