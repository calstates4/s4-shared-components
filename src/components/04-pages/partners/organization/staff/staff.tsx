import { Typography, useTheme } from '@mui/material';
import Breadcrumbs from '../../../../01-elements/breadcrumbs/breadcrumbs';
import DataTableStaff, { StaffRow } from '../../../../02-components/data-table/data-table-staff';

export type PartnerStaffPageProps = {
  title: string;
  items: StaffRow[] | any,
};

const data = {
  breadcrumb: [
    {
      title: 'Staff',
      url: '/organization/staff',
    },
  ],
};

export default function PartnerStaffPage({
  title = 'Staff',
  items,
}: PartnerStaffPageProps) {

  const theme = useTheme();

  const titleStyles = {
    color: 'primary.main',
    mb: theme.spacing(2),
  };

  return (
    <div>
      <Breadcrumbs items={data.breadcrumb}></Breadcrumbs>
      <Typography variant="h1" sx={titleStyles}>
        { title }
      </Typography>
      <DataTableStaff initialRows={ items } />
    </div>
  );
}
