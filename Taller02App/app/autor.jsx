import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Card } from "react-native-paper";

export default function Autor() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/autor.jpg")}
            style={styles.avatar}
          />
          <Text variant="titleLarge" style={styles.nombre}>
            Felipe Preciado
          </Text>
          <Text variant="bodyMedium" style={styles.info}>
            Propietario de The Goat Store, propietario de J Y A prestamos, 
            Estudiante de telecomunicaciones e informática, 
            Soporte técnico de la corporación (AFRIMUCPAS), 
            DJ y socio de Disco-bar La Preferencia.
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    padding: 20
  },
  card: {
    padding: 10
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15
  },
  nombre: {
    fontWeight: "bold",
    marginBottom: 5
  },
  info: {
    textAlign: "center",
    color: "#555"
  }
});