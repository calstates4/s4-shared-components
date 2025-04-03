import {
  Box,
  Button,
  Typography,
  useTheme,
} from '@mui/material';
import Link from '../../../components/01-elements/link/link';


export type CourseCardProps = {
  id: string;
  term?: string;
  courseName?: string;
  program?: string;
  enrollment?: string;
  studentExperience?: string;
  hoursApproved?: string;
  linkCourse?: string;
  linkAddOpportunity?: string;
  LinkEdit?: string;
};

export default function CourseCard({
  id,
  term,
  courseName,
  program,
  enrollment,
  studentExperience,
  hoursApproved,
  linkCourse,
  linkAddOpportunity,
  LinkEdit,
}: CourseCardProps) {
  const theme = useTheme();

  // Styles.
  const containerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    p: '20px',
    pb: '0',
    gap: '10px',
    minWidth: '1300px',

    '& > div': {
      marginBlock: 'auto',
    },
  };
  return (
    <>
      <Box sx={containerStyles}>
        <Box>
          <Typography>
            {term}
          </Typography>
        </Box>
        {linkCourse && (
          <Box>
            <Link href={linkCourse}>
              {courseName}
            </Link>
          </Box>
        )}
        <Box>
          <Typography>
            {program}
          </Typography>
        </Box>
        <Box>
          <Typography>
            {enrollment}
          </Typography>
        </Box>
        <Box>
          <Typography>
            {studentExperience}
          </Typography>
        </Box>
        <Box>
          <Typography>
            {hoursApproved}
          </Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            component={Link}
            href={linkAddOpportunity}
          >
            ADD OPPORTUNITY
          </Button>
        </Box>
      </Box>
    </>
  );
}
