import React from "react";
import { Box } from "native-base";
import Constants from "expo-constants";

const Layout: React.FC = ({ children }) => {
  return (
    <Box flex={1} style={{ paddingTop: Constants.statusBarHeight }}>
      {children}
    </Box>
  );
};

export default Layout;
