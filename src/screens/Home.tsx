import React from "react";

import { Box, Button, Heading, Text } from "native-base";
import Layout from "../components/Layout";

import { HomeScreenProps } from "../navigation/types";

const Home: React.FC<HomeScreenProps> = ({}) => {
  return (
    <Layout>
      <Box p={2}>
        <Heading size={"lg"} color={"primary.800"}>
          Welcome Back !
        </Heading>
        <Text opacity={0.8}>John Doe</Text>
      </Box>
    </Layout>
  );
};

export default Home;
