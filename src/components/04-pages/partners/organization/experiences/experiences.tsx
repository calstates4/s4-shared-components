import { Typography, useTheme } from '@mui/material';
import Breadcrumbs from '../../../../01-elements/breadcrumbs/breadcrumbs';
import DataTableExperiences, { ExperienceRow } from '../../../../02-components/data-table/data-table-experiences';

export type PartnerExperiencePageProps = {
  title: string;
  items: ExperienceRow[] | any,
};

const data = {
  breadcrumb: [
    {
      title: 'Experiences',
      url: '/organization/experiences',
    },
  ],
};

export default function PartnerExperiencePage({
  title = 'Experiences',
  items,
}: PartnerExperiencePageProps) {

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
      <DataTableExperiences initialRows={ items } />
    </div>
  );
}
