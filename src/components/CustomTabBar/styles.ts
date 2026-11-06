import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

const cores = themas.Colors;

export const styles = StyleSheet.create({
  tabArea: {
    flexDirection: "row",
    minHeight: 62,
    paddingTop: 8,
    backgroundColor: cores.white,
    borderTopWidth: 1,
    borderTopColor: cores.border,
    justifyContent: "space-around",
  },
  aba: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    paddingHorizontal: 3,
    minHeight: 52,
  },
  rotulo: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
  },
  rotuloAtivo: { fontWeight: "700" },
});
