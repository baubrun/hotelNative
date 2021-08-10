import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Toast, {BaseToast} from 'react-native-toast-message';

const toastConfig = {
  success: ({text1, props, type, ...rest}) => (
    <BaseToast
      {...rest}
      style={type === 'success' ? styles.success : styles.error}
      contentContainerStyle={styles.toastContent}
      text1Style={styles.text1Style}
      text1={text1}
      text2={props.uuid}
    />
  ),
};

const Notification = ({message, _type}) => {
  useEffect(() => {
    Toast.show({
      text1: message,
      type: _type,
    });
  }, []);

  return <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />;
};

const styles = StyleSheet.create({
  error: {
    borderLeftColor: 'red',
  },
  text1Style: {
    fontSize: 15,
    fontWeight: '400',
  },
  success: {
    borderLeftColor: 'green',
  },
  toastContent: {paddingHorizontal: 15},
});

export default Notification;
