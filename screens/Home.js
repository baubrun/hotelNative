import React from 'react';
import {StyleSheet, ImageBackground, View, Pressable} from 'react-native';
import Notification from '../components/Notification';
import room2 from '../images/room-2.jpg';
import Hero from '../components/Hero';

const Home = ({navigation}) => {
  const notif = false;
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={room2} resizeMode="cover">
        <Pressable onPress={() => navigation.navigate('search')}>
          <Hero subtitle="Deluxe Rooms starting at $299" title="HOSTEL" />
        </Pressable>
      </ImageBackground>
      {notif && <Notification message="hoempage" _type="error" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home;
