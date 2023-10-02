import { Paper, Box, Button, Typography, useTheme } from '@mui/material';
import Breadcrumbs from '../../../../01-elements/breadcrumbs/breadcrumbs';
import DataTable, {
  DataTableProps,
} from '../../../../02-components/data-table/data-table';
import React, {useRef} from "react";
import Tabs, { type RefHandler } from '../../../../02-components/tabs/tabs';

export type CourseDetailsPageProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  title: string;
  tableData: DataTableProps;
  reportTableData: DataTableProps;
};

export default function CourseDetailsPage({
    breadcrumb,
    title,
    tableData,
    reportTableData,
  }: CourseDetailsPageProps) {
  const theme = useTheme();
  const tabRef = useRef<RefHandler>(null);
  const contentContainerStyles = {
    width: '100%',
  };

  const containerStyles = {
    [theme.breakpoints.down('md')]: {
      pt: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      pt: theme.spacing(2),
      pb: theme.spacing(2),
    },
  };

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

  const wrapperTabs = {
    '.course-detail-panel': {
      pt: theme.spacing(0),
      pl: theme.spacing(0),
      pr: theme.spacing(0),
    }
  };

  return (
    <>
      <Breadcrumbs items={breadcrumb} />
      <Box sx={titleContainerStyles}>
        <Typography variant="h1" sx={titleStyles}>
          {title}
        </Typography>
      </Box>
      <Box sx={wrapperTabs}>
        <Tabs
          name="Course Details tables"
          id="course-details-tables"
          tabPanelClassName="course-detail-panel"
          ref={tabRef}
        >
          <div
            title="Students"
            className="tabContainer"
          >
            <Paper sx={contentContainerStyles}>
              <DataTable
                rows={tableData.rows}
                columns={tableData.columns}
                toolbar={tableData.toolbar}
              />
            </Paper>
          </div>
          <div
            title="Experiences"
            className="tab-container"
          >
            <Paper sx={contentContainerStyles}>
              <DataTable
                rows={reportTableData.rows}
                columns={reportTableData.columns}
                toolbar={reportTableData.toolbar}
              />
            </Paper>
          </div>
        </Tabs>
      </Box>
    </>
  );
}
