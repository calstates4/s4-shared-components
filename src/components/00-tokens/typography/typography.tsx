import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Wrapper from '../../02-components/wrapper/wrapper';

export default function TypographyDemo() {
  const theme = useTheme();
  const typographyVariants = Object.keys(theme.typography);

  return (
    <Box>
      {typographyVariants.map((variant) => {
        // @ts-ignore
        const variantTypography = theme.typography[variant];

        return (
          <Wrapper key={variant} title={variant}>
            <Typography variant={variant as any} gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur
            </Typography>
            {variant === 'fontFamily' ? (
              <Typography variant="body2">
                <div style={{ fontWeight: 'bold', margin: theme.spacing(2, 0, 2, 0) }}>Attributes:</div>
                <div>{variantTypography}</div>
              </Typography>
            ) : typeof variantTypography === 'function' ? (
              <Typography variant="body2">
                This variant is a function.
              </Typography>
            ) : (
              <Typography variant="body2">
                {Object.entries(variantTypography).length === 0 ? (
                  <div>This variant has no properties</div>
                ) : (
                  <>
                    <div style={{ fontWeight: 'bold', margin: theme.spacing(2, 0, 2, 0) }}>Attributes:</div>
                    {Object.entries(variantTypography).map(([property, value]) => (
                      <div key={property}>
                        {property}: {value as any}
                      </div>
                    ))}
                  </>
                )}
              </Typography>
            )}
          </Wrapper>
        );
      })}
    </Box>
  );
}
