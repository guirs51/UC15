import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

export default function Contador() {
// Declaramos o estado "contador", a funcão setContador que altera 
// O estadi=o inicial, ou seja, o valor inicial, é '0'
    const [contador, setContador] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {contador}</Text>
      <Button
        title="Clique aqui"
        onPress={() => setContador(contador +1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});