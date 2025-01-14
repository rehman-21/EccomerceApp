import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Products from '../components/Products';
import FlashSale from '../components/FlashSale';
import { ProductType } from '../types/type';
import Category from '../components/category';
import { PNG, SVG } from '../constants/svg';
// import axios from 'react-native-axios';

type Props = {};

const Home = (props: Props) => {
  // const [product, setProducts] = useState<ProductType[]>([]);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = async () => {
  //   try {
  //     const URL = 'http://localhost:3000/products';
  //     const response = await axios.get(URL);
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView nestedScrollEnabled >
        <View style={styles.content}>
          <Category />
          <FlashSale />
          <Image style={{ width: '100%', height: 150, borderRadius: 15 }} source={PNG.SALE_BANNER} />
          <Products />
          {/* <FlatList data={product}
          keyExtractor={item => item.id.toString()}
          renderItem={({ index, item }) => <Text>{item.description}</Text>
          } /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    backgroundColor: '#f2f2f2',
    padding: 5,
  },
});
