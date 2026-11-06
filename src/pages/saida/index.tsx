import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { themas } from "../../global/themes";
import { styles } from "./styles";

const colors = themas.Colors;

type MotivoSaida = "Venda" | "Avarias" | "Uso Interno";
const motivos: MotivoSaida[] = ["Venda", "Avarias", "Uso Interno"];

export default function SaidaProduto() {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [motivo, setMotivo] = useState<MotivoSaida | null>(null);
  const [listaAberta, setListaAberta] = useState(false);
  const [aviso, setAviso] = useState("");

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
        <View style={styles.cabecalho}>
          <View style={styles.iconeTopo}>
            <Ionicons name="arrow-up-circle-outline" color={colors.primary} size={30} />
          </View>
          <View style={styles.tituloGrupo}>
            <Text style={styles.titulo}>Saída de Produto</Text>
            <Text style={styles.subtitulo}>Registre a retirada de itens do estoque</Text>
          </View>
        </View>

        <View style={styles.formulario}>
          <Text style={styles.rotulo}>Nome do Produto</Text>
          <View style={styles.campo}>
            <Ionicons name="pricetag-outline" color={colors.gray} size={21} />
            <TextInput
              style={styles.input}
              placeholder="Digite o nome do produto"
              placeholderTextColor={colors.gray}
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <Text style={styles.rotulo}>Quantidade de Saída</Text>
          <View style={styles.campo}>
            <Ionicons name="remove-circle-outline" color={colors.gray} size={22} />
            <TextInput
              style={styles.input}
              placeholder="0"
              placeholderTextColor={colors.gray}
              keyboardType="numeric"
              value={quantidade}
              onChangeText={setQuantidade}
            />
          </View>

          <Text style={styles.rotulo}>Motivo da Retirada</Text>
          <TouchableOpacity
            style={styles.seletor}
            onPress={() => setListaAberta((valor) => !valor)}
            accessibilityRole="button"
            accessibilityLabel="Selecionar motivo da retirada"
          >
            <Ionicons name="list-outline" color={colors.gray} size={22} />
            <Text style={[styles.textoSeletor, !motivo && styles.placeholder]}>
              {motivo ?? "Selecione o motivo"}
            </Text>
            <Ionicons name={listaAberta ? "chevron-up" : "chevron-down"} color={colors.gray} size={20} />
          </TouchableOpacity>

          {listaAberta && (
            <View style={styles.listaOpcoes}>
              {motivos.map((opcao) => (
                <TouchableOpacity
                  key={opcao}
                  style={styles.opcao}
                  onPress={() => {
                    setMotivo(opcao);
                    setListaAberta(false);
                  }}
                >
                  <Text style={styles.textoOpcao}>{opcao}</Text>
                  {motivo === opcao && <Ionicons name="checkmark" size={19} color={colors.primary} />}
                </TouchableOpacity>
              ))}
            </View>
          )}

          <TouchableOpacity
            style={styles.botao}
            activeOpacity={0.85}
            onPress={() => setAviso("Demonstração visual: nenhuma retirada foi salva no estoque.")}
          >
            <Ionicons name="arrow-up-outline" size={20} color={colors.white} />
            <Text style={styles.textoBotao}>REGISTRAR SAÍDA</Text>
          </TouchableOpacity>

          {aviso !== "" && <Text style={styles.aviso}>{aviso}</Text>}
        </View>

        <View style={styles.nota}>
          <Ionicons name="information-circle-outline" size={21} color={colors.primary} />
          <Text style={styles.notaTexto}>
            Tela de demonstração. A lista de motivos funciona, mas não altera os dados do estoque.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
