import { useTheme } from '@mui/material';
import {
  DataGrid,
  GridFilterModel,
  type GridColDef,
  type GridRowsProp,
} from '@mui/x-data-grid';
import React from 'react';

export type DataTableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  toolbar: React.FC;
  filters?: GridFilterModel;
};

export default function DataTable({
  rows,
  columns,
  toolbar: CustomToolbar,
  filters,
}: DataTableProps) {
  const theme = useTheme();
  const [selectedIds, setSelectedIds] = React.useState([]);

  return (
    <>
      <DataGrid
        rows={rows}
        autoHeight
        getRowHeight={() => 'auto'}
        columns={columns}
        checkboxSelection
        onRowSelectionModelChange={(ids:any) => {
          const selectedIds = ids;
          setSelectedIds(selectedIds);
        }}
        slots={{ toolbar: () => <CustomToolbar /> }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        filterModel={filters}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        sx={{ paddingLeft: theme.spacing(3) }}
      />
      <input type="hidden" name="selectedIds" value={selectedIds} />
    </>
  );
}
