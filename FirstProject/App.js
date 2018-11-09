import React from 'react';
import { Text, View } from "react-native';

import { TableNavigatior } from "react-navigation";
import FirstScreen from './tabs/FirstScreen'
import SecondScreen from './tabs/SecondScreen'

var MainScreenNavigator = TableNavigatior({
  Tab1:{FirstScreen},
  Tab2:{SecondScreen}
});

MainScreenNavigator.navigatorOptions = {
  title: "Tab example"
};

export default MainScreenNavigator;