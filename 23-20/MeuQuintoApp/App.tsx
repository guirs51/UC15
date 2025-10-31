import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Exemplo1 from "./components/Exemplo1";
import Exemplo2 from "./components/Exemplo2";
import Exemplo3 from "./components/Exemplo3";
import Exemplo4 from "./components/Exemplo4";
import { useState } from "react";
import Exemplo5 from "./components/Exemplo5";

export default function App() {
  const [visivel, setVisivel] = useState<boolean>(true);
  return (
    <View style={styles.container}>
      <Exemplo1 />
      <Exemplo2 />
      <Exemplo3 />
      {visivel ? null : <Exemplo4 />}
      <Button title="clique aqui" onPress={() => setVisivel(!visivel)} />
      <Exemplo5 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
