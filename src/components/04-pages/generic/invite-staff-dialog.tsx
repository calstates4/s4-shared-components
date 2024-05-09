import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const InviteStaffDialog = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-invite-staff"
      aria-describedby="modal-invite-staff"
    >
      <DialogTitle
        id="modal-title"
        variant="h3"
        component="h3"
        sx={{
          maxWidth: '90%',
          pb: theme.spacing(0),
        }}
      >
        Write the email of the staff member you want to invite.
      </DialogTitle>
      <CloseIcon
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: theme.spacing(2),
          top: theme.spacing(2),
          cursor: 'pointer',
        }}
      />
      <DialogContent sx={{ pt: theme.spacing(1) }} id="modal-description">
        <DialogContentText gutterBottom>
          Multiple emails can be added by separating them with a comma.
        </DialogContentText>
        <DialogContentText
          id="modal-input"
          gutterBottom
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              ml: theme.spacing(2),
            }}
          >
            Invite
          </Button>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default InviteStaffDialog;
