import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Hero = props => {
  const {subtitle, title} = props;

  return (
    <View style={styles.banner}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subtitle}>
        <Text style={styles.text}>{subtitle} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    letterSpacing: 3,
    padding: 16,
  },
  subtitle: {
    backgroundColor: 'rgba(255, 217, 179, 0.5)',
    marginTop: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Hero;
