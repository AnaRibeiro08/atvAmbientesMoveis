import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/CustomTabBar";
import CadastroProduto from "../pages/cadastro";
import SaidaProduto from "../pages/saida";
import ControleEstoque from "../pages/estoque";
import type { BottomTabParamList } from "./types";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="NovoProduto"
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="NovoProduto" component={CadastroProduto} options={{ title: "Novo Produto" }} />
      <Tab.Screen name="SaidaProduto" component={SaidaProduto} options={{ title: "Saída de Produto" }} />
      <Tab.Screen name="ControleEstoque" component={ControleEstoque} options={{ title: "Controle de Estoque" }} />
    </Tab.Navigator>
  );
}
