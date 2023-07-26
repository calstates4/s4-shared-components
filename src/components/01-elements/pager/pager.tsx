import { Pagination, PaginationItem } from '@mui/material';
import { type PaginationProps } from '@mui/material/Pagination';
import { Link } from '@remix-run/react';

interface PagerProps extends PaginationProps {
  baseUrl: string;
  count: number;
  page: number;
}

export default function Pager({ baseUrl, count, page, ...props }: PagerProps) {
  try {
    const parsedUrl = new URL(baseUrl);
    const searchParams = parsedUrl.searchParams;
    if (searchParams.has('page')) searchParams.delete('page');
    const search = searchParams.size ? `?${searchParams.toString()}` : '';
    const separator = search ? '&' : '?';
    return (
      <Pagination
        count={count}
        page={page}
        renderItem={(item) => {
          const pageParam = item.page === 1 ? '' : `page=${item.page}`;
          return (
            <PaginationItem
              component={Link}
              to={`${parsedUrl.pathname}${search}${
                pageParam ? `${separator}${pageParam}` : ''
              }`}
              {...item}
            />
          );
        }}
        {...props}
      />
    );
  } catch {
    return null;
  }
}
