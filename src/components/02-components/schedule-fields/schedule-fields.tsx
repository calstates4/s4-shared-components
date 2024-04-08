import {
  Box,
  FormControl,
  InputLabel,
  Select,
  useTheme,
} from "@mui/material";
import React, {useState} from "react";

export type ScheduleFieldsProps = {
  day: string;
  startHour: string;
  startMin: string;
  startAmpm: string;
  endHour: string;
  endMin: string;
  endAmpm: string;
}

const days = [
  { id: '0', label: 'Sunday' },
  { id: '1', label: 'Monday' },
  { id: '2', label: 'Tuesday' },
  { id: '3', label: 'Wednesday' },
  { id: '4', label: 'Thursday' },
  { id: '5', label: 'Friday' },
  { id: '6', label: 'Suturday' },
  { id: '7', label: 'Monday – Friday' },
  { id: '8', label: 'Weekends' },
];
const hours = [
  { id: '1', label: '1' },
  { id: '2', label: '2' },
  { id: '3', label: '3' },
  { id: '4', label: '4' },
  { id: '5', label: '5' },
  { id: '6', label: '6' },
  { id: '7', label: '7' },
  { id: '8', label: '8' },
  { id: '9', label: '9' },
  { id: '10', label: '10' },
  { id: '11', label: '11' },
  { id: '12', label: '12' },
  { id: '0', label: '0' },
];
const min = [
  { id: '00', label: '00' },
  { id: '30', label: '30' },
];
const ampm = [
  { id: 'am', label: 'AM' },
  { id: 'pm', label: 'PM' },
];

export default function ScheduleFields({
  day,
  startHour,
  startMin,
  startAmpm,
  endHour,
  endMin,
  endAmpm,
}: ScheduleFieldsProps) {
  const theme = useTheme();
  const [inputFields, setInputFields] = useState([
    {
      day: '',
      startHour: '',
      startMin: '',
      startAmpm: '',
      endHour: '',
      endMin: '',
      endAmpm: '',
    }
  ]);
  const handleChange = (ev: any) => {
    const { name, value } = ev.target;
    setInputFields({
      ...inputFields,
      [name]: value
    })
  }

  const fieldStyles = {
    display: 'grid',
    gridTemplateColumns: "repeat(7, 1fr)",
    gridGap: 10,
  };

  return (
    <Box sx={fieldStyles}>
      <FormControl>
        <InputLabel>Day</InputLabel>
        <Select
          id="org-form-day"
          name="day"
          label="Day"
          native={true}
          defaultValue={day}
          onChange={handleChange}
        >
          <option value="none">Days…</option>
          {days.map((d) => (
            <option key={d.id} value={d.id}>
              {d.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Start Time</InputLabel>
        <Select
          id="org-form-starthours-hour"
          name="startHour"
          label="Hours"
          native={true}
          defaultValue={startHour}
          onChange={handleChange}
        >
          <option value="none">Hours…</option>
          {hours.map((sh) => (
            <option key={sh.id} value={sh.id}>
              {sh.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Minutes</InputLabel>
        <Select
          id="org-form-starthours-minute"
          name="startMin"
          label="Minute"
          native={true}
          defaultValue={startMin}
          onChange={handleChange}
        >
          <option value="none">Minutes…</option>
          {min.map((sm) => (
            <option key={sm.id} value={sm.id}>
              {sm.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>AM/PM</InputLabel>
        <Select
          id="org-form-starthours-ampm"
          name="startAmpm"
          label="AM/PM"
          native={true}
          defaultValue={startAmpm}
          onChange={handleChange}
        >
          <option value="none">AM/PM…</option>
          {ampm.map((ap) => (
            <option key={ap.id} value={ap.id}>
              {ap.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>End Time</InputLabel>
        <Select
          id="org-form-endhours-hour"
          name="endHour"
          label="Hours"
          native={true}
          defaultValue={endHour}
          onChange={handleChange}
        >
          <option value="none">Hours…</option>
          {hours.map((eh) => (
            <option key={eh.id} value={eh.id}>
              {eh.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Minutes</InputLabel>
        <Select
          id="org-form-endhours-minute"
          name="endMin"
          label="Minute"
          native={true}
          defaultValue={endMin}
          onChange={handleChange}
        >
          <option value="none">Minutes…</option>
          {min.map((em) => (
            <option key={em.id} value={em.id}>
              {em.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>AM/PM</InputLabel>
        <Select
          id="org-form-endhours-ampm"
          name="endAmpm"
          label="AM/PM"
          native={true}
          defaultValue={endAmpm}
          onChange={handleChange}
        >
          <option value="none">AM/PM…</option>
          {ampm.map((ap) => (
            <option key={ap.id} value={ap.id}>
              {ap.label}
            </option>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}