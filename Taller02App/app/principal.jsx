import React from "react";
import { View, StyleSheet, Text, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";


import logo from "../assets/logo.jpg"; 

import zapato1 from "../assets/productos/zapato1.jpg";
import zapato2 from "../assets/productos/zapato2.jpg";
import zapato3 from "../assets/productos/zapato3.jpg";
import camisa1 from "../assets/productos/camisa1.jpg";
import camisa2 from "../assets/productos/camisa2.jpg";
import camisa3 from "../assets/productos/camisa3.jpg";
import conjunto1 from "../assets/productos/conjunto1.jpg";
import conjunto2 from "../assets/productos/conjunto2.jpg";
import conjunto3 from "../assets/productos/conjunto3.jpg";
import  gorra1 from "../assets/productos/gorra1.jpg";
import  gorra2 from "../assets/productos/gorra2.jpg";
import  gorra3 from "../assets/productos/gorra3.jpg";

export default function Principal() {
  const categorias = [
    { titulo: "Zapatos", data: [zapato1, zapato2, zapato3] },
    { titulo: "Camisas", data: [camisa1, camisa2, camisa3] },
    { titulo: "Conjuntos", data: [conjunto1, conjunto2, conjunto3] },
    { titulo: "gorras", data: [gorra1, gorra2, gorra3] }
  ];

  return (
    <ScrollView style={styles.container}>
     
      <Image source={logo} style={styles.logo} />

      
      <Text style={styles.titulo}>Bienvenido a The Goat Store</Text>
      <Text style={styles.subtitulo}>
        Te brindamos lo mejor en prendas de vestir
      </Text>

      <TouchableOpacity style={styles.boton}>
        <Text style={styles.botonTexto}>Ver catálogo completo</Text>
      </TouchableOpacity>

      {categorias.map((categoria, index) => (
        <View key={index} style={styles.categoria}>
          <Text style={styles.categoriaTitulo}>{categoria.titulo}</Text>
          <FlatList
            data={categoria.data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image source={item} style={styles.imagenProducto} />
            )}
            keyExtractor={(item, i) => i.toString()}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", 
    padding: 10
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginVertical: 10,
    resizeMode: "contain"
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5
  },
  subtitulo: {
    fontSize: 14,
    color: "#facc15", 
    textAlign: "center",
    marginBottom: 15
  },
  boton: {
    backgroundColor: "#ff0000", 
    padding: 12,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 20
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  categoria: {
    marginBottom: 20
  },
  categoriaTitulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  imagenProducto: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 10
  }
});