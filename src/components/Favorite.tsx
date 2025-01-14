import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DIMENSIONS } from '../constants/Dimensions';

const Favorite = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <TouchableOpacity
            style={styles.favoriteButton}
            onPress={toggleFavorite}
        >
            <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={20}
                color={isFavorite ? "#888" : "#555"}
            />
        </TouchableOpacity>
    );
};

export default Favorite;

const styles = StyleSheet.create({
    favoriteButton: {
        width: DIMENSIONS.WIDTH * 0.08,
        height: DIMENSIONS.HEIGHT * 0.04,
        borderRadius: 50,
        backgroundColor: 'rgba(255,255,255,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
