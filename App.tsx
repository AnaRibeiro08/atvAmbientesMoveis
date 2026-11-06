import React from "react";
import "./gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/index.routes";

// O App.tsx só inicializa o contêiner e chama as rotas, conforme os slides.
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
