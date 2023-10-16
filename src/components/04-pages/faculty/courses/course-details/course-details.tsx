import { Paper, Box, Typography, useTheme } from '@mui/material';
import DataTable, {
  DataTableProps,
} from '../../../../02-components/data-table/data-table';

export type CourseDetailsPageProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  title: string;
  tableData: DataTableProps;
};

export default function CourseDetailsPage({
    title,
    tableData,
  }: CourseDetailsPageProps) {
  const theme = useTheme();

  const contentContainerStyles = {
    width: '100%',
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  };

  const titleStyles = {
    color: 'primary.main',
    mb: theme.spacing(2),
  };

  const titleContainerStyles = {
    mb: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
  };

  return (
    <>
      <Box sx={titleContainerStyles}>
        <Typography variant="h1" sx={titleStyles}>
          {title}
        </Typography>
      </Box>
      <Paper sx={contentContainerStyles}>
        <DataTable
          rows={tableData.rows}
          columns={tableData.columns}
          toolbar={tableData.toolbar}
        />
      </Paper>
    </>
  );
}
