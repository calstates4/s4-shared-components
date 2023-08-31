import React from 'react';
import { useTheme } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridFilterModel,
} from '@mui/x-data-grid';


export type DataTableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  toolbar: React.FC;
  filters?: GridFilterModel;
};

export default function DataTable({ rows, columns, toolbar: CustomToolbar, filters }: DataTableProps) {
  const theme = useTheme();

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection
      slots={{ toolbar: () => <CustomToolbar/> }}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      filterModel={filters}
      pageSizeOptions={[5, 10, 25, 50, 100]}
      sx={{ paddingLeft: theme.spacing(3) }}
    />
  );
}
