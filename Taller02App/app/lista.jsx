import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import { useRouter } from 'expo-router';
import data from '../assets/primeralista.json';
import images from '../assets/images'; 

export default function Lista() {
  const [textoBuscar, setTextoBuscar] = useState('');
  const [filtrados, setFiltrados] = useState(data.datos);
  const router = useRouter();

  useEffect(() => {
    if (textoBuscar === '') {
      setFiltrados(data.datos);
    } else {
      const resultado = data.datos.filter(item =>
        item.titulo.toLowerCase().includes(textoBuscar.toLowerCase())
      );
      setFiltrados(resultado);
    }
  }, [textoBuscar]);

  const renderItem = ({ item }) => (
    <View style={estilos.card}>
      <Image
        source={images[item.id]} 
        style={estilos.imagen}
      />
      <View style={estilos.contenido}>
        <Text style={estilos.titulo}>{item.titulo}</Text>
        <Text style={estilos.descripcion}>{item.descripcion}</Text>
      </View>
      <TouchableOpacity
        style={estilos.boton}
        onPress={() => router.push(`/detalle/${item.id}`)}
      >
        <Text style={estilos.textoBoton}>Acción</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.encabezado}>Lista de elementos</Text>
      <TextInput
        placeholder="Buscar por título"
        placeholderTextColor="#aaa"
        style={estilos.buscador}
        value={textoBuscar}
        onChangeText={setTextoBuscar}
      />
      <FlatList
        data={filtrados}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  encabezado: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F5E6B3',
    marginBottom: 10,
    textAlign: 'center',
  },
  buscador: {
    borderWidth: 1,
    borderColor: '#FF0000',
    borderRadius: 8,
    padding: 8,
    marginBottom: 15,
    color: '#fff',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#111',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF0000',
  },
  imagen: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF0000',
  },
  contenido: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F5E6B3',
  },
  descripcion: {
    fontSize: 14,
    color: '#ccc',
    marginVertical: 4,
  },
  boton: {
    backgroundColor: '#FF0000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 10,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});