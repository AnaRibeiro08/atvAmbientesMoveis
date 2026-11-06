import React, { forwardRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View } from "react-native";
import type { TextInputProps } from "react-native";
import { styles } from "./styles";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

type Props = TextInputProps & {
  title: string;
  icon: IconName;
};

// Componente de formulario reutilizavel, seguindo a aula de componentizacao.
const Input = forwardRef<TextInput, Props>(({ title, icon, style, ...rest }, ref) => (
  <View style={styles.grupo}>
    <Text style={styles.rotulo}>{title}</Text>
    <View style={styles.campo}>
      <TextInput
        ref={ref}
        {...rest}
        placeholderTextColor="#8A8A8A"
        style={[styles.input, style]}
      />
      <Ionicons name={icon} size={18} color="#707070" />
    </View>
  </View>
));

Input.displayName = "Input";
export default Input;
