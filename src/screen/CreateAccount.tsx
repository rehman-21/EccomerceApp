import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import InputField from '../components/InputFeild';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from 'react-native-reanimated';
import {Colors} from '../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SVG} from '../constants/svg';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../constants/routes';
import SocialButton from '../components/SocialBtn';

const CreateAccount = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleCreateAccount = () => {
    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Your passwords do not match.');
      return;
    }

    console.log('Account Created with:', {username, email, password});
  };

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
            Create Account
          </Animated.Text>
          <Animated.View entering={FadeInLeft.delay(700).duration(700)}>
            <InputField
              placeholder="Emai Address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </Animated.View>
          <Animated.View entering={FadeInRight.delay(900).duration(700)}>
            <InputField
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View entering={FadeInRight.delay(1000).duration(700)}>
            <InputField
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(1200).duration(700)}>
            <TouchableOpacity
              onPress={handleCreateAccount}
              style={styles.button}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInUp.delay(1200).duration(700)}>
            <View style={styles.footer}>
              <Text style={[styles.buttonText, styles.footerText]}>
                Already have an Account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(ROUTES.LOGIN)}>
                <Text style={styles.signupText}>Login</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
          <Animated.View entering={FadeInUp.delay(1200).duration(700)}>
            <SocialButton
              icon="mail"
              text="Continue with Email"
              onPress={() => navigation.navigate(ROUTES.CREATE_ACCOUNT)}
            />
          </Animated.View>
          <Animated.View entering={FadeInRight.delay(1200).duration(700)}>
            <SocialButton
              icon={<SVG.GOOGLE_LOGO.default />}
              text="Continue With Google"
            />
          </Animated.View>
          <Animated.View entering={FadeInLeft.delay(1200).duration(700)}>
            <SocialButton icon="apple-o" text="Continue With Apple" />
          </Animated.View>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default CreateAccount;

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
  soclbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
    width: '100%',
    justifyContent: 'center',
    borderColor: Colors.white,
    borderWidth: 2,
  },
  btnText: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 10,
  },
  icon: {
    color: '#FFF',
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
