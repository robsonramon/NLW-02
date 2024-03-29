import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../pages/Landing";
import GiveClasses from "../pages/GiveClasses";
import StudyTabs from "./StudyTabs";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing}></Screen>
        <Screen name="GiveClasses" component={GiveClasses}></Screen>
        <Screen name="StudyTabs" component={StudyTabs}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
