import { Typography } from '@mui/material';
import Link from '../../01-elements/link/link';
import Logo from '../../01-elements/logo/logo';

export type BrandProps = {
  title?: string;
  linkURL?: string;
};

export default function Brand({ title, linkURL = '/' }: BrandProps) {
  return (
    <Link
      sx={{ display: 'flex', alignItems: 'center', marginLeft: (theme) => theme.spacing(1) }}
      underline="none"
      href={linkURL}
      aria-label={`${title} Dashboard`}
    >
      <Logo />
      {title && (
        <Typography
          component="span"
          variant="h2"
          color="white"
          sx={{ fontWeight: '800', marginLeft: (theme) => theme.spacing(3) }}
        >
          {title}
        </Typography>
      )}
    </Link>
  );
}
