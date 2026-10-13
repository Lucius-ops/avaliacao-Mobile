import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function NomeSobrenome() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  const mostrarDados = () => {
    Alert.alert("Nome e Sobrenome", `Nome: ${nome}\nSobrenome: ${sobrenome}`);
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <Text>Sobrenome:</Text>
      <TextInput
        placeholder="Digite seu sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
        style={styles.input}
      />

      <Pressable onPress={mostrarDados} style={styles.botao}>
        <Text>Mostrar Nome</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
  botao: {
    padding: 10,
    backgroundColor: "#ddd",
    alignItems: "center",
  },
});