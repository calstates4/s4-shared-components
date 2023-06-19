import { Button, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import Link from '../../01-elements/link/link';

type CardPendingTasksProps = {
  ctaLink: string;
};

export default function CardPendingTasks({ ctaLink }: CardPendingTasksProps) {
  const theme = useTheme();

  // Styles.
  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    p: theme.spacing(5),
  };

  const headingStyles = {
    mb: theme.spacing(1),
    fontWeight: '700',
    color: 'primary.main',
  };

  const descriptionStyles = {
    mb: theme.spacing(3),
    fontWeight: '400',
  };

  const iconStyle = {
    mb: theme.spacing(2),
    color: 'primary.main',
    width: '35px',
    height: '35px',
  };

  const buttonStyles = {
    border: `2px solid ${theme.palette.primary.main}`,
    fontWeight: '700',
    '&:focus, &:hover, &:active': {
      backgroundColor: 'primary.dark',
      color: 'secondary.light',
    },
  };

  return (
    <Paper sx={contentStyle}>
      <AddAlarmIcon sx={iconStyle} />
      <Typography sx={headingStyles} variant="h2">
        Pending tasks
      </Typography>
      <Typography sx={descriptionStyles}>
        Please review your Tasks to ensure they are complete and up-to-date.
      </Typography>
      <Button sx={buttonStyles} component={Link} href={ctaLink}>
        Go to pending task
      </Button>
    </Paper>
  );
}
