import MuiLink, { type LinkProps as MuiLinkProps } from '@mui/material/Link';
import { Link as RemixLink } from '@remix-run/react';
import { type ReactNode } from 'react';

interface LinkProps extends MuiLinkProps {
  href: string;
  prefetch?: 'none' | 'intent' | 'render';
  children: ReactNode;
}

export default function Link({
  href,
  children,
  prefetch,
  ...props
}: LinkProps) {
  // Test for internal links (links starting with '/' + text).
  // Adapted from https://www.gatsbyjs.com/docs/gatsby-link/#reminder-use-link-only-for-internal-links.
  if (/^\/(?!\/)/.test(href)) {
    const linkProps = prefetch ? { ...props, prefetch } : props;
    return (
      <MuiLink component={RemixLink} to={href} {...linkProps}>
        {children}
      </MuiLink>
    );
  } else {
    return (
      <MuiLink href={href} {...props}>
        {children}
      </MuiLink>
    );
  }
}
