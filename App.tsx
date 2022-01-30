import { StatusBar } from "expo-status-bar";
import { Button, NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Navigation />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
