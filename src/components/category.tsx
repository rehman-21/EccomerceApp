import React from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import dummydata from '../data/db.json';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DIMENSIONS } from '../constants/Dimensions';

const Category = () => {
    const renderCategory = ({ item: Category }) => {
        return (
            <TouchableOpacity style={styles.productContainer}>
                <Image source={{ uri: Category.image }} style={styles.image} />
                <View style={styles.productInfo}>
                    <Text style={styles.price}>{Category.name}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ paddingHorizontal: 10, backgroundColor: '#f2F2F2' }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Text style={{ fontWeight: '600' }}>Categories</Text>
                <TouchableOpacity>
                    <Text style={{ fontWeight: '600' }}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={dummydata.categories}
                horizontal
                renderItem={renderCategory}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.list}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default Category;

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        position: 'relative',
        alignItems: 'center'
    },
    image: {
        width: DIMENSIONS.WIDTH * 0.15,
        height: DIMENSIONS.HEIGHT * 0.07,
        borderRadius: 50,
    },
    productInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    price: {
        color: '#000',
        fontSize: 12,
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
    list: {
        justifyContent: 'center',
    },
});
