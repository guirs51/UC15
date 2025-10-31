import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function Exemplo6() {

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("3 segundos se passaram!");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>⏳ Esperando 3 segundos...</Text>
    </View>
  )
}

const styles = StyleSheet.create({})