import React from "react";

import { Button, Text } from "native-base";
import Layout from "../components/Layout";

import { HomeScreenProps } from "../navigation/types";

const Home: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  return (
    <Layout>
      <Text> Home </Text>
      <Button onPress={() => navigation.navigate("Other")}> Go </Button>
    </Layout>
  );
};

export default Home;
