import {
  Box,
  Checkbox,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useState} from "react";

export type CheckboxProps = {
  id: string;
  value: string;
  name: string;
  title: string;
  checked: boolean;
}

export default function CheckboxInput({
  id,
  value,
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
            value={value}
            onChange={checkboxChangeHandler}
            checked={isChecked}
          />
        }
        label={title}
      />
    </Box>
  );
}
