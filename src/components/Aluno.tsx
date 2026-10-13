import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Aluno() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [turma, setTurma] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");

  const mostrarDados = () => {
    const media = (Number(nota1) + Number(nota2)) / 2;

    Alert.alert(
      "Dados do Aluno",
      `Nome: ${nome}\nIdade: ${idade}\nTurma: ${turma}\nNota 1: ${nota1}\nNota 2: ${nota2}\nMédia: ${media}`
    );
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        placeholder="Nome do aluno"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <Text>Idade:</Text>
      <TextInput
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text>Turma:</Text>
      <TextInput
        placeholder="Turma"
        value={turma}
        onChangeText={setTurma}
        style={styles.input}
      />

      <Text>Nota 1:</Text>
      <TextInput
        placeholder="Nota 1"
        value={nota1}
        onChangeText={setNota1}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text>Nota 2:</Text>
      <TextInput
        placeholder="Nota 2"
        value={nota2}
        onChangeText={setNota2}
        keyboardType="numeric"
        style={styles.input}
      />

      <Pressable onPress={mostrarDados} style={styles.botao}>
        <Text>Mostrar Dados</Text>
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