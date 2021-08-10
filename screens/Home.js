import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import room1 from '../images/room-1.jpg';
import Notification from '../components/Notification';

const Home = () => {
  return (
    <View>
      <Notification message="hoempage" _type="error" />
    </View>
  );
};

export default Home;
