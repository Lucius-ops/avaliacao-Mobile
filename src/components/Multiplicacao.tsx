import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Multiplicacao() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [valor3, setValor3] = useState("");

  const mostrarResultado = () => {
    const resultado = Number(valor1) * Number(valor2) * Number(valor3);

    Alert.alert(
      "Multiplicação",
      `Valor 1: ${valor1}\nValor 2: ${valor2}\nValor 3: ${valor3}\nResultado: ${resultado}`
    );
  };

  return (
    <View style={styles.container}>
      <Text>Valor 1:</Text>
      <TextInput
        placeholder="Digite o valor 1"
        value={valor1}
        onChangeText={setValor1}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text>Valor 2:</Text>
      <TextInput
        placeholder="Digite o valor 2"
        value={valor2}
        onChangeText={setValor2}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text>Valor 3:</Text>
      <TextInput
        placeholder="Digite o valor 3"
        value={valor3}
        onChangeText={setValor3}
        keyboardType="numeric"
        style={styles.input}
      />

      <Pressable onPress={mostrarResultado} style={styles.botao}>
        <Text>Multiplicar</Text>
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