import React from "react";
import { Text, View } from "react-native";
import type { StatusEstoque as Status } from "../../models/Produto";
import { styles } from "./styles";

type Props = { status: Status };

export default function StatusEstoque({ status }: Props) {
  const baixo = status === "Estoque Baixo";
  return (
    <View style={[styles.etiqueta, baixo ? styles.baixo : styles.normal]}>
      <View style={[styles.ponto, { backgroundColor: baixo ? "#D68B10" : "#16834A" }]} />
      <Text style={[styles.texto, { color: baixo ? "#9C6400" : "#167443" }]}>
        {status}
      </Text>
    </View>
  );
}
