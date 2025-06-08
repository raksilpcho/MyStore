import React from 'react';
import {Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Product } from '../type/Product';


const ItemDetailScreen: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  const { item } = route.params as { item: Product };

  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={{width:"100%", flex:1}} onPress={()=>{navigation.goBack()}}>
      <Image source={{ uri: item.image }} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>Category: {item.category}</Text>
      <Text style={styles.price}>Price: ฿{item.price.toFixed(2)}</Text>
      <Text style={styles.rating}>Rating: ⭐ {item.rating.rate} ({item.rating.count})</Text>
      <Text style={styles.description}>{item.description}</Text>
    </ScrollView>
    </SafeAreaView>
  );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007BFF',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
});
