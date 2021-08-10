import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Notification from '../components/Notification';
import room2 from '../images/room-2.jpg';

const Home = () => {
  const notif = false;
  return (
    <View>
      <Image source={room2} style={styles.image} />
      {notif && <Notification message="hoempage" _type="error" />}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    resizeMode: 'cover',
  },
});

export default Home;
