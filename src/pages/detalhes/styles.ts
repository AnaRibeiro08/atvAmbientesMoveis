import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";
const colors = themas.Colors;

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  card: { backgroundColor: colors.white, padding: 22, borderRadius: 18, borderWidth: 1, borderColor: colors.border },
  icone: { width: 66, height: 66, borderRadius: 16, backgroundColor: "#E4F1FB", alignItems: "center", justifyContent: "center", marginBottom: 15 },
  titulo: { fontSize: 24, fontWeight: "800", color: colors.text },
  categoria: { fontSize: 14, color: colors.gray, marginTop: 5 },
  separador: { height: 1, backgroundColor: colors.border, marginVertical: 24 },
  label: { fontSize: 13, color: colors.gray, marginBottom: 7 },
  quantidade: { fontSize: 22, fontWeight: "800", color: colors.text },
  botao: { marginTop: 20, backgroundColor: colors.primary, padding: 17, borderRadius: 12, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 10 },
  textoBotao: { color: colors.white, fontWeight: "800", fontSize: 14 },
});
