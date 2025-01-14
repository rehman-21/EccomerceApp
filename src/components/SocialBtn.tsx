import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../constants/Colors';
import { DIMENSIONS } from '../constants/Dimensions';

interface SocialButtonProps {
  icon: React.ReactNode | string;
  text: string;
  onPress?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {typeof icon === 'string' ? (
        <AntDesign name={icon} size={20} style={styles.icon} />
      ) : (
        icon
      )}
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 5,
    borderRadius: 20,
    width: DIMENSIONS.WIDTH * 0.9,
    height: DIMENSIONS.HEIGHT * 0.06,
    justifyContent: 'center',
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  btnText: {
    color: Colors.highlight,
    fontSize: 18,
    marginLeft: 6,
  },
  icon: {
    color: Colors.highlight,
  },
});
