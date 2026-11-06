import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themas.Colors.white,
  },
  rolagem: { flex: 1 },
  conteudo: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 470,
    alignSelf: "center",
    paddingHorizontal: 32,
    paddingTop: 54,
    paddingBottom: 36,
  },
  topo: {
    alignItems: "center",
    marginBottom: 78,
  },
  bemVindo: {
    marginTop: 25,
    fontSize: 23,
    fontWeight: "700",
    textAlign: "center",
    color: themas.Colors.text,
  },
  formulario: { gap: 20 },
  erro: {
    color: "#B42318",
    marginTop: -6,
    textAlign: "center",
    fontSize: 13,
  },
  botaoContainer: {
    marginTop: 20,
    marginHorizontal: 18,
  },
  nota: {
    color: themas.Colors.gray,
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
  },
});
