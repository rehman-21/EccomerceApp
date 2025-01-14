import React, {useEffect} from 'react';
import {StyleSheet, Image, ImageBackground, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PNG} from '../constants/svg';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../constants/routes';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(ROUTES.SIGN_UP);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/images/ecommerce-splash.jpg')}
      resizeMode="cover">
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.7)']}
        style={styles.gradient}>
        <View style={styles.logoContainer}>
          <Image source={PNG.SPLASH_LOGO} style={styles.image} />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 1000,
    height: 1000,
  },
});
