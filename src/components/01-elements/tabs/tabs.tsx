import { Children, ReactNode, SyntheticEvent, useState } from 'react';
import { Box, Tab, Tabs as MuiTabs, useTheme } from '@mui/material';

type TabsProps = {
  name: string;
  id: string;
  tabs: {
    name: string;
    content: ReactNode;
  }[];
  children?: ReactNode;
};

type TabPanelProps = {
  id: string;
  children?: ReactNode;
  index: number;
  value: number;
};

function TabPanel({ id, children, value, index, ...other }: TabPanelProps) {
  const theme = useTheme();

  return (
    <Box
      data-index={index}
      className={id}
      role="tabpanel"
      hidden={value !== index}
      id={`${id}-tabpanel-${index}`}
      aria-labelledby={`${id}-tab-${index}`}
      sx={{ p: theme.spacing(3) }}
      {...other}
    >
      {children}
    </Box>
  );
}

function a11yProps(id: string, index: number) {
  return {
    id: `${id}-tab-${index}`,
    'aria-controls': `${id}-tabpanel-${index}`,
  };
}

export default function Tabs({ name, id, tabs }: TabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  function handleChange(event: SyntheticEvent, index: number) {
    setActiveTabIndex(index);
  }

  const renderedTabs = tabs.map((tab, index) => (
    <Tab label={tab.name} {...a11yProps(id, index)} />
  ));

  const renderedTabPanels = tabs.map((tab, index) => (
    <TabPanel id={id} value={activeTabIndex} index={index}>
      {tab.content}
    </TabPanel>
  ));
  return (
    <>
      <MuiTabs
        value={activeTabIndex}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label={name}
      >
        {renderedTabs}
      </MuiTabs>
      {renderedTabPanels}
    </>
  );
}
