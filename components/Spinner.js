import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {css} from '../css';

const Spinner = () => {
  return (
    <ActivityIndicator
      style={[styles.container]}
      size="large"
      color={css.mainColor}
    />
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
