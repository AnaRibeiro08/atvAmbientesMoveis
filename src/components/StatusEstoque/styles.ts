import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  etiqueta: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignSelf: "flex-start",
    gap: 6,
  },
  normal: { backgroundColor: "#E5F6EB" },
  baixo: { backgroundColor: "#FFF3D8" },
  ponto: { width: 6, height: 6, borderRadius: 3 },
  texto: { fontSize: 11, fontWeight: "700" },
});
