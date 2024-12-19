import React from "react";
import MaterialIconsDemo from "./material-icons";

export default {
  title: 'Tokens/Material Icons',
  component: MaterialIconsDemo,
};

// Defined here: https://mui.com/material-ui/material-icons/
const MaterialIconsData = {
  iconList: [
    'AccountCircle',
    'BusinessRounded',
    'CircleNotifications',
    'Close',
    'Dashboard',
    'ExitToApp',
    'Help',
    'InsertEmoticon',
    'KeyboardArrowDown',
    'KeyboardArrowUp',
    'LibraryBooks',
    'LocationCity',
    'Menu',
    'Mood',
    'Schedule',
    'SwitchAccount',
    'PeopleAlt',
    'ErrorOutline',
    'CheckCircleOutline',
  ],
}

export const MaterialIcons = () => <MaterialIconsDemo {...MaterialIconsData} />;
