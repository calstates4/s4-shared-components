import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import Link from '../link/link';

type BreadcrumbsProps = {
  items: {
    title: string;
    url: string;
  }[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <MuiBreadcrumbs aria-label="Breadcrumbs">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          underline="hover"
          color="secondary.dark"
          fontWeight={index === items.length - 1 ? '700' : undefined}
          aria-current={index === items.length - 1 ? 'page' : undefined}
        >
          {item.title}
        </Link>
      ))}
    </MuiBreadcrumbs>
  );
}
