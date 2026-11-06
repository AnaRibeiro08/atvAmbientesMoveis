import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  grupo: { width: "100%" },
  rotulo: { marginBottom: 9, marginLeft: 4, fontSize: 14, color: "#7F7F7F" },
  campo: {
    width: "100%",
    minHeight: 50,
    borderRadius: 30,
    backgroundColor: "#E1E1E1",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 17,
  },
  input: { flex: 1, fontSize: 15, color: "#222222", paddingVertical: 10, minWidth: 0 },
});
