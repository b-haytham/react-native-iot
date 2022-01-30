import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./Main";

import { AppStackParamList } from "./types";

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}

export default AppStack;
