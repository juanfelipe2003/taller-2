import React, { useState } from "react";
import { View, StyleSheet, Alert, Image, ScrollView } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import usuarios from "../assets/usuarios.json";
import logo from "../assets/logo.jpg";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const validarLogin = () => {
    const encontrado = usuarios.find((u) => u.usuario === usuario);

    if (!encontrado) {
      Alert.alert("Error", "El usuario no existe.");
      return;
    }

    if (encontrado.clave !== clave) {
      Alert.alert("Error", "Datos de acceso incorrectos.");
      return;
    }

    Alert.alert("Bienvenido", `Acceso correcto. Hola, ${encontrado.nombre}`);
    setUsuario("");
    setClave("");
    navigation.navigate("menu");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Text variant="titleLarge" style={styles.titulo}>
        Inicie sesión en The Goat Store
      </Text>

      <View style={styles.form}>
        <TextInput
          label="Usuario"
          value={usuario}
          onChangeText={setUsuario}
          style={styles.input}
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

        <Button
          mode="contained"
          onPress={validarLogin}
          style={styles.boton}
          buttonColor="#000000"
          textColor="#ffffff"
        >
          Ingresar
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