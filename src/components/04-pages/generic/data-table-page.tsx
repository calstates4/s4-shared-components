import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Typography, useTheme } from '@mui/material';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Link from '../../01-elements/link/link';
import DataTable, {
  DataTableProps,
} from '../../02-components/data-table/data-table';
import ExposedForm, { ExposedFormProps } from '../../02-components/form/form';

export type DataTablePageProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  title: string;
  tableData: DataTableProps;
  form?: ExposedFormProps;
  addUrl?: string;
  addTitle?: string;
};

export default function DataTablePage({
  breadcrumb,
  title,
  tableData,
  form,
  addUrl,
  addTitle,
}: DataTablePageProps) {
  const theme = useTheme();

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
      <Breadcrumbs items={breadcrumb}></Breadcrumbs>
      <Box sx={titleContainerStyles}>
        <Typography variant="h1" sx={titleStyles}>
          {title}
        </Typography>
        {addUrl && addTitle && (
          <Button
            variant="outlined"
            component={Link}
            href={addUrl}
            startIcon={
              <AddIcon
                sx={{
                  fontSize: '1rem',
                  mr: theme.spacing(0.5),
                }}
              />
            }
            sx={{
              flexShrink: 0,
              fontWeight: 700,
            }}
          >
            {addTitle}
          </Button>
        )}
      </Box>
      {form && <ExposedForm {...form}></ExposedForm>}
      <DataTable
        rows={tableData.rows}
        columns={tableData.columns}
        toolbar={tableData.toolbar}
        filters={tableData.filters}
      />
    </>
  );
}
