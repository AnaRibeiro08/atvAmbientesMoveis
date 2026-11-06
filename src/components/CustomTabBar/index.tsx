import React from "react";
import { Ionicons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";

import { themas } from "../../global/themes";
import { styles } from "./styles";

// O professor também criou um componente CustomTabBar para personalizar o menu.
// Aqui os botões são ligados às rotas, com ícones e cores de seleção.
type IconName = React.ComponentProps<typeof Ionicons>["name"];

type Aba = "NovoProduto" | "SaidaProduto" | "ControleEstoque";

const abas: Record<Aba, { titulo: string; ativo: IconName; inativo: IconName }> = {
  NovoProduto: {
    titulo: "Novo Produto",
    ativo: "add-circle",
    inativo: "add-circle-outline",
  },
  SaidaProduto: {
    titulo: "Saída",
    ativo: "arrow-up-circle",
    inativo: "arrow-up-circle-outline",
  },
  ControleEstoque: {
    titulo: "Estoque",
    ativo: "cube",
    inativo: "cube-outline",
  },
};

export default function CustomTabBar({ state, navigation, insets }: BottomTabBarProps) {
  return (
    <View style={[styles.tabArea, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      {state.routes.map((route, index) => {
        const aba = abas[route.name as Aba];
        if (!aba) return null;

        const selecionada = state.index === index;
        const cor = selecionada ? themas.Colors.primary : themas.Colors.gray;

        const abrirAba = () => {
          const evento = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!selecionada && !evento.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={abrirAba}
            accessibilityRole="tab"
            accessibilityState={{ selected: selecionada }}
            accessibilityLabel={aba.titulo}
            activeOpacity={0.7}
            style={styles.aba}
          >
            <Ionicons name={selecionada ? aba.ativo : aba.inativo} size={25} color={cor} />
            <Text style={[styles.rotulo, { color: cor }, selecionada && styles.rotuloAtivo]}>
              {aba.titulo}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
