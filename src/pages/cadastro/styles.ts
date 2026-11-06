import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";
const colors = themas.Colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  iconeCabecalho: { fontSize: 45, marginRight: 12 },
  titulo: { fontSize: 30, fontWeight: "bold", color: colors.text },
  botao: {
    backgroundColor: colors.primary,
    height: 58,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textoBotao: { color: colors.white, fontSize: 17, fontWeight: "bold" },
});
