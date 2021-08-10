import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import room1 from '../images/room-1.jpg';

const Home = () => {
  return (
    <View>
      <Image source={room1} />
    </View>
  );
};

export default Home;
