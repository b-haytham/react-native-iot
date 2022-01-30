import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Other from "../screens/Other";

import { MainParamList } from "./types";

const Tab = createBottomTabNavigator<MainParamList>();

function Main() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Other" component={Other} />
    </Tab.Navigator>
  );
}

export default Main;
