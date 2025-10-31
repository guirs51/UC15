import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

export default function Exemplo5() {
  // Estado para armazenar os usuarios
  const [usuarios, setUsuarios] = useState<any[]>([]);

  //Chamamos a API quando o componente é montado, ou seja,  uma vez só
  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        console.log("Buscando dadso da API..");

        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const dados =  await resposta.json();

        setUsuarios(dados);
      } catch (e) {
        console.error("Erro ao buscar usuario: ", e)
      }
    };

    buscarUsuario()
  }, []);

    return (
    <View style={styles.container}>
      <Text style={styles.titulo}>👥 Lista de Usuários</Text>
      
      {/* FlatList para exibir os dados */}
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()} // chave única
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item.name}</Text> // mostra o nome do usuário
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 30 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: { fontSize: 18, marginVertical: 4 },
});
