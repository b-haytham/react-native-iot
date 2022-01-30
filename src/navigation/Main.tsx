import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Other from "../screens/Other";

import { MainParamList } from "./types";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, useTheme } from "native-base";

const Tab = createBottomTabNavigator<MainParamList>();

function Main() {
  const theme = useTheme();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {padding: 0} }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={({}) => ({
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={20}
              color={
                focused ? theme.colors.primary[800] : theme.colors.gray[500]
              }
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              color={
                focused ? theme.colors.primary[800] : theme.colors.gray[500]
              }
            >
              Home
            </Text>
          ),
        })}
      />
      <Tab.Screen
        name="Other"
        component={Other}
        options={({}) => ({
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={20}
              color={
                focused ? theme.colors.primary[800] : theme.colors.gray[500]
              }
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              color={
                focused ? theme.colors.primary[800] : theme.colors.gray[500]
              }
            >
              Other
            </Text>
          ),
        })}
      />
    </Tab.Navigator>
  );
}

export default Main;
