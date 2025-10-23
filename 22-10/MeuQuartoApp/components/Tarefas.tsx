import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function Tarefas() {
  const [tarefas, setTarefas] = useState<string[]>([]);

  const [novaTarefa, setNovaTafafa] = useState("");
  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    setTarefas([...tarefas, novaTarefa]);
    setNovaTafafa(""); // vai limoar o campo
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={novaTarefa}
        onChangeText={setNovaTafafa}
      />

      <Button title="Adicionar tarefa" onPress={adicionarTarefa} />

      <FlatList style={styles.tarefas}
        data={tarefas}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text style={styles.text}>
            {index + 1}. {item}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  tarefas: {
    fontSize: 10,
    paddingVertical: 5
  },
});
