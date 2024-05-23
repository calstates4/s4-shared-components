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
import {ExposedFormProps} from "~/components/02-components/form/form";

export default function InviteStaffDialog({
  open,
  handleClose,
  id,
  form,
}: {
  open: boolean;
  handleClose: () => void;
  id?: string;
  form?: ExposedFormProps;
}) {
  const theme = useTheme();

  const innerForm = (
    <>
      <input type="hidden" name="action" value="invite" />
      <input type="hidden" name="orgId" value={id} />
      <TextField
        autoFocus
        margin="dense"
        id="email"
        label="Email Address"
        type="text"
        fullWidth
        required
        name="emails"
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
    </>
  );

  const formDialog = (
    <form>{innerForm}</form>
  );

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
          {formDialog}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
