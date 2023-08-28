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
} from '@mui/x-data-grid';

export type ExperienceRow = {
  id: GridRowId;
  col1?: string;
  col2?: string;
  col3?: string;
  col4?: string;
  col5?: string;
  col6?: string;
};

export interface DataTableProps {
  initialRows: ExperienceRow[];
}

export default function DataTableExperiences({ initialRows }: DataTableProps) {
  const theme = useTheme();

  const columns: GridColDef<ExperienceRow>[] = [
    { field: 'col1', headerName: 'First Name', width: 150 },
    { field: 'col2', headerName: 'Last Name', width: 150 },
    { field: 'col3', headerName: 'Email', width: 150 },
    { field: 'col4', headerName: 'Campus', width: 150 },
    { field: 'col5', headerName: 'Offering', width: 150 },
    { field: 'col6', headerName: 'Status', width: 150 },
    {
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
    },
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
        }}>Experiences</Typography>
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
        pageSizeOptions={[5, 10, 25, 50, 100]}
        sx={{ paddingLeft: theme.spacing(3) }}
      />
    </div>
  );
}
