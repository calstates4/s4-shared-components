import { Pagination, PaginationItem } from '@mui/material';
import { type PaginationProps } from '@mui/material/Pagination';
import { Link } from '@remix-run/react';

interface PagerProps extends PaginationProps {
  baseUrl: string;
  count: number;
  page: number;
}

export default function Pager({ baseUrl, count, page, ...props }: PagerProps) {
  return (
    <Pagination
      count={count}
      page={page}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`${baseUrl}${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
      {...props}
    />
  );
}
