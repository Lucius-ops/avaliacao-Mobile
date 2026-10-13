import { ScrollView, StyleSheet, View } from "react-native";
import ConsultaCredito from "@/components/ConsultaCredito";

export default function Index() {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <ConsultaCredito />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
});
