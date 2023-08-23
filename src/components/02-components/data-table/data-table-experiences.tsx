import {
  Typography,
  useTheme,
} from '@mui/material';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import EmailIcon from '@mui/icons-material/Email';
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridRowId,
  GridActionsCellItem,
} from '@mui/x-data-grid';

export type Row = {
  id: GridRowId;
  col1?: string;
  col2?: string;
  col3?: string;
  col4?: string;
  col5?: string;
  col6?: string;
};

interface DataTableProps {
  initialRows: Row[];
}

export default function DataTableExperiences({ initialRows }: DataTableProps) {
  const theme = useTheme();

  function emailUser(col3?: string) {
    return () => {
      window.location.href = 'mailto:' + col3;
    };
  }

  function viewExperience(id: GridRowId) {
    return () => {
      window.location.href = '/organization/experiences/' + id;
    };
  }

  // Styles.
  const buttonStyles = {
    textTransform: 'uppercase',
  }

  const columns: GridColDef<Row>[] = [
    { field: 'col1', headerName: 'First Name', width: 150 },
    { field: 'col2', headerName: 'Last Name', width: 150 },
    { field: 'col3', headerName: 'Email', width: 150 },
    { field: 'col4', headerName: 'Campus', width: 150 },
    { field: 'col5', headerName: 'Offering', width: 150 },
    { field: 'col6', headerName: 'Status', width: 150 },
    {
      field: 'col7',
      headerName: 'Actions',
      width: 150,
      type: 'actions',
      disableExport: true,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EmailIcon />}
          label="Email user"
          onClick={emailUser(params.row.col3)}
          sx={ buttonStyles }
          showInMenu
        />,
        <GridActionsCellItem
          icon={<OpenInBrowserIcon />}
          label="View details"
          onClick={viewExperience(params.row.id)}
          sx={ buttonStyles }
          showInMenu
        />,
      ],
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
        <GridToolbarFilterButton sx={ buttonToolbarStyles } />
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
        pageSizeOptions={[5, 10, 25, 50, { value: -1, label: 'All' }]}
        sx={{ paddingLeft: theme.spacing(3) }}
      />
    </div>
  );
}
