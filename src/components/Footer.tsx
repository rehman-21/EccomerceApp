import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface FooterProps {
  onSignInPress: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSignInPress }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Already have an Account?</Text>
      <TouchableOpacity onPress={onSignInPress}>
        <Text style={styles.signupText}>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
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
