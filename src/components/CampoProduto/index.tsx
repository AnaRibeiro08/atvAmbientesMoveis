import React from "react";
import { Text, TextInput, View } from "react-native";
import type { TextInputProps } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & { label: string; icone: string };

// Componente reutilizável da tela inicial, com props nativas + operador rest.
export default function CampoProduto({ label, icone, ...rest }: Props) {
  return (
    <View style={styles.campo}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.campoInput}>
        <Text style={styles.icone}>{icone}</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#66727E"
          {...rest}
        />
      </View>
    </View>
  );
}
