import { Typography, useTheme } from '@mui/material';
import Breadcrumbs from '../../../../01-elements/breadcrumbs/breadcrumbs';
import DataTable, {
  DataTableProps,
} from '../../../../02-components/data-table/data-table';

export type PartnerExperiencePageProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  title: string;
  tableData: DataTableProps;
};

export default function PartnerExperiencePage({
  title = 'Experiences',
  breadcrumb,
  tableData,
}: PartnerExperiencePageProps) {
  const theme = useTheme();

  const titleStyles = {
    color: 'primary.main',
    mb: theme.spacing(2),
  };

  return (
    <>
      <Breadcrumbs items={breadcrumb}></Breadcrumbs>
      <Typography variant="h1" sx={titleStyles}>
        {title}
      </Typography>
      <DataTable rows={tableData.rows} columns={tableData.columns} />
    </>
  );
}
