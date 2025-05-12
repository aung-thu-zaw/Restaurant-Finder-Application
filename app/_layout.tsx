import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import "../global.css";

const RootLayout = () => {
  return (
    <>
      <StatusBar style="inverted" />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
};

export default RootLayout;
