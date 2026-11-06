import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import BottomRoutes from "./bottom.routes";
import DetalhesProduto from "../pages/detalhes";
import { themas } from "../global/themes";
import type { RootStackParamList } from "./types";

const colors = themas.Colors;
const Stack = createStackNavigator<RootStackParamList>();

// Como no modelo do professor: Login primeiro e BottomRoutes depois.
export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: colors.white },
        headerTintColor: colors.text,
        headerTitleStyle: { fontWeight: "700" },
        cardStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen
        name="BottomRoutes"
        component={BottomRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetalhesProduto"
        component={DetalhesProduto}
        options={{ title: "Detalhes do Produto" }}
      />
    </Stack.Navigator>
  );
}
