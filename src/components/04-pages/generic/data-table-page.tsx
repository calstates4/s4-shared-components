import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Typography,
  useTheme,
} from '@mui/material';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Link from '../../01-elements/link/link';
import DataTable, {
  DataTableProps,
} from '../../02-components/data-table/data-table';
import ExposedForm, { ExposedFormProps } from '../../02-components/form/form';
import Tabs from '../../02-components/tabs/tabs';
import { useState } from 'react';
import InviteStaffDialog from './invite-staff-dialog';

export type DataTablePageProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  title: string;
  tableData: DataTableProps;
  membershipRequestedTableData?: DataTableProps;
  form?: ExposedFormProps;
  addUrl?: string;
  addTitle?: string;
  id?: string;
  inviteMembers?: boolean;
  formDialog?: ExposedFormProps;
};

export default function DataTablePage({
  breadcrumb,
  title,
  tableData,
  membershipRequestedTableData,
  form,
  addUrl,
  addTitle,
  id,
  inviteMembers,
  formDialog,
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

  //Dialog for inviting staff members
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Breadcrumbs items={breadcrumb}></Breadcrumbs>
      <Box sx={titleContainerStyles}>
        <Typography variant="h1" sx={titleStyles}>
          {title}
        </Typography>
        <div>
          {inviteMembers && (
            <Button
              variant="outlined"
              aria-label="Invite Staff Members"
              component={Link}
              onClick={handleOpen}
              startIcon={
                <AddIcon
                  sx={{
                    fontSize: '1rem',
                  }}
                />
              }
              sx={{
                flexShrink: 0,
                fontWeight: 700,
                mr: theme.spacing(1),
              }}
            >
              Invite Staff
            </Button>
          )}
          {addUrl && addTitle && (
            <Button
              variant="outlined"
              aria-label={addTitle}
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
        </div>
      </Box>
      {form && <ExposedForm {...form}></ExposedForm>}
      {tableData && membershipRequestedTableData ? (
        <Tabs id="staff-tabs" name="Staff Tabs">
          <Box aria-label="Staff members">
            <DataTable
              rows={tableData.rows}
              columns={tableData.columns}
              toolbar={tableData.toolbar}
              filters={tableData.filters}
              hideCols={tableData.hideCols}
            />
          </Box>
          <Box aria-label="Memberships Requests">
            <DataTable
              rows={membershipRequestedTableData.rows}
              columns={membershipRequestedTableData.columns}
              toolbar={membershipRequestedTableData.toolbar}
              filters={membershipRequestedTableData.filters}
              hideCols={membershipRequestedTableData.hideCols}
            />
          </Box>
        </Tabs>
      ) : (
        <DataTable
          rows={tableData.rows}
          columns={tableData.columns}
          toolbar={tableData.toolbar}
          filters={tableData.filters}
          hideCols={tableData.hideCols}
        />
      )}
      {inviteMembers && (
        <InviteStaffDialog id={id} form={formDialog} open={open} handleClose={handleClose} />
      )}
    </>
  );
}
