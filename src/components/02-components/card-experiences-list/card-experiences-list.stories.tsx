import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import CardExperiences from '../card-expreciences/card-experience';
import CardExperiencesList from './card-experiences-list';


const meta: Meta<typeof CardExperiencesList> = {
  title: 'Components/Card Experiences List',
  component: CardExperiencesList,
};

const itemStyle = {
  mx: '8px',
};

const cardList = [
  {
    id: '4',
    workflow: 'publishied',
    dateEnd: '2023-05-31',
    dateStart: '2023-05-17',
    estimatedHours: 100,
    opportunity: [ {
      title: 'Service Learning aT cam',
      summary: `Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt.
        Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.`,
      location: { locality: 'San Francisco' }
    } ],
  },
  {
    id: '3',
    workflow: 'APPROVED',
    dateEnd: '2023-05-31',
    dateStart: '2023-05-17',
    estimatedHours: 100,
    opportunity: [ {
      title: 'Opportunity',
      summary: 'Pellentesque habitant morbi tristique senectus et netus.',
      location: { locality: 'San Francisco' }
    } ],
  },
  {
    id: '2',
    workflow: 'publishied',
    dateEnd: '2023-05-31',
    dateStart: '2023-05-17',
    estimatedHours: 100,
    opportunity: [ {
      title: 'Opportunity',
      summary: `Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt.
      Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.`,
      location: { locality: 'San Francisco' }
    } ],
  }
]

const cardExperiences = cardList?.map((item, index) => (
  <Box content={"li"} sx={itemStyle}>
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
      cardCount={3}
      key={index}
    />
  </Box>
)  
) 

export default meta;

export const Default: StoryObj<typeof CardExperiencesList> = {
  args: {
    children: cardExperiences,
  },
};
