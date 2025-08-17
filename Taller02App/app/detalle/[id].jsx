import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import data from "../../assets/primeralista.json";
import images from "../../assets/images"; 

export default function DetalleElemento() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const idString = String(id);
  const elemento = data.datos.find((item) => String(item.id) === idString);

  if (!elemento) {
    return (
      <View style={estilos.contenedor}>
        <Text style={estilos.textoError}>Elemento no encontrado</Text>
        <TouchableOpacity style={estilos.boton} onPress={() => router.back()}>
          <Text style={estilos.textoBoton}>Volver</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>{elemento.titulo}</Text>
      <Image source={images[elemento.id]} style={estilos.imagen} /> 
      <Text style={estilos.descripcion}>{elemento.descripcion}</Text>
      <Text style={estilos.precio}>💲 {elemento.precio}</Text>

      <TouchableOpacity style={estilos.boton} onPress={() => router.back()}>
        <Text style={estilos.textoBoton}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F5E6B3",
    marginBottom: 10,
    textAlign: "center",
  },
  imagen: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FF0000",
  },
  descripcion: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 10,
    textAlign: "center",
  },
  precio: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 20,
    textAlign: "center",
  },
  boton: {
    backgroundColor: "#FF0000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  textoBoton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  textoError: {
    fontSize: 18,
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },
});