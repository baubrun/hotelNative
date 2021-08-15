/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, ImageBackground, View, Pressable} from 'react-native';
import Notification from '../components/Notification';
import room2 from '../images/room-2.jpg';
import Hero from '../components/Hero';
import {clearError, setError, error} from '../redux/errorSlice';
import {getRoomTypes, getRoomCapacity} from '../redux/roomSlice';

const Home = props => {
  const {navigation, showToaster, getCapacityList, getRoomsType} = props;
  const handlePress = () => {
    try {
      navigation.navigate('search');
    } catch (err) {
      showToaster(err.message);
    }
  };

  const getTypesCapacity = () => {
    try {
      getRoomsType();
      getCapacityList();
    } catch (err) {
      showToaster(err.message);
    }
  };

  useEffect(() => {
    getTypesCapacity();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={room2} resizeMode="cover">
        <Pressable onPress={handlePress} disabled={error}>
          <Hero subtitle="Deluxe Rooms starting at $99" title="HOSTEL" />
        </Pressable>
      </ImageBackground>
      {error && (
        <Notification message={error} _type="error" clearErr={clearError} />
      )}
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

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  showToaster: payload => dispatch(setError(payload)),
  getCapacityList: () => dispatch(getRoomCapacity()),
  getRoomsType: () => dispatch(getRoomTypes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
