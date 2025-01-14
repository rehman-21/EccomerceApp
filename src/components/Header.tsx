import React from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants/Colors';
import Animated, { FadeIn, FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated';
import { DIMENSIONS } from '../constants/Dimensions';

const Header = () => {
    return (
        <Animated.View entering={FadeInRight.delay(400).duration(700)}>
            <View style={styles.headerContainer}>
                <Animated.View entering={FadeInLeft.delay(600).duration(700)}>
                    <Text style={styles.title}>SX</Text>
                </Animated.View>
                <Animated.View entering={FadeInRight.delay(900).duration(700)}>
                    <View style={styles.searchContainer}>
                        <TextInput
                            placeholder="Search..."
                            style={styles.textInput}
                            placeholderTextColor="#888"
                        />
                        <Animated.View entering={FadeInRight.delay(1100).duration(700)}>
                            <TouchableOpacity>
                                <Ionicons name="search" color="#888" size={20} />
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </Animated.View>
            </View>
        </Animated.View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        color: Colors.primary,
        fontSize: 20,
        fontWeight: '700',
    },
    searchContainer: {
        backgroundColor: '#F2F2F2',
        width: DIMENSIONS.WIDTH * 0.8,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    textInput: {
        flex: 1,
        marginRight: 10,
        color: '#000',
    },
});
