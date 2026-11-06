import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";
const colors = themas.Colors;

export const styles = StyleSheet.create({
  campo: { marginBottom: 20 },
  label: { fontSize: 15, fontWeight: "bold", color: colors.text, marginBottom: 6 },
  campoInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    height: 58,
    paddingHorizontal: 15,
  },
  icone: { fontSize: 24, marginRight: 12 },
  input: { flex: 1, fontSize: 16, color: colors.text },
});
