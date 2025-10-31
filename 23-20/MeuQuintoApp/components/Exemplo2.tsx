import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

export default function Exemplo2() {
  useEffect(() => {
    console.log("Componente apareceu na tela")
  }, []);
  return (
    <View>
        <Text>qualquer coisa</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
