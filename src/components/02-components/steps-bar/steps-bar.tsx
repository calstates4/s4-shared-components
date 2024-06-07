import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useTheme } from '@mui/material';

export type StepsProps = {
  steps: string[],
  step: string,
};

export default function StepsBar({
  steps,
  step,
}:StepsProps) {
  const theme = useTheme();
  const stepsList = steps.map((data, index) => {
    return (
      <Step key={index}>
        <StepLabel>{data}</StepLabel>
      </Step>
    );
  });

  return (
    <Box sx={{ width: '100%', mb: theme.spacing(3) }}>
      <Stepper activeStep={parseInt(step)}>
        {stepsList}
      </Stepper>
    </Box>
  );
}
