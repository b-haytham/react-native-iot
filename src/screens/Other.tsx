import React from "react";

import Layout from "../components/Layout";

import { Text } from "native-base";
import { OtherScreenProps } from "../navigation/types";

const Other: React.FC<OtherScreenProps> = () => {
  return (
    <Layout>
      <Text> Other </Text>
    </Layout>
  );
};

export default Other;
