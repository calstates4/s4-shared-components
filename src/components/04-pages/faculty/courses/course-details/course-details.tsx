import {Paper, Box, Typography, useTheme, Button} from '@mui/material';
import DataTable, {
  DataTableProps,
} from '../../../../02-components/data-table/data-table';
import { useRef } from "react";
import Tabs, { type RefHandler } from '../../../../02-components/tabs/tabs';
import Breadcrumbs from '../../../../01-elements/breadcrumbs/breadcrumbs';
import Link from "~/components/01-elements/link/link";

export type CourseDetailsPageProps = {
  breadcrumb: {
    title: string;
    url: string;
  }[];
  title: string;
  term: string;
  program: string;
  experience: string;
  max: string;
  lmsLink: string;
  faculty: string;
  tableData: DataTableProps;
  reportTableData: DataTableProps;
};

export default function CourseDetailsPage({
    breadcrumb,
    title,
    term,
    program,
    experience,
    max,
    lmsLink,
    faculty,
    tableData,
    reportTableData,
  }: CourseDetailsPageProps) {
  const theme = useTheme();
  const tabRef = useRef<RefHandler>(null);
  const contentContainerStyles = {
    width: '100%',
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

  const blockContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    pt: theme.spacing(3),
    pb: theme.spacing(3),
    mb: theme.spacing(4),
  };

  const titleBlock = {
    mb: theme.spacing(2),
  };

  const itemCol = {
    flexGrow: 1,
    pl: theme.spacing(3),
    pr: theme.spacing(3),
    pb: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      pb: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      pb: theme.spacing(3),
    }
  };

  const leftLine = {
    borderLeft: '1px solid rgba(224, 224, 224, 1)',
    [theme.breakpoints.down('md')]: {
      borderLeft: '0',
    },
  };

  const spaceTop = {
    pt: theme.spacing(4),
  };

  const definitionListStyles = {
    mt: 0,
    mb: theme.spacing(1),
    dt: {
      display: 'inline',
      fontWeight: '700',
    },
    dd: {
      display: 'inline',
      ml: 0,
    },
    [theme.breakpoints.up('sm')]: {
      mb: 0,
    },
  };

  return (
    <>
      <Breadcrumbs items={breadcrumb} />
      <Box sx={titleContainerStyles}>
        <Typography variant="h1" sx={titleStyles}>
          {title}
        </Typography>
      </Box>
      <Paper sx={blockContainerStyles}>
        <Box sx={itemCol}>
          <Typography variant="h4" sx={titleBlock}>Course Detail</Typography>
          {term && (
            <Box sx={definitionListStyles} component="dl">
              <dt>Term: </dt>
              <dd>{term}</dd>
            </Box>
          )}
          {program && (
            <Box sx={definitionListStyles} component="dl">
              <dt>Program: </dt>
              <dd>{program}</dd>
            </Box>
          )}
        </Box>
        <Box sx={[itemCol, spaceTop]}>
          {experience && (
            <Box sx={definitionListStyles} component="dl">
              <dt>Experience Requirement: </dt>
              <dd>{experience}</dd>
            </Box>
          )}
          {max && (
            <Box sx={definitionListStyles} component="dl">
              <dt>Max placements per student: </dt>
              <dd>{max}</dd>
            </Box>
          )}
        </Box>
        <Box sx={[itemCol, leftLine]}>
          {lmsLink && (
            <>
              <Typography variant="h4" sx={titleBlock}>Syllabus</Typography>
              <Button
                variant="outlined"
                color="inherit"
                href={lmsLink}
              >
                VISIT (LMS LINK)
              </Button>
            </>
          )}
        </Box>
        <Box sx={[itemCol, leftLine]}>
          {faculty && (
            <>
              <Typography variant="h4" sx={titleBlock}>Faculty</Typography>
              <Box>{faculty}</Box>
            </>
          )}
        </Box>
      </Paper>
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
