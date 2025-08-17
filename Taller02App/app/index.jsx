import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Card, Text } from "react-native-paper";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const menuOpciones = [
  { id: "1", titulo: "Autor", icono: "account", color: "#9aec48ff", pantalla: "autor" },
  { id: "2", titulo: "Inicio de sesión", icono: "lock", color: "#ec4899", pantalla: "login" },
  { id: "3", titulo: "Pantalla principal", icono: "home", color: "#3b82f6", pantalla: "principal" },
  { id: "4", titulo: "Primera lista", icono: "view-list", color: "#8b5cf6", pantalla: "primeralista" },
  { id: "5", titulo: "Lista de elementos", icono: "view-list", color: "#f43f5e", pantalla: "lista" },
  { id: "6", titulo: "Formulario de registro", icono: "account-plus", color: "#6b7280", pantalla: "registro" },
  { id: "7", titulo: "Configuración", icono: "cog", color: "#0ea5e9", pantalla: "configuracion" },
  { id: "8", titulo: "Perfil de usuario", icono: "account", color: "#525252", pantalla: "perfil" },
  { id: "9", titulo: "Lista de servicios", icono: "book", color: "#3b82f6", pantalla: "servicios" },
];

export default function Index() {
  const router = useRouter();

  const renderItem = ({ item }) => (
  <Card style={styles.card} onPress={() => router.push(`${item.pantalla}`)}>
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: item.color + "20" }]}>
          <MaterialCommunityIcons name={item.icono} size={28} color={item.color} />
        </View>
        <Text style={styles.title}>{item.titulo}</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#9ca3af" />
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pantallas</Text>
      <FlatList
        data={menuOpciones}
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
    backgroundColor: "#f8fafc",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#111827",
    paddingHorizontal: 5,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 8,
    elevation: 2,
    height: 90,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
  },
});