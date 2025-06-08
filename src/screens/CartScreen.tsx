import React, { useEffect, useState, useCallback, use} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { RootState } from '../redux/store';
import CardList from '../components/CardList';
import { Product } from '../type/Product';

const CartScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    const dispatch = useDispatch();
    const { inventory, loading, error } = useSelector((state: RootState) => state.inventory);


  useFocusEffect(
    useCallback(() => {
      //FAIL TO CALL ERROR CASE
      dispatch({
        type: 'FETCH_INVENTORY_FAILURE',
        error: 'Mock error occurred',
      });

      // TO SUCCESS
      // dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
    }, [dispatch])
  );

      useEffect(() => {
        setRefreshing(loading);
        setProducts(inventory);
      }, [inventory,loading]);


const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
  }, [dispatch]);

  const renderItem = ({ item }: { item: Product }) => (
    <CardList item={item as Product} onPress={()=> navigation.navigate('ItemDetailScreen',{item})}  />
  );

  if (refreshing) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="red" />
        <Text>Loading products...</Text>
      </View>
    );
  }

  if (error && !loading) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: 'red' }}>เกิดข้อผิดพลาดในการโหลดสินค้า</Text>
        <TouchableOpacity onPress={onRefresh}>
          <Text style={{ color: 'blue', marginTop: 10 }}>ลองใหม่อีกครั้ง</Text>
        </TouchableOpacity>
      </View>
    );
  }



  return (
    <SafeAreaView>
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16, paddingBottom: 32, backgroundColor:'red' }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
    />
 </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 6,
  },
  price: {
    fontSize: 15,
    color: '#007BFF',
    marginBottom: 4,
  },
  rating: {
    fontSize: 13,
    color: 'gray',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
