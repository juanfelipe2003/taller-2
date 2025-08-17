import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text, Card } from "react-native-paper";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const servicios = [
  { id: "1", titulo: "Envíos a domicilio", descripcion: "Rápidos y seguros", icono: "truck" },
  { id: "2", titulo: "Atención 24/7", descripcion: "Soporte personalizado", icono: "headset" },
  { id: "3", titulo: "Pagos seguros", descripcion: "Con todas las tarjetas", icono: "credit-card" },
  { id: "4", titulo: "Garantía de calidad", descripcion: "Productos verificados", icono: "shield-check" },
];

export default function Servicios() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <View style={styles.row}>
        <MaterialCommunityIcons name={item.icono} size={32} color="#3c03f8ff" />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.descripcion}>{item.descripcion}</Text>
        </View>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/configuracion")}>
          <MaterialCommunityIcons name="cog" size={28} color="#fe0000ff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nuestros Servicios</Text>
        <TouchableOpacity onPress={() => router.push("/principal")}>
          <MaterialCommunityIcons name="home" size={28} color="#eeff00ff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={servicios}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", 
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  descripcion: {
    fontSize: 14,
    color: "#ccc",
  },
});