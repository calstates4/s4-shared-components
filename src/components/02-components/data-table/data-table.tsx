import {
  Button,
  GridRenderCellParams,
  Typography,
  useTheme,
} from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import Link from '../../01-elements/link/link';

export type DataTableRowProp = {
  id: string | number,
  firstName?: string;
  lastName?: string;
  email?: string;
  campus?: string;
  offering?: string;
  status?: string;
  url?: string;
}

export type DataTableProps = {
  rows?: DataTableRowProp[];
  columns?: GridColDef[];
}

export default function DataTable({ rows, columns }: DataTableProps) {
  const theme = useTheme();

  function GridToolbar() {
    const theme = useTheme();

    return (
      <GridToolbarContainer sx={{
        display: 'flex',
        justifyContent: 'right',
        pt: theme.spacing(3),
      }}>
        <Typography component="h2" variant="h2" sx={{marginRight: 'auto'}}>Experiences</Typography>
        <GridToolbarColumnsButton sx={{
          border: '1px solid',
          marginRight: theme.spacing(3),
        }} />
        <GridToolbarFilterButton sx={{
          border: '1px solid',
          marginRight: theme.spacing(3),
        }} />
        <GridToolbarDensitySelector sx={{
          border: '1px solid',
          marginRight: theme.spacing(3),
        }} />
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

  columns?.push({
    field: 'col7',
    width: 150,
    type: 'actions',
    disableExport: true,
    renderCell: (params: GridRenderCellParams) => (
      <strong>
        <Button
          component={Link}
          href={'/organization/experiences/' + params.row.id}
          sx={{
            flexShrink: 0,
            fontWeight: 700,
          }}
        >
          View details
        </Button>
      </strong>
    ),
  },)

  return (
    <div style={{ height: 400, width: '100%' }}>
      {rows && columns && (
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
          pageSizeOptions={[5, 10, 25, 50, { value: -1, label: 'All' }]}
          sx={{ paddingLeft: theme.spacing(3) }}
        />)}

    </div>
  );
}
