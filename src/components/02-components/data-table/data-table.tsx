import { Typography, useTheme } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';

export type DataTableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
};

export default function DataTable({ rows, columns }: DataTableProps) {
  const theme = useTheme();

  function GridToolbar() {
    const theme = useTheme();

    return (
      <GridToolbarContainer
        sx={{
          display: 'flex',
          justifyContent: 'right',
          pt: theme.spacing(3),
        }}
      >
        <Typography component="h2" variant="h2" sx={{ marginRight: 'auto' }}>
          Experiences
        </Typography>
        <GridToolbarColumnsButton
          sx={{
            border: '1px solid',
            marginRight: theme.spacing(3),
          }}
        />
        <GridToolbarDensitySelector
          sx={{
            border: '1px solid',
            marginRight: theme.spacing(3),
          }}
        />
        <GridToolbarExport
          printOptions={{
            hideFooter: true,
            hideToolbar: true,
          }}
          sx={{
            border: '1px solid',
            marginRight: theme.spacing(3),
          }}
        />
      </GridToolbarContainer>
    );
  }

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection
      slots={{ toolbar: GridToolbar }}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10, 25, 50, 100]}
      sx={{ paddingLeft: theme.spacing(3) }}
    />
  );
}
