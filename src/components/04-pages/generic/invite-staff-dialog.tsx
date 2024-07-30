import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  useTheme,
  Stack,
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
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      alignItems="center"
      marginTop={2}
    >
      <input type="hidden" name="action" value="invite" />
      <input type="hidden" name="orgId" value={id} />
      <TextField
        autoFocus
        tabIndex={0}
        aria-label="email"
        id="email"
        label="Email Address"
        type="text"
        fullWidth
        required
        name="emails"
      />
      <Button
        aria-label="Invite"
        type="submit"
        variant="contained"
        sx={{
          ml: theme.spacing(2),
        }}
      >
        Invite
      </Button>
    </Stack>
  );

  const formDialog = (
    <form style={{width: '100%'}}>{innerForm}</form>
  );

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      id="modal-invite-staff"
      aria-labelledby="modal-invite-staff"
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
        aria-label="Close"
        tabIndex={0}
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
