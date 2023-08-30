import {
  Box,
  Button,
  Typography,
  useTheme
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Breadcrumbs from '../../../../01-elements/breadcrumbs/breadcrumbs';
import DataTableStaff, { StaffRow } from '../../../../02-components/data-table/data-table-staff';
import FormStaff, { FormStaffProps } from '../../../../02-components/form/form-staff';
import Link from '../../../../01-elements/link/link';

export type PartnerStaffPageProps = {
  title: string;
  items: StaffRow[] | any;
  formStaff: FormStaffProps | any;
  department: string | null;
  addUrl: string;
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
  title,
  items,
  formStaff,
  department,
  addUrl,
}: PartnerStaffPageProps) {

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
    <div>
      <Breadcrumbs items={data.breadcrumb}></Breadcrumbs>
      <Box sx={titleContainerStyles}>
        <Typography variant="h1" sx={titleStyles}>
          { title }
        </Typography>
{/*        <Button
//          variant="outlined"
//          component={Link}
//          href={addUrl}
//          disabled
//          startIcon={
//            <AddIcon
//              sx={{
//                fontSize: '1rem',
//                mr: theme.spacing(0.5),
//              }}
//            />
//          }
//          sx={{
//            flexShrink: 0,
//            fontWeight: 700,
//          }}
//        >
//          Invite a staff member
//        </Button>
  */}
      </Box>
      <FormStaff
        {...formStaff}
      ></FormStaff>
      <DataTableStaff initialRows={ items } department={department} />
    </div>
  );
}
