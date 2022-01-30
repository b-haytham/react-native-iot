import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type MainParamList = {
  Home: undefined;
  Other: undefined;
};

export type AppStackParamList = {
  Main: NavigatorScreenParams<MainParamList>;
};

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<MainParamList, "Home">,
  NativeStackScreenProps<AppStackParamList>
>;

export type OtherScreenProps = CompositeScreenProps<
  BottomTabScreenProps<MainParamList, "Other">,
  NativeStackScreenProps<AppStackParamList>
>;
