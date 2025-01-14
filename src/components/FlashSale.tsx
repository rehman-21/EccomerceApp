import React, { useEffect, useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants/Colors';
import { DIMENSIONS } from '../constants/Dimensions';
import dummydata from '../data/db.json';
import Favorite from './Favorite';

const FlashSale = () => {
    const saleEndDate = new Date();
    saleEndDate.setDate(saleEndDate.getDate() + 5);
    saleEndDate.setHours(23, 59, 59);

    const [timeUnits, setTimeUnits] = useState({
        day: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const formatTime = (unit: number) => (unit < 10 ? `0${unit}` : unit);

    useEffect(() => {
        const calculateTimeUnits = (timeDifference: number) => {
            const seconds = Math.floor(timeDifference / 1000);
            setTimeUnits({
                day: Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)),
                hours: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
                minutes: Math.floor((seconds % (60 * 60)) / 60),
                seconds: seconds % 60,
            });
        };

        const updateCountdown = () => {
            const currentTime = new Date().getTime();
            const timeDifference = saleEndDate.getTime() - currentTime;

            if (timeDifference > 0) {
                calculateTimeUnits(timeDifference);
            } else {
                setTimeUnits({ day: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(timer);
            }
        };

        const timer = setInterval(updateCountdown, 1000);

        return () => clearInterval(timer);
    }, [saleEndDate]);

    const renderFlashItem = ({ item }: { item: any }) => (
        <View style={styles.productCard}>
            <Image source={{ uri: item.images[0] }} style={styles.image} />
            <View style={styles.productInfo}>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={18} color="#D4AF37" />
                    <Text style={styles.rating}>4.7</Text>
                </View>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.favoriteButton}>
                <Favorite />
            </View>

        </View>
    );

    if (!dummydata.saleProducts || dummydata.saleProducts.length === 0) {
        return <Text style={styles.noProductsText}>No products available</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.titleText}>Flash Sale</Text>
                    <View style={styles.timerContainer}>
                        <Ionicons name="time-outline" color="#888" size={20} />
                        <Text style={styles.timerText}>
                            {`${formatTime(timeUnits.day)}:${formatTime(
                                timeUnits.hours,
                            )}:${formatTime(timeUnits.minutes)}:${formatTime(timeUnits.seconds)}`}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={styles.sellAllText}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={dummydata.saleProducts}
                renderItem={renderFlashItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.productList}
            />
        </View>
    );
};

export default FlashSale;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    titleText: {
        fontSize: 18,
        fontWeight: '700',
        marginRight: 10
    },
    timerContainer: {
        backgroundColor: Colors.highlight,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 20,
    },
    timerText: {
        fontSize: 14,
        marginLeft: 5,
        color: '#000',
        fontWeight: '500',
    },
    sellAllText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    productList: {
        paddingHorizontal: 5,
    },
    productCard: {
        width: DIMENSIONS.WIDTH * 0.4,
        borderRadius: 10,
        paddingVertical: 10,
        marginRight: 15
    },

    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 14,
        color: Colors.primary,
        marginVertical: 5,
    },
    buyNowText: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
    },
    noProductsText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#888',
        marginTop: 20,
    },
    image: {
        width: "100%",
        height: 150,
        marginBottom: 10,
        borderRadius: 10,
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
});
