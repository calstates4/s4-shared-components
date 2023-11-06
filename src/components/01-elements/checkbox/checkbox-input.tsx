import {
  Box,
  Checkbox, SelectChangeEvent,
  useTheme,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useState} from "react";

export type CheckboxProps = {
  id: string;
  name: string;
  title: string;
  checked: boolean;
}

export default function CheckboxInput({
  id,
  name,
  title,
  checked,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);
  function checkboxChangeHandler() {
    setIsChecked(!isChecked)
  }

  return (
    <Box>
      <FormControlLabel
        value={id}
        name={name}
        control={
          <Checkbox
            onChange={checkboxChangeHandler}
            checked={isChecked}
          />
        }
        label={title}
      />
    </Box>
  );
}