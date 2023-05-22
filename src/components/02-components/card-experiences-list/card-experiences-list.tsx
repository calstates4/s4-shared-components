import { Box, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CardExperiences from '../card-expreciences/card-experiences';


export type BrandProps = {
  cardList: Array<object>,
};

export default function CardExperiencesList ({ 
  cardList,
}: BrandProps) {

  const theme = useTheme();

  // Styles.
  const containerStyle = {
    padding: theme.spacing(5), 
    mb: theme.spacing(5), 
  };

  const listStyle = {
    display: 'flex',
    listStyle: 'none',
  };

  const itemStyle = {
    marginRight: theme.spacing(2),
  };


  const cardExperiences = cardList?.map((item, index) => (
    <li style={itemStyle}>
      <CardExperiences 
        heading={item.opportunity[0].title}
        state={item.workflow}
        description={item.opportunity[0].summary}
        program="Test"
        dateStart={item.dateStart}
        dateEnd={item.dateEnd}
        location={item.opportunity[0].location.locality}
        ctaTitle="More Details"
        cta="/opportunities"
        hours= {item.estimatedHours}
        hoursText= "HOURS LOGGED"
        hoursCtaTitle= "log time"
        hoursCtaUrl = "/opportunities"
        variation = {2}
        key={index}
      />
    </li>
  )  
) 


  // Render funtions.

  
  return (
    <Box sx={containerStyle}>
      <Box  sx={listStyle} content="ul">
        {cardExperiences}
      </Box>
    </Box>
  );
}