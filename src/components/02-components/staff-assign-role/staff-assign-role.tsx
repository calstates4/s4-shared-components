import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from '../../01-elements/link/link';
import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { ElementType, ReactNode } from "react";
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import { useState } from "react";
import AutocompleteField, {
  AutocompleteOptionType,
} from '../autocomplete-field/autocomplete-field';

export type StaffAssignRoleProps = {
  goBackText: string;
  goBackUrl: string;
  orgId?: string;
  uid?: string;
  fName?: string;
  lName?: string;
  roles: AutocompleteOptionType[];
  memberRole: string;
  FormElement: ElementType;
};

export default function StaffAssignRole({
  goBackText,
  goBackUrl,
  orgId,
  uid,
  fName,
  lName,
  roles,
  memberRole,
  FormElement,
}: StaffAssignRoleProps ) {
  const theme = useTheme();
  const containerStyles = {
    p: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      p: theme.spacing(3),
    },
  };

  const baseFormItemStyles = {
    mb: theme.spacing(3),
  };

  const hlpText = {
    fontWeight: 100,
    fontSize: 14,
    pl: theme.spacing(2),
  };

  const innerForm = (
    <>
      <input type="hidden" name="userId" value={uid} />
      <input type="hidden" name="orgId" value={orgId} />
      <AutocompleteField
        required
        id="field_roles"
        name="field_roles"
        label="Roles"
        options={roles}
        selected={memberRole}
        sx={baseFormItemStyles}
      />
      <Typography component="ul" sx={hlpText}>
        <li>
          <strong>Staff</strong> (can view Experiences they are connected to, and view Organization information but not edit it)
        </li>
        <li>
          <strong>Organization Editor</strong> (can edit Organization information, create Offerings and edit/archive/delete Offerings that they have created)
        </li>
        <li>
          <strong>Organization Manager</strong> (can edit Organization information, create Offerings, edit/archive/delete all Offerings, remove a user from the Organization, and view all Experiences)
        </li>
      </Typography>
      <Box sx={{ mt: theme.spacing(4) }}>
        <Button
          type="submit"
          variant="contained"
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
          Edit Role
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
};
