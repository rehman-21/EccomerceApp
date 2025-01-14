import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Favorite from './Favorite';
import dummydata from '../data/db.json';

const Products = () => {
    const renderProduct = ({ item: product }) => (
        <TouchableOpacity style={styles.productContainer}>
            <Image source={{ uri: product.images[0] }} style={styles.image} />
            <View style={styles.productInfo}>
                <Text style={styles.price}>${product.price}</Text>
                <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={18} color="#D4AF37" />
                    <Text style={styles.rating}>4.7</Text>
                </View>
            </View>
            <Text style={styles.title}>{product.title}</Text>
            <View style={styles.favoriteButton}>
                <Favorite />
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.Container} >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 15,
                    paddingTop: 10
                }}>
                <Text style={{ fontWeight: '600' }}>For you</Text>
                <TouchableOpacity>
                    <Text style={{ fontWeight: '600' }}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={dummydata.products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
                numColumns={2}
            />
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    Container: {
    },
    productContainer: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        padding: 10,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 170,
        borderRadius: 12,
    },
    productInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    price: {
        color: 'blue',
        fontSize: 16,
        fontWeight: '700',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        color: '#888',
        fontSize: 12,
        fontWeight: '700',
        marginLeft: 6,
    },
    title: {
        color: '#000',
        fontSize: 16,
        marginTop: 5,
        fontWeight: '600',
    },
    favoriteButton: {
        position: 'absolute',
        top: 25,
        right: 30,
    },
    list: {
        justifyContent: 'center',
    },
})