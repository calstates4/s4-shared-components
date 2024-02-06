import { Button, ListItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import {
  GridFilterModel,
  GridLogicOperator,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import Link from '../../01-elements/link/link';

export const genericTableColumns = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  {
    field: 'url',
    width: 150,
    type: 'actions',
    disableExport: true,
    renderCell: (params: GridRenderCellParams) => (
      <strong>
        <Button
          component={Link}
          href={
            'http://localhost:6006/?path=/story/components-data-table--default/organization/experiences/' +
            params.row.id
          }
          sx={{
            fontWeight: 700,
          }}
        >
          View details
        </Button>
      </strong>
    ),
  },
];

export const genericTableRows = [
  {
    id: 1,
    firstName: 'Emily',
    lastName: 'Parker',
    email: 'emily@test.com',
  },
  {
    id: 2,
    firstName: 'Mathew',
    lastName: 'Ross',
    email: 'csmit@test.com',
  },
  {
    id: 3,
    firstName: 'Carlos',
    lastName: 'Smith',
    email: 'csmit@test.com',
  },
  {
    id: 4,
    firstName: 'Robert',
    lastName: 'Thomsom',
    email: 'csmit@test.com',
  },
  {
    id: 5,
    firstName: 'Peter',
    lastName: 'Brown',
    email: 'csmit@test.com',
  },
  {
    id: 6,
    firstName: 'David',
    lastName: 'Mask',
    email: 'csmit@test.com',
  },
  {
    id: 7,
    firstName: 'Martin',
    lastName: 'James',
    email: 'csmit@test.com',
  },
];

export const staffTableRows = [
  {
    id: 1,
    col1: 'Emily',
    col2: 'Parker',
    departments: [
      'Banking',
      'Administration'
    ],
    roles: [
      'Staff',
      'Organization Editor',
      'Organization Manager'
    ],
  },
  {
    id: 2,
    col1: 'Peter',
    col2: 'Parker',
    departments: [
      'Education',
      'Banking',
      'Administration'
    ],
    roles: [ 'Staff' ],
  },
  {
    id: 3,
    col1: 'Sarah',
    col2: 'Parker',
    departments: ['Elementary'],
    roles: [ 'Organization Editor' ],
  },
  {
    id: 4,
    col1: 'John',
    col2: 'Parker',
    departments: ['Teaching'],
    roles: [ 'Organization Manager' ],
  },
  {
    id: 5,
    col1: 'Fernando',
    col2: 'Parker',
    departments: ['Teaching', 'Social Work'],
    roles: [],
  },
  {
    id: 6,
    col1: 'Bob',
    col2: 'Parker',
    departments: ['Education'],
    roles: [
      'Staff',
      'Organization Manager'
    ],
  },
  {
    id: 7,
    col1: 'George',
    col2: 'Parker',
    departments: [],
    roles: [
      'Organization Editor',
      'Organization Manager'
    ],
  },
];

export const staffTableColumns = [
  { field: 'col1', headerName: 'First Name', width: 150 },
  { field: 'col2', headerName: 'Last Name', width: 150 },
  {
    field: 'col3',
    headerName: 'Departments',
    width: 150,
    renderCell: (params: GridRenderCellParams) => (
      <ul style={{listStyleType: 'none', padding: '0'}}>
        {params.row.departments.map((item:string, index: number) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    field: 'col4',
    headerName: 'Roles',
    width: 170,
    renderCell: (params: GridRenderCellParams) => (
      <ul style={{listStyleType: 'none', padding: '0'}}>
        {params.row.roles.map((item:string, index: number) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    field: 'col5',
    width: 220,
    type: 'actions',
    disableExport: true,
    renderCell: (params: GridRenderCellParams) => (
      <strong>
        <Button
          component={Link}
          href={'/organization/staff/edit/' + params.row.id}
          disabled={false}
          sx={{
            flexShrink: 0,
            fontWeight: 700,
            border: '1px solid',
          }}
        >
          Assign Department
        </Button>
      </strong>
    ),
  },
  {
    field: 'col6',
    width: 130,
    type: 'actions',
    disableExport: true,
    renderCell: (params: GridRenderCellParams) => (
      <strong>
        <Button
          component={Link}
          href={'/organization/role/edit/' + params.row.id}
          disabled={false}
          sx={{
            flexShrink: 0,
            fontWeight: 700,
            border: '1px solid',
          }}
        >
          Edit Role
        </Button>
      </strong>
    ),
  },
];

export const experiencesTableColumns = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'campus', headerName: 'Campus', width: 150 },
  { field: 'offering', headerName: 'Offering', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
  {
    field: 'url',
    width: 150,
    type: 'actions',
    disableExport: true,
    renderCell: (params: GridRenderCellParams) => (
      <strong>
        <Button
          component={Link}
          href={'/organization/experiences/' + params.row.id}
          sx={{
            fontWeight: 700,
          }}
        >
          View details
        </Button>
      </strong>
    ),
  },
];

export const experiencesTableRows = [
  {
    id: 1,
    firstName: 'Emily',
    lastName: 'Parker',
    email: 'emily@mail.com',
    campus: 'Channel Islands',
    offering: 'Offering 1',
    status: 'Needs approval',
  },
  {
    id: 2,
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'peter@mail.com',
    campus: 'Stanislaus',
    offering: 'Offering 2',
    status: 'Pending forms',
  },
  {
    id: 3,
    firstName: 'Emily',
    lastName: 'Parker',
    email: 'emily@mail.com',
    campus: 'Channel Islands',
    offering: 'Offering 3',
    status: 'Active',
  },
  {
    id: 4,
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'peter@mail.com',
    campus: 'Stanislaus',
    offering: 'Offering 4',
    status: 'Completed',
  },
  {
    id: 5,
    firstName: 'Emily',
    lastName: 'Parker',
    email: 'emily@mail.com',
    campus: 'Channel Islands',
    offering: 'Offering 4',
    status: 'Pending forms',
  },
  {
    id: 6,
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'peter@mail.com',
    campus: 'Stanislaus',
    offering: 'Offering 2',
    status: 'Active',
  },
  {
    id: 7,
    firstName: 'Emily',
    lastName: 'Parker',
    email: 'emily@mail.com',
    campus: 'Channel Islands',
    offering: 'Offering 1',
    status: 'Completed',
  },
];

export const staffFilterModel: GridFilterModel = {
  items: [{ field: 'col3', operator: 'contains', value: '' }],
  logicOperator: GridLogicOperator.Or,
};

export const coursesTableRows = [
  {
    id: 1,
    term: 'Fall 2022',
    courseName: 'ENGL 480 (01): Intro To Grantwriting',
    program: 'Service learning',
    enrollment: '15',
    studentExperience: '2',
    hoursApproved: '4',
    linkCourse: '#',
    linkAddOpportunity: '#',
    LinkEdit: '',
  },
  {
    id: 2,
    term: 'Fall 2022',
    courseName: 'ENGL 480 (01): Intro To Grantwriting',
    program: 'Service learning',
    enrollment: '15',
    studentExperience: '2',
    hoursApproved: '4',
    linkCourse: '#',
    linkAddOpportunity: '#',
    LinkEdit: '#',
  },
];

export const coursesTableColumns = [
  { field: 'term', headerName: 'Term', width: 100 },
  {
    field: 'courseName',
    headerName: 'Course Name',
    width: 300,
    type: 'actions',
    disableExport: true,
    renderCell: (params: GridRenderCellParams) => (
      <Link href={params.row.linkCourse}>{params.row.courseName}</Link>
    ),
  },
  { field: 'program', headerName: 'Program', width: 200 },
  { field: 'enrollment', headerName: 'Enrollment', width: 100 },
  { field: 'studentExperience', headerName: 'Experiences', width: 100 },
  { field: 'hoursApproved', headerName: 'Hours approved', width: 150 },
  {
    field: 'url',
    width: 200,
    type: 'actions',
    disableExport: true,
    renderCell: (params: GridRenderCellParams) => (
      <strong>
        <Button
          component={Link}
          href={params.row.linkAddOpportunity}
          sx={{
            fontWeight: 700,
          }}
        >
          Add Opportunity
        </Button>
      </strong>
    ),
  },
  {
    field: 'urlEdit',
    width: 50,
    type: 'actions',
    disableExport: true,
    renderCell: (params: GridRenderCellParams) => (
      <Link href={params.row.LinkEdit}>
        <ListItem>
          <EditIcon fontSize="small" sx={{ color: 'black' }} />
        </ListItem>
      </Link>
    ),
  },
];

export const enrolledStudentsTableRows = [
  {
    id: 1,
    firstName: 'Emily',
    lastName: 'Parker',
    lastlogin: '09/12/2023 - 10:10am',
    experienceData: [
      {cid: 6, eid: 3, oppName: 'Community Roots Garden'}
    ],
  },
  {
    id: 2,
    firstName: 'Mathew',
    lastName: 'Ross',
    lastlogin: '03/28/2023 - 11:16am',
    experienceData: [
      {cid: 6, eid: 1, oppName: 'Community Roots Garden'},
      {cid: 6, eid: 3, oppName: 'Community Garden Social'},
      {cid: 6, eid: 3, oppName: 'Community Outreach'},
    ],
  },
];

export const enrolledStudentsTableColumns = [
  { field: 'firstName', headerName: 'First name', width: 200 },
  { field: 'lastName', headerName: 'Last name', width: 200 },
  { field: 'lastlogin', headerName: 'Last login', width: 200 },
  {
    field: 'url',
    headerName: 'Experiences',
    width: 300,
    type: 'actions',
    disableExport: true,
    renderCell: (params: GridRenderCellParams) => (
      <ul>
        {params.row.experienceData.map((item: {cid: string, eid: string, oppName: string}, index: number) => (
          <li key={index}>
            <Link
              href={'/course/' + item.cid + '/experience/' + item.eid}
            >
              #{item.eid} - {item.oppName}
            </Link>
          </li>
        ))}
      </ul>
    ),
  },
];

export const reportStudentsTableRows = [
  {
    id: 1,
    experienceData: {cid: 6, eid: 1, expName: 'Community Roots Garden'},
    firstName: 'Emily',
    lastName: 'Parker',
    organization: {id : 2, orgName: 'Community Roots garden'},
    opportunity: 'Opportunity Name',
    formsData: [],
    forms: 'TBD',
    estHours: '20',
    repHours: '16',
    siteStaff: 'Charles Barkley',
  },
  {
    id: 2,
    experienceData: {cid: 6, eid: 2, expName: 'Community Roots Garden #2'},
    firstName: 'Joe',
    lastName: 'Parker',
    organization: {id : 2, orgName: 'Community Roots garden'},
    opportunity: 'Opportunity Name',
    formsData: [{
      text: 'Pre-Course Survey [1 of 1 submissions]',
      lnk: 'http://localhost:6006/'
    }],
    forms: 'TBD',
    estHours: '100',
    repHours: '50',
    siteStaff: 'Michael Jordan',
  },
  {
    id: 3,
    experienceData: {cid: 6, eid: 3, expName: 'Community Roots Garden #3'},
    firstName: 'James',
    lastName: 'Parker',
    organization: {id : 2, orgName: 'Community Roots garden'},
    opportunity: 'Opportunity Name',
    formsData: [
      {
        text: 'Pre-Course Survey [1 of 1 submissions]',
        lnk: 'http://localhost:6006/'
      },
      {
        text: 'Post-Course Survey [0 of 1 submissions]',
        lnk: '#'
      },
    ],
    estHours: '100',
    repHours: '50',
    siteStaff: 'Michael Staff',
  },
];

export const reportStudentsTableColumns = [
  {
    field: 'experienceUrl',
    headerName: 'Experience',
    width: 250,
    disableExport: true,
    renderCell: (params: GridRenderCellParams) => (
      <Link
        href={'/course/' + params.row.experienceData.cid + '/experience/' + params.row.experienceData.eid}
      >
        {params.row.experienceData.expName}
      </Link>
    ),
  },
  { field: 'firstName', headerName: 'First name', width: 100 },
  { field: 'lastName', headerName: 'Last name', width: 100 },
  {
    field: 'organizationUrl',
    headerName: 'Organization',
    width: 200,
    renderCell: (params: GridRenderCellParams) => (
      <Link
        href={'/organization/' + params.row.organization.id}
      >
        {params.row.organization.orgName}
      </Link>
    ),
  },
  { field: 'opportunity', headerName: 'Opportunity', width: 200 },
  { field: 'forms',
    headerName: 'Forms',
    width: 350,
    renderCell: (params: GridRenderCellParams) => (
      <ul style={{listStyleType: 'none', padding: '0'}}>
        {params.row.formsData.map((item: { text: string, lnk: string }, index: number) => (
          <li key={index}>
            {item.lnk === '#'
              ? item.text
              : <Link href={item.lnk} >{item.text}</Link>}
          </li>
        ))}
      </ul>
    ),
  },
  { field: 'estHours', headerName: 'Estimated hours', width: 125},
  { field: 'repHours', headerName: 'Reported hours', width: 125},
  { field: 'siteStaff', headerName: 'Site staff', width: 200},
];
