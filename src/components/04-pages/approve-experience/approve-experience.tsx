import {
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import DataTable, {
  DataTableProps,
} from '../../02-components/data-table/data-table';

export type ApproveExperiencePageProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  title: string;
  tableData: DataTableProps;
};

export default function ApproveExperiencePage({
  breadcrumb,
  title,
  tableData,
}: ApproveExperiencePageProps) {
  const theme = useTheme();

  const titleStyles = {
    color: 'primary.main',
    mb: theme.spacing(2),
  };

  return (
    <>
      <Breadcrumbs items={breadcrumb}></Breadcrumbs>
      <Typography variant="h1" sx={titleStyles}>
        {title}
      </Typography>
      <Paper>
        <DataTable
          rows={tableData.rows}
          columns={tableData.columns}
          toolbar={tableData.toolbar}
        />
      </Paper>
    </>
  );
}
