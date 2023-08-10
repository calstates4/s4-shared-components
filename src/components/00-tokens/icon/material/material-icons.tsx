import { createElement } from 'react';
import { Box } from '@mui/material';
// Only use this component in storybook, loading all icons is not good for performance.
import * as MuiIcons from '@mui/icons-material';
import { Typography } from '@mui/material';

type MaterialIconsProps = {
  iconList: string[];
};

export default function MaterialIcons({ iconList }: MaterialIconsProps) {
  const renderedIcons = iconList.map((icon) => (
    <Box
      key={icon}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem',
      }}
    >
      {createElement(MuiIcons[icon as keyof typeof MuiIcons])}
      <Typography sx={{ pt: '1rem', fontFamily: 'monospace' }}>
        {icon}
      </Typography>
    </Box>
  ));

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {renderedIcons}
    </Box>
  );
}
