import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useLocalSearchParams, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import usuariosData from "../assets/usuarios.json";

export default function PerfilDetalle() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const usuario = usuariosData.find((u) => u.id.toString() === id);

  if (!usuario) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Usuario no encontrado</Text>
      </View>
    );
  }

  const opciones = [
    { titulo: "Editar perfil", icono: "edit" },
    { titulo: "Notificaciones", icono: "notifications" },
    { titulo: "Ayuda", icono: "help-outline" },
    { titulo: "Configuración", icono: "settings" },
    { titulo: "Cerrar sesión", icono: "logout" },
  ];

  const handlePress = (op) => {
    if (op.titulo === "Cerrar sesión") {
      router.replace("/login"); 
    } else {
      console.log(`Opción seleccionada: ${op.titulo}`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Info del usuario */}
      <View style={styles.header}>
        <Image source={{ uri: usuario.avatar }} style={styles.avatar} />
        <Text style={styles.nombre}>{usuario.nombre}</Text>
        <Text style={styles.usuario}>@{usuario.usuario}</Text>
        {/* 👇 Aquí mostramos el correo */}
        <Text style={styles.correo}>{usuario.correo}</Text>
      </View>

      {/* Opciones */}
      <View style={styles.menu}>
        {opciones.map((op, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => handlePress(op)}
          >
            <MaterialIcons
              name={op.icono}
              size={24}
              color={op.titulo === "Cerrar sesión" ? "red" : "white"}
            />
            <Text
              style={[
                styles.menuText,
                op.titulo === "Cerrar sesión" && { color: "red" },
              ]}
            >
              {op.titulo}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", 
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  nombre: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  usuario: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  correo: {
    fontSize: 16,
    color: "#bbb", // gris clarito para diferenciarlo
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  menuText: {
    color: "white",
    fontSize: 18,
    marginLeft: 15,
  },
});