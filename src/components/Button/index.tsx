import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import type { TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  text: string;
  loading?: boolean;
};

export function Button({ text, loading = false, disabled, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled || loading}
      style={[styles.button, rest.style]}
      activeOpacity={0.8}
      accessibilityRole="button"
    >
      {loading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <Text style={styles.textButton}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
