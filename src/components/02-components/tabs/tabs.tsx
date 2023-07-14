import {
  forwardRef,
  useImperativeHandle,
  ReactNode,
  SyntheticEvent,
  useState,
} from 'react';
import { Box, Tab, Tabs as MuiTabs, useTheme } from '@mui/material';

type TabsProps = {
  name: string;
  id: string;
  tabs: {
    name: string;
    content: ReactNode;
  }[];
};

type TabPanelProps = {
  id: string;
  children?: ReactNode;
  index: number;
  value: number;
};

export type RefHandler = {
  setActiveTab: (index: number) => void;
};

function TabPanel({ id, children, value, index }: TabPanelProps) {
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

const Tabs = forwardRef<RefHandler, TabsProps>(
  ({ name, id, tabs }: TabsProps, ref) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    useImperativeHandle(
      ref,
      () => ({
        setActiveTab(value: number) {
          setActiveTabIndex(value);
        },
      }),
      [],
    );

    function onChangeHandler(event: SyntheticEvent, index: number) {
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
          onChange={onChangeHandler}
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
  },
);

export default Tabs;
