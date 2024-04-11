import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Link from '../../01-elements/link/link';

export type StaffArchiveMemberProps = {
  goBackText: string;
  goBackUrl: string;
  orgId?: string;
  uid?: string;
  fName?: string;
  lName?: string;
};

export default function StaffArchiveMember({
  goBackText,
  goBackUrl,
  orgId,
  uid,
  fName,
  lName,
}: StaffArchiveMemberProps ) {
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

    event.preventDefault();
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
          <Typography variant="h3" component="h1" gutterBottom>
            Archive Member: {fName} {lName}
          </Typography>
        )}
        <Typography variant="body1" gutterBottom>
          Are you sure you want to archive this member?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
          <>
            <input type="hidden" name="orgId" value={orgId} />
            <input type="hidden" name="userId" value={uid} />
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
              disabled={disabled}
              sx={{ mr: 2 }}
            >
              Archive
            </Button>
          </>
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
