import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function Exemplo3() {
  const [contador, setContador] = useState<number>(0);
  const [novoContador, setNovoContador] = useState<number>(0);

  useEffect(() => {
    console.log("o contador mudou para: ", contador);
  }, [contador]); // a função vai ser chamada APENAS quando o contador mudar
  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Text onPress={() => setContador(contador + 1)}>Exemplo3</Text>

      <Text>Contador: {novoContador}</Text>
      <Text onPress={() => setNovoContador(novoContador + 1)}>Exemplo3</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
