/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, {useState} from "react";

export type StudentsInformationProps = {
  id: string;
  student_email?: string;
  student_name?: string;
}

export default function ParticipationRequirements({
  student_email,
  student_name,
}: StudentsInformationProps) {
  const [inputFields, setInputFields] = useState([
    {
      id: '',
      student_email: '',
      student_name: '',
    }
  ]);

  const handleChange = (ev: any) => {
    const { name, value } = ev.target;
    setInputFields({
      ...inputFields,
      [name]: value
    })
  }

  // Styles
  const fieldStyles = {
    display: 'grid',
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: 10,
    width: '100%',
  };

  return (
    <Box sx={fieldStyles}>
      <FormControl>
        <InputLabel>Student Name</InputLabel>
        <OutlinedInput
          id="offering-form-student-name"
          name="fieldStudetName"
          aria-label="Student Name"
          label="Student Name"
          defaultValue={student_name}
          onChange={handleChange}
          placeholder="Student Name"
          type="text"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Student Email</InputLabel>
        <OutlinedInput
          id="offering-form-student-email"
          name="fieldStudetEmail"
          aria-label="Student Email"
          label="Student Email"
          defaultValue={student_email}
          onChange={handleChange}
          placeholder="Student Email"
          type="text"
        />
      </FormControl>
    </Box>
  );
}
