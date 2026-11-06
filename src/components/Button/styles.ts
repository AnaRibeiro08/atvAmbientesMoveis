import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    minHeight: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#878AF6",
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  textButton: { fontSize: 16, fontWeight: "700", color: "#FFFFFF" },
});
