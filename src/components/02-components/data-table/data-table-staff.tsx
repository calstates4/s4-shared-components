import {
  Button,
  Typography,
  useTheme,
} from '@mui/material';
import Link from '../../01-elements/link/link';
import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridRenderCellParams,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridFilterModel,
  GridLogicOperator,
} from '@mui/x-data-grid';

export type StaffRow = {
  id: GridRowId;
  col1?: string;
  col2?: string;
  col3?: string;
};

export interface DataTableProps {
  initialRows: StaffRow[];
  department: string | null;
}

export default function DataTableStaff({ initialRows, department }: DataTableProps) {
  const theme = useTheme();

  const columns: GridColDef<StaffRow>[] = [
    { field: 'col1', headerName: 'First Name', width: 150 },
    { field: 'col2', headerName: 'Last Name', width: 150 },
    { field: 'col3', headerName: 'Department', width: 250 },
//    {
//      field: 'col4',
//      width: 200,
//      type: 'actions',
//      disableExport: true,
//      renderCell: (params: GridRenderCellParams) => (
//        <strong>
//          <Button
//            component={Link}
//            href={'/organization/staff/edit/' + params.row.id}
//            disabled
//            sx={{
//              flexShrink: 0,
//              fontWeight: 700,
//              border: '1px solid',
//            }}
//          >
//            Assign Department
//          </Button>
//        </strong>
//      ),
//    },
//    {
//      field: 'col5',
//      width: 150,
//      type: 'actions',
//      disableExport: true,
//      renderCell: (params: GridRenderCellParams) => (
//        <strong>
//          <Button
//            component={Link}
//            href={'/organization/staff/archive/' + params.row.id}
//            disabled
//            sx={{
//              flexShrink: 0,
//              fontWeight: 700,
//              border: '1px solid',
//            }}
//          >
//            Archive
//          </Button>
//        </strong>
//      ),
//    },
  ];

  function GridToolbar() {
    const theme = useTheme();
    const breakpoint = 'sm';

    // Styles.
    const buttonToolbarStyles = {
      border: '1px solid',
      minWidth: '100%',
      [theme.breakpoints.up(breakpoint)]: {
        minWidth: 'min-content',
        marginRight: theme.spacing(3),
      }
    }

    return (
      <GridToolbarContainer sx={{
        display: 'flex',
        justifyContent: 'left',
        pt: theme.spacing(3),
        [theme.breakpoints.up(breakpoint)]: {
          justifyContent: 'right',
        }
      }}>
        <Typography component="h2" variant="h2" sx={{
          minWidth: '100%',
          [theme.breakpoints.up(breakpoint)]: {
            minWidth: 'min-content',
            marginRight: 'auto',
          }
        }}>Staff</Typography>
        <GridToolbarColumnsButton sx={ buttonToolbarStyles } />
        <GridToolbarDensitySelector sx={ buttonToolbarStyles } />
        <GridToolbarExport
          printOptions={{
            hideFooter: true,
            hideToolbar: true,
          }}
          sx={ buttonToolbarStyles }
        />
      </GridToolbarContainer>
    );
  }

  const filterModel: GridFilterModel = {
    items: [
      { field: 'col3', operator: 'contains', value: department }
    ],
    logicOperator: GridLogicOperator.Or,
  };

  return (
    <div>
      <DataGrid
        rows={initialRows}
        columns={columns}
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        filterModel={filterModel}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        sx={{ paddingLeft: theme.spacing(3) }}
      />
    </div>
  );
}
