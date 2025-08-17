import React, { useState } from "react";
import { View, StyleSheet, Alert, Image, ScrollView } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import usuariosData from "../assets/usuarios.json";
import logo from "../assets/logo.jpg";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [confirmarClave, setConfirmarClave] = useState("");

  const registrarUsuario = () => {
    if (!nombre || !correo || !clave || !confirmarClave) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    if (clave !== confirmarClave) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }

    const existe = usuariosData.find(
      (u) => u.usuario === correo || u.nombre === nombre
    );

    if (existe) {
      Alert.alert("Advertencia", "El usuario ya existe.");
      return;
    }

    Alert.alert("Éxito", "Usuario creado con éxito.");

    setNombre("");
    setCorreo("");
    setClave("");
    setConfirmarClave("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Text variant="titleLarge" style={styles.titulo}>
        Registro de usuario
      </Text>

      <View style={styles.form}>
        <TextInput
          label="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
          activeUnderlineColor="#ff0000"
        />

        <TextInput
          label="Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
          style={styles.input}
          keyboardType="email-address"
          activeUnderlineColor="#ff0000"
        />

        <TextInput
          label="Contraseña"
          value={clave}
          onChangeText={setClave}
          secureTextEntry
          style={styles.input}
          activeUnderlineColor="#ff0000"
        />

        <TextInput
          label="Confirmar contraseña"
          value={confirmarClave}
          onChangeText={setConfirmarClave}
          secureTextEntry
          style={styles.input}
          activeUnderlineColor="#ff0000"
        />

        <Button
          mode="contained"
          onPress={registrarUsuario}
          style={styles.boton}
          buttonColor="#000000"
          textColor="#ffffff"
        >
          Registrarse
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ff0000",
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 90,
  },
  titulo: {
    textAlign: "center",
    marginBottom: 25,
    fontWeight: "bold",
    fontSize: 22,
    color: "#000000ff",
  },
  form: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  input: {
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  boton: {
    marginTop: 15,
    borderRadius: 25,
    paddingVertical: 5,
  },
});