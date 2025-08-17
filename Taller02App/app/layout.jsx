import React, { useState } from "react";
import { Stack } from "expo-router";
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from "react-native-paper";

export default function Layout() {
  const [temaOscuro, setTemaOscuro] = useState(false);

  const tema = temaOscuro ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={tema}>
      <Stack
        screenOptions={{ headerShown: true }}
        initialParams={{ setTemaOscuro, temaOscuro }}
      />
    </PaperProvider>
  );
}