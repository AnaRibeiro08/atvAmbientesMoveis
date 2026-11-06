import React, { useState } from "react";
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CampoProduto from "../../components/CampoProduto/index";
import { styles } from "./styles";

export default function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const cadastrarProduto = () => {
    if (!nome || !preco || !quantidade) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    Alert.alert("Sucesso", "Produto cadastrado com sucesso!");
    setNome("");
    setPreco("");
    setQuantidade("");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.cabecalho}>
        <Text style={styles.iconeCabecalho}>📦</Text>
        <Text style={styles.titulo}>Novo Produto</Text>
      </View>

      <CampoProduto
        label="Nome do Produto"
        icone="🏷️"
        placeholder="Nome do Produto"
        value={nome}
        onChangeText={setNome}
      />
      <CampoProduto
        label="Preço de Venda"
        icone="💰"
        placeholder="R$ 0,00"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />
      <CampoProduto
        label="Quantidade de Entrada"
        icone="📦"
        placeholder="0"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarProduto}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotao}>CADASTRAR PRODUTO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
