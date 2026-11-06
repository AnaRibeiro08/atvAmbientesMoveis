import React from "react";
import { Ionicons } from "@expo/vector-icons";
import type { StackScreenProps } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native";

import {
  buscarProdutoPorId,
  obterStatusEstoque,
} from "../../controllers/estoqueController";
import type { RootStackParamList } from "../../routes/types";
import { themas } from "../../global/themes";
import StatusEstoque from "../../components/StatusEstoque/index";
import { styles } from "./styles";

const colors = themas.Colors;

type Props = StackScreenProps<RootStackParamList, "DetalhesProduto">;

export default function DetalhesProduto({ route, navigation }: Props) {
  const produto = buscarProdutoPorId(route.params.produtoId);

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.icone}>
          <Ionicons name="cube-outline" size={33} color={colors.primary} />
        </View>
        <Text style={styles.titulo}>{produto.nome}</Text>
        <Text style={styles.categoria}>{produto.categoria}</Text>

        <View style={styles.separador} />

        <Text style={styles.label}>Quantidade disponível</Text>
        <Text style={styles.quantidade}>{produto.quantidade} unidades</Text>
        <Text style={[styles.label, { marginTop: 19 }]}>Situação do estoque</Text>
        <StatusEstoque status={obterStatusEstoque(produto.quantidade)} />
      </View>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" color={colors.white} size={19} />
        <Text style={styles.textoBotao}>VOLTAR AO ESTOQUE</Text>
      </TouchableOpacity>
    </View>
  );
}
