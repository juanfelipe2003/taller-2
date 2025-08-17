import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import data from '../assets/primeralista.json';
import imagenes from '../assets/images'; 

export default function PrimeraLista() {
  const [estado, setEstado] = useState(
    data.datos.reduce((acc, item) => {
      acc[item.id] = item.mostrarTodo;
      return acc;
    }, {})
  );

  const alternarVerMas = (id) => {
    setEstado((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Primera Lista</Text>
      {data.datos.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={imagenes[item.id]} style={styles.imagen} />
          <Text style={styles.subtitulo}>{item.titulo}</Text>

          {estado[item.id] ? (
            <Text style={styles.descripcion}>{item.descripcion}</Text>
          ) : (
            <Text style={styles.descripcion}>
              {item.descripcion.substring(0, 30)}...
            </Text>
          )}

          <TouchableOpacity
            style={styles.boton}
            onPress={() => alternarVerMas(item.id)}
          >
            <Text style={styles.botonTexto}>
              {estado[item.id] ? 'Ver menos' : 'Ver más'}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}