import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Keyboard, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { StackScreenProps } from "@react-navigation/stack";

import { Button } from "../../components/Button";
import Input from "../../components/input";
import type { RootStackParamList } from "../../routes/types";
import { styles } from "./styles";

type Props = StackScreenProps<RootStackParamList, "Login">;

// Login demonstrativo da atividade: nao ha servidor nem verificacao real de senha.
export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");

  function getLogin() {
    Keyboard.dismiss();
    if (!email.trim() || !password.trim()) {
      setMensagem("Preencha o e-mail e a senha para continuar.");
      return;
    }
    setMensagem("");
    navigation.navigate("BottomRoutes");
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ScrollView
        style={styles.rolagem}
        contentContainerStyle={styles.conteudo}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.topo}>
          <Ionicons name="clipboard-outline" size={76} color={"#212121"} />
          <Text style={styles.bemVindo}>Bem-vindo de volta!</Text>
        </View>

        <View style={styles.formulario}>
          <Input
            title="Endereço de e-mail"
            icon="mail"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={(valor) => { setEmail(valor); setMensagem(""); }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            returnKeyType="next"
          />
          <Input
            title="Senha"
            icon="lock-closed"
            placeholder="Digite sua senha"
            value={password}
            onChangeText={(valor) => { setPassword(valor); setMensagem(""); }}
            secureTextEntry
            autoCapitalize="none"
            autoComplete="off"
            returnKeyType="done"
            onSubmitEditing={getLogin}
          />

          {mensagem ? <Text style={styles.erro}>{mensagem}</Text> : null}
          <View style={styles.botaoContainer}>
            <Button text="Entrar" onPress={getLogin} />
          </View>
          <Text style={styles.nota}>
            Login demonstrativo: preencha os campos para acessar o sistema.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
