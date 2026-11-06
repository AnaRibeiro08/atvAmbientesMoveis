import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  listarProdutos,
  obterResumoEstoque,
  obterStatusEstoque,
} from "../../controllers/estoqueController";
import { themas } from "../../global/themes";
import type { BottomTabParamList, RootStackParamList } from "../../routes/types";
import StatusEstoque from "../../components/StatusEstoque/index";
import { styles } from "./styles";

const colors = themas.Colors;

export default function ControleEstoque() {
  const navigation = useNavigation<BottomTabNavigationProp<BottomTabParamList, "ControleEstoque">>();
  const produtos = listarProdutos();
  const resumo = obterResumoEstoque();

  function abrirDetalhes(produtoId: number) {
    navigation
      .getParent<StackNavigationProp<RootStackParamList>>()
      ?.navigate("DetalhesProduto", { produtoId });
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.cabecalho}>
          <View style={styles.iconeTopo}>
            <Ionicons name="cube-outline" color={colors.primary} size={30} />
          </View>
          <View style={styles.tituloGrupo}>
            <Text style={styles.titulo}>Controle de Estoque</Text>
            <Text style={styles.subtitulo}>Acompanhe os produtos cadastrados</Text>
          </View>
        </View>

        <View style={styles.resumoLinha}>
          <View style={styles.resumoCard}>
            <Ionicons name="albums-outline" color={colors.primary} size={23} />
            <Text style={styles.resumoNumero}>{resumo.produtos}</Text>
            <Text style={styles.resumoLabel}>Produtos</Text>
          </View>
          <View style={styles.resumoCard}>
            <Ionicons name="layers-outline" color={colors.primary} size={23} />
            <Text style={styles.resumoNumero}>{resumo.unidades}</Text>
            <Text style={styles.resumoLabel}>Unidades</Text>
          </View>
          <View style={styles.resumoCard}>
            <Ionicons name="alert-circle-outline" color="#CE860A" size={23} />
            <Text style={styles.resumoNumero}>{resumo.estoqueBaixo}</Text>
            <Text style={styles.resumoLabel}>Estoque baixo</Text>
          </View>
        </View>

        <Text style={styles.secaoTitulo}>Inventário</Text>
        <Text style={styles.secaoSubtitulo}>Toque em um item para ver os detalhes.</Text>

        {produtos.map((produto) => (
          <TouchableOpacity
            key={produto.id}
            style={styles.produtoCard}
            onPress={() => abrirDetalhes(produto.id)}
            activeOpacity={0.85}
          >
            <View style={styles.produtoCabecalho}>
              <View style={styles.iconeProduto}>
                <Ionicons name="cube-outline" size={23} color={colors.primary} />
              </View>
              <View style={styles.produtoInfo}>
                <Text style={styles.nomeProduto}>{produto.nome}</Text>
                <Text style={styles.categoria}>{produto.categoria}</Text>
              </View>
              <Ionicons name="chevron-forward" color={colors.gray} size={18} />
            </View>
            <View style={styles.produtoRodape}>
              <View>
                <Text style={styles.quantidadeLabel}>Disponível</Text>
                <Text style={styles.quantidadeNumero}>{produto.quantidade} un.</Text>
              </View>
              <StatusEstoque status={obterStatusEstoque(produto.quantidade)} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
