import {
  Children,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import { Box, Tab, Tabs as MuiTabs, useTheme } from '@mui/material';

export type RefHandler = {
  setActiveTab: (index: number) => void;
};

type TabsProps = {
  name: string;
  id: string;
  children?: ReactElement<{ title: string }>[];
  tabPanelClassName?: string;
  activeTab?: number;
};

type TabPanelProps = {
  id: string;
  children?: ReactNode;
  value: number;
  index: number;
  className?: string;
};

function TabPanel({ id, children, value, index, className }: TabPanelProps) {
  const theme = useTheme();

  return (
    <Box
      data-panel-index={index}
      className={className}
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

const Tabs = forwardRef<RefHandler, TabsProps>(function Tabs(
  { name, id, tabPanelClassName, children }: TabsProps,
  ref,
) {
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

  const renderedTabs: ReactNode[] = [];
  const renderedTabPanels: ReactNode[] = [];

  Children.forEach(children, (child, index) => {
    if (child) {
      renderedTabs.push(
        <Tab label={child.props.title} {...a11yProps(id, index)} />,
      );
      renderedTabPanels.push(
        <TabPanel
          id={id}
          value={activeTabIndex}
          index={index}
          className={tabPanelClassName}
        >
          {child}
        </TabPanel>,
      );
    }
  });

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
});

export default Tabs;
