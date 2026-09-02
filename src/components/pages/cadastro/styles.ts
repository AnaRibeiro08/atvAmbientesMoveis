import { StyleSheet } from "react-native";
import { colors } from "../../../themes/colors";

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

  iconeCabecalho: {
    fontSize: 45,
    marginRight: 12,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.text,
  },

  campo: {
    marginBottom: 20,
  },

  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 6,
  },

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

  icone: {
    fontSize: 24,
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },

  botao: {
    backgroundColor: colors.primary,
    height: 58,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,

    elevation: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  textoBotao: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "bold",
  },
});