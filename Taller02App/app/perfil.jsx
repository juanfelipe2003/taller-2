import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { TextInput, List, Card } from "react-native-paper";
import { useRouter } from "expo-router";
import usuariosData from "../assets/usuarios.json";

export default function Perfil() {
  const [textoBuscar, setTextoBuscar] = useState("");
  const [usuarios, setUsuarios] = useState(usuariosData);
  const router = useRouter();

  useEffect(() => {
    if (textoBuscar === "") {
      setUsuarios(usuariosData);
    } else {
      const filtrados = usuariosData.filter((u) =>
        u.nombre.toLowerCase().includes(textoBuscar.toLowerCase())
      );
      setUsuarios(filtrados);
    }
  }, [textoBuscar]);

  return (
    <View style={styles.container}>
      <TextInput
        label="Buscar usuario"
        value={textoBuscar}
        onChangeText={setTextoBuscar}
        style={styles.buscador}
      />

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
         <Card
            style={styles.card}
            onPress={() => router.push(`/perfilDetalle?id=${item.id}`)}
          >
            <Card.Title
              title={item.nombre}
              subtitle={item.usuario}
              left={(props) => (
                <Image
                  source={{ uri: item.avatar }}
                  style={styles.avatar}
                />
              )}
            />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  buscador: {
    marginBottom: 10
  },
  card: {
    marginBottom: 8
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  }
});