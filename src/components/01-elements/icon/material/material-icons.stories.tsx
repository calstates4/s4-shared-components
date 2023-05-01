import MaterialIconsDemo from "./material-icons";

export default {
  title: 'Elements/Material Icons',
  component: MaterialIconsDemo,
};

// Defined here: https://mui.com/material-ui/material-icons/
const MaterialIconsData = {
  iconList: [
    'SwitchAccount',
    'AccountCircle',
    'Help',
    'CircleNotifications',
    'Close',
    'Menu',
    'ExitToApp',
    'KeyboardArrowDown',
    'KeyboardArrowUp',
  ],
}

export const MaterialIcons = () => <MaterialIconsDemo {...MaterialIconsData} />;
