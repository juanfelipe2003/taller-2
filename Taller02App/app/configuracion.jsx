import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, Switch } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Configuracion() {
  const [notificaciones, setNotificaciones] = useState(false);
  const router = useRouter();

  const opciones = [
    { id: 1, titulo: "Cuenta" },
    { id: 2, titulo: "Notificaciones", tipo: "switch" },
    { id: 3, titulo: "Privacidad" },
    { id: 4, titulo: "Seguridad" },
    { id: 5, titulo: "Ayuda" },
  ];

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.header}>Ajustes</Text>

      {/* Opciones */}
      {opciones.map((opcion) => (
        <View key={opcion.id} style={styles.item}>
          <Text style={styles.text}>{opcion.titulo}</Text>

          {opcion.tipo === "switch" ? (
            <Switch
              value={notificaciones}
              onValueChange={setNotificaciones}
              color="#ff0000"
            />
          ) : (
            <Text style={styles.link}>{">"}</Text>
          )}
        </View>
      ))}

      {/* Botón de cerrar sesión */}
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>

      {/* Logo en la parte inferior */}
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0000",
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: "stretch",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "left",
    color: "#000000ff",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: "#111",
  },
  link: {
    fontSize: 18,
    color: "#999",
  },
  logoutBtn: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#000000ff",
    paddingVertical: 12,
    borderRadius: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffffff",
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 40,
  },
});