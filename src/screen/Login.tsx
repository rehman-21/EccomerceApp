import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  FadeInDown,
  FadeInRight,
  FadeInUp,
} from 'react-native-reanimated';
import {Colors} from '../constants/Colors';
import {ROUTES} from '../constants/routes';
import InputField from '../components/InputFeild';
import SocialButton from '../components/SocialBtn';
import {SVG} from '../constants/svg';

const Login = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/images/ecommerce-splash.jpg')}
      resizeMode="cover">
      <View style={styles.container}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.7)']}
          style={styles.gradient}>
          <Animated.Text
            entering={FadeInUp.delay(300).duration(700)}
            style={styles.title}>
            Login Your Account
          </Animated.Text>

          <Animated.View entering={FadeInUp.delay(700).duration(700)}>
            <InputField
              placeholder="Email Address"
              keyboardType="email-address"
            />
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(900).duration(700)}>
            <InputField placeholder="Password" secureTextEntry />
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(1200).duration(700)}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ROUTES.MY_TAB, {screen: ROUTES.HOME_SCREEN})
              }
              style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInUp.delay(1200).duration(700)}>
            <SocialButton
              icon="mail"
              text="Continue with Email"
              onPress={() => navigation.navigate(ROUTES.CREATE_ACCOUNT)}
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(1200).duration(700)}>
            <SocialButton
              icon={<SVG.GOOGLE_LOGO.default />}
              text="Continue With Google"
            />
          </Animated.View>
          <Animated.View entering={FadeInRight.delay(1200).duration(700)}>
            <SocialButton icon="apple-o" text="Continue With Apple" />
          </Animated.View>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
    color: 'blue',
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: Colors.primary,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 5.5,
    elevation: 7,
    marginVertical: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  gradient: {
    flex: 1,
    padding: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderColor: '#ffff',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 14,
  },
  signupText: {
    fontSize: 15,
    color: 'pink',
    fontWeight: '700',
    marginLeft: 5,
  },
});
