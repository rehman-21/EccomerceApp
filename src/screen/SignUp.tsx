import React, {useEffect, useRef} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../constants/Colors';
import {SVG} from '../constants/svg';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../constants/routes';
import SocialButton from '../components/SocialBtn';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from 'react-native-reanimated';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/images/ecommerce-splash.jpg')}
      resizeMode="cover">
      <View style={styles.overlay}>
        <LinearGradient
          colors={[
            'transparent',
            'rgba(255,255,255,0.9)',
            'rgba(255,255,255,1)',
          ]}
          style={styles.gradient}>
          <View style={styles.content}>
            <Animated.Text
              entering={FadeInRight.delay(300).duration(700)}
              style={[styles.appName]}>
              ShopX
            </Animated.Text>

            <Animated.Text
              entering={FadeInLeft.delay(300).duration(700)}
              style={[styles.tagline]}>
              One Stop Solution for All Your Needs.
            </Animated.Text>
            <Animated.View entering={FadeInRight.delay(1200).duration(700)}>
              <SocialButton
                icon="mail"
                text="Continue with Email"
                onPress={() => navigation.navigate(ROUTES.CREATE_ACCOUNT)}
              />
            </Animated.View>
            <Animated.View entering={FadeInUp.delay(700).duration(700)}>
              <SocialButton
                icon={<SVG.GOOGLE_LOGO.default />}
                text="Continue With Google"
              />
            </Animated.View>
            <Animated.View entering={FadeInRight.delay(900).duration(700)}>
              <SocialButton icon="apple-o" text="Continue With Apple" />
            </Animated.View>

            {/* Footer */}
            <Animated.View entering={FadeInLeft.delay(1100).duration(700)}>
              <View style={styles.footer}>
                <Text style={[styles.buttonText, styles.footerText]}>
                  Already have an Account?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(ROUTES.CREATE_ACCOUNT)}>
                  <Text style={styles.signupText}>Create Account</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'flex-end',
  },
  content: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  appName: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 22,
    letterSpacing: 2,
    marginBottom: 10,
    textAlign: 'center',
  },
  tagline: {
    color: Colors.gray,
    fontSize: 14,
    lineHeight: 30,
    letterSpacing: 1.2,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
    width: '100%',
    justifyContent: 'center',
    borderColor: Colors.gray,
    borderWidth: 2,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
  },
  signupText: {
    fontSize: 15,
    color: 'blue',
    fontWeight: '700',
    marginLeft: 5,
  },
});
