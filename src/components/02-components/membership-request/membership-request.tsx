import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { ElementType } from "react";
import Link from '../../01-elements/link/link';

export type MembershipRequestProps = {
  goBackText: string;
  goBackUrl: string;
  orgId?: string;
  uid?: string;
  fName?: string;
  lName?: string;
  action: boolean | string;
  isApprove?: boolean;
  FormElement?: ElementType;
};

export default function MembershipRequest({
  goBackText,
  goBackUrl,
  orgId,
  uid,
  fName,
  lName,
  FormElement,
  action,
  isApprove,
}: MembershipRequestProps ) {

  const innerForm = (
    <>
      <input type="hidden" name="orgId" value={orgId} />
      <input type="hidden" name="userId" value={uid} />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mr: 2 }}
        >
        {isApprove ? 'Approve' : 'Deny'}
      </Button>
    </>
  );

  const form = FormElement ? (
    <FormElement method="post">{innerForm}</FormElement>
  ) : (
    <form method="post">{innerForm}</form>
  );

  // Styles.
  const theme = useTheme();

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

  const actionTitleStyles = {
    textTransform: 'capitalize',
  };


  return (
    <>
      {goBackText && goBackUrl && (
        <Link href={goBackUrl} color="text.secondary" sx={goBackLinkStyles}>
          <ArrowBackIosNewIcon sx={iconStyles} /> {goBackText}
        </Link>
      )}
      <Paper sx={containerStyles}>
        {(fName && lName) && (
          <Typography variant="h3" component="h1" gutterBottom sx={actionTitleStyles}>
            {action} Membership Request: {fName} {lName}
          </Typography>
        )}
        <Typography variant="body1" gutterBottom>
          Are you sure you want to {action} this member?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
          {form}
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            href={goBackUrl}
          >
            Cancel
          </Button>
        </Box>
      </Paper>
    </>
  );
}
