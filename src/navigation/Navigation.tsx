import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";

function Navigation() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default Navigation;
