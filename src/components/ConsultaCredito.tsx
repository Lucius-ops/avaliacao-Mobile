import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import AnaliseCredito, { ResultadoCredito } from "@/services/AnaliseCredito";
import { formatarReais, lerReais, mascararMoeda } from "@/utils/moeda";

export default function ConsultaCredito() {
  const [renda, setRenda] = useState("");
  const [idade, setIdade] = useState("");
  const [temClt, setTemClt] = useState(true);
  const [temDivida, setTemDivida] = useState(false);
  const [resultado, setResultado] = useState<ResultadoCredito | null>(null);

  const consultar = () => {
    const rendaAnual = lerReais(renda);
    const idadeNum = Number(idade);

    if (rendaAnual <= 0) {
      Alert.alert("Atenção", "Informe a renda anual.");
      return;
    }
    if (!Number.isInteger(idadeNum) || idadeNum < 18) {
      Alert.alert("Atenção", "Informe uma idade válida (mínimo 18 anos).");
      return;
    }

    setResultado(
      AnaliseCredito.avaliar({ rendaAnual, idade: idadeNum, temClt, temDivida })
    );
  };

  const limpar = () => {
    setRenda("");
    setIdade("");
    setTemClt(true);
    setTemDivida(false);
    setResultado(null);
  };

  return (
    <View style={styles.container}>
      <Text>Renda anual:</Text>
      <TextInput
        placeholder="R$ 0,00"
        value={renda}
        onChangeText={(texto) => setRenda(mascararMoeda(texto))}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text>Idade:</Text>
      <TextInput
        placeholder="Idade"
        value={idade}
        onChangeText={(texto) => setIdade(texto.replace(/\D/g, ""))}
        keyboardType="numeric"
        maxLength={3}
        style={styles.input}
      />

      <View style={styles.linha}>
        <Text>Possui vínculo CLT</Text>
        <Switch value={temClt} onValueChange={setTemClt} />
      </View>

      <View style={styles.linha}>
        <Text>Possui dívida</Text>
        <Switch value={temDivida} onValueChange={setTemDivida} />
      </View>

      <Pressable onPress={consultar} style={styles.botao}>
        <Text>Consultar crédito</Text>
      </Pressable>

      <Pressable onPress={limpar} style={styles.botao}>
        <Text>Nova consulta</Text>
      </Pressable>

      {resultado && (
        <View
          style={[
            styles.resultado,
            resultado.aprovado ? styles.aprovado : styles.negado,
          ]}
        >
          <Text style={styles.resultadoTitulo}>
            {resultado.aprovado ? "CRÉDITO APROVADO" : "SEM DIREITO A CRÉDITO"}
          </Text>

          {resultado.aprovado ? (
            <>
              <Text>
                Percentual aplicado:{" "}
                {(resultado.percentual * 100).toString().replace(".", ",")}%
              </Text>
              <Text style={styles.valor}>
                {formatarReais(resultado.valorMaximo)}
              </Text>
              <Text>valor máximo de crédito</Text>
            </>
          ) : (
            <Text>{resultado.motivo}</Text>
          )}
        </View>
      )}
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
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  botao: {
    padding: 10,
    backgroundColor: "#ddd",
    alignItems: "center",
    marginBottom: 10,
  },
  resultado: {
    marginTop: 10,
    padding: 16,
    borderWidth: 2,
    alignItems: "center",
  },
  aprovado: {
    borderColor: "#2e7d32",
    backgroundColor: "#e8f5e9",
  },
  negado: {
    borderColor: "#c62828",
    backgroundColor: "#ffebee",
  },
  resultadoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  valor: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 4,
  },
});
