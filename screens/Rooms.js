import React from 'react';
import {StyleSheet, FlatList, View, Image} from 'react-native';
import room2 from '../images/room-2.jpg';

const Rooms = () => {
  return (
    <View>
      <Image source={room2} style={styles.image} />
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

export default Rooms;
