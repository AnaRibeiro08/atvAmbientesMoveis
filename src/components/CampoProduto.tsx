import React from "react";
import {
  Text,
  TextInput,
  View,
  TextInputProps,
} from "react-native";

import { styles } from "./pages/cadastro/styles";
type CampoProdutoProps = TextInputProps & {
  label: string;
  icone: string;
};

export default function CampoProduto({
  label,
  icone,
  ...props
}: CampoProdutoProps) {
  return (
    <View style={styles.campo}>
      <Text style={styles.label}>
        {label}
      </Text>

      <View style={styles.campoInput}>
        <Text style={styles.icone}>
          {icone}
        </Text>

        <TextInput
          style={styles.input}
          placeholderTextColor="#66727E"
          {...props}
        />
      </View>
    </View>
  );
}