import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {css} from '../css';
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
    backgroundColor: css.blackColorTrans,
    color: css.whiteColor,
    letterSpacing: 3,
    padding: 16,
  },
  subtitle: {
    backgroundColor: css.mainColorTrans,
    color: css.mainColorTrans,
    marginTop: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  text: {
    color: css.whiteColor,
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
  },
  title: {
    color: css.whiteColor,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Hero;
