import {ElementType, useState} from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';


export type OrganizationCardProps = {
  id: string;
  name: string;
  description?: string;
  btnDisable: boolean;
  btnText: string
  FormElement?: ElementType;
};

export default function OrganizationCard({
  id,
  name,
  description,
  btnDisable,
  btnText,
  FormElement,
}: OrganizationCardProps) {
  const theme = useTheme();

  // Styles.
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    p: theme.spacing(3),
    border: `1px solid ${theme.palette.secondary.main}`,
  };

  const formContainerStyles = {
    textAlign: 'right',
    pt: theme.spacing(2),
    mt: 'auto',
  };

  const [isDisabled] = useState(btnDisable);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const innerForm = (
    <>
      <input type="hidden" name="action" value="joinOrganization" />
      <input type="hidden" name="orgId" value={id} />
      <Button
        type="submit"
        disabled={isDisabled}
        variant="contained"
        sx={{ ml: 2 }}
      >
        {btnText}
      </Button>
    </>
  );
  const form = FormElement ? (
    <FormElement method="post">{innerForm}</FormElement>
  ) : (
    <form>{innerForm}</form>
  );
  return (
    <>
      <Paper sx={containerStyles} component="article">
        <Typography component="h3" variant="h2" mb={3}>
          {name}
        </Typography>
        {description && (
          <div dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <Box sx={formContainerStyles}>
          <Button
            disabled={isDisabled}
            variant="contained"
            onClick={handleClickOpen}
          >
            {btnText}
          </Button>
        </Box>
      </Paper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle variant="h3">{name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to join this organization?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          {form}
        </DialogActions>
      </Dialog>
    </>
  );
}
