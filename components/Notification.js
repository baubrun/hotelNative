import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Toast, {BaseToast} from 'react-native-toast-message';

const toastConfig = {
  error: ({text1, props, type, ...rest}) => (
    <BaseToast
      {...rest}
      style={styles.error}
      contentContainerStyle={styles.toastContent}
      text1Style={styles.error}
      text1={text1}
      text2={props.uuid}
    />
  ),
};

const Notification = ({message, _type, clearErr}) => {
  useEffect(() => {
    Toast.show({
      visibilityTime: 2000,
      text1: message,
      type: _type,
      onHide: () => {
        clearErr();
      },
    });
  }, [_type, message, clearErr]);

  return (
    <Toast
      style={styles.container}
      config={toastConfig}
      ref={ref => Toast.setRef(ref)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
  },
  error: {
    borderLeftColor: 'red',
    fontSize: 14,
    fontWeight: '400',
  },
  success: {
    borderLeftColor: 'green',
    fontSize: 14,
    fontWeight: '400',
  },
  toastContent: {paddingHorizontal: 15},
});

export default Notification;
