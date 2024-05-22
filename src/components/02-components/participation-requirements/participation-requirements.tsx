/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  InputAdornment,
} from "@mui/material";
import React, {useState} from "react";

export type ParticipationRequirementsProps = {
  id: string;
  requirement_type?: string;
  requirements_fee?: string;
  requirements_cost?: string;
  requirement_types?: {
    id: string;
    label: string;
  }[];
}

export default function ParticipationRequirements({
  requirement_type,
  requirements_fee,
  requirements_cost,
  requirement_types,
}: ParticipationRequirementsProps) {
  const [inputFields, setInputFields] = useState([
    {
      id: '',
      requirement: '',
      requirements_fee: '',
      requirements_cost: '',
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
      {requirement_types &&
        <FormControl>
          <InputLabel>Participation Requirement</InputLabel>
          <Select
            id="org-form-participation-requirements"
            name="participationRequirements"
            label="Participation Requirements"
            native={true}
            defaultValue={requirement_type}
            onChange={handleChange}
          >
            <option value="none">Select an option…</option>
            {requirement_types.map((op:any) => (
              <option key={op.id} value={op.id}>
                {op.label}
              </option>
            ))}
          </Select>
        </FormControl>
      }
      <FormControl>
        <InputLabel>Total Fee</InputLabel>
        <OutlinedInput
          id="org-form-participation-requirements-fee"
          name="participationRequirementsFee"
          aria-label="Total Fee"
          label="Total Fee"
          defaultValue={requirements_fee}
          onChange={handleChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          placeholder="0"
          type="number"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Cost covered by organization</InputLabel>
        <OutlinedInput
          id="org-form-participation-requirements-cost"
          name="fieldParticipationRequirementsCost"
          aria-label="Cost covered by organization "
          label="Cost covered by organization "
          defaultValue={requirements_cost}
          onChange={handleChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          placeholder="0"
          type="number"
        />
      </FormControl>
    </Box>
  );
}
