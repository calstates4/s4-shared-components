import { Box, useTheme } from '@mui/material';

import Wrapper from '../../02-components/wrapper/wrapper';

export type ColorProps = {
  color?: string;
  name?: string;
  hex?: string;
};

export default function Color({
  color,
  name,
  hex,
}: ColorProps) {
  const theme = useTheme();

  // Styles.
  const colorStyles = {
    p: theme.spacing(2),
    backgroundColor: color,
  };

  return (
    <Wrapper>
      <Box sx={colorStyles}></Box>
      {name}: {hex}
    </Wrapper>
  );
}
