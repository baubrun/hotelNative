import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {css} from '../css';

const Spinner = () => {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color={css.mainColor} />
      <View>
        <Text style={styles.text}>loading ....</Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: css.darkGreyColorTrans,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: css.mainColor,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Spinner;
