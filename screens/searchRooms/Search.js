import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Text, View, Button, ImageBackground} from 'react-native';
import Slider from '@react-native-community/slider';
import Select from '../../components/Select';
import Check from '../../components/Check';
import {styles} from './styles';
import {css} from '../../css';
import Notification from '../../components/Notification';
import {getRooms, setError, clearError} from '../../redux/roomSlice';
import frontDeskImg from '../../images/front-desk.jpg';
import {arrNumStr} from '../../utils';

const Search = props => {
  const {rooms, getRoomsList, roomsError, clearErr} = props;
  const [maxPrice, setMaxPrice] = useState(100);
  const [types, setTypes] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('all');
  const [capacity, setCapacity] = useState([]);
  const [selectedCapacity, setSelectedCapacity] = useState(1);
  const [pets, setPets] = useState(false);

  useEffect(() => {
    setTypes(['all', ...rooms?.roomTypes]);
    setCapacity(arrNumStr(rooms?.roomCapacity));
  }, [rooms?.roomTypes, rooms?.roomCapacity]);

  const handleSearch = async () => {
    const roomData = {
      price: maxPrice,
      type: selectedRoom,
      capacity: selectedCapacity,
      pets,
    };
    try {
      getRoomsList(roomData);
      props.navigation.navigate('rooms');
    } catch (err) {
      const errMsg = err?.response ? err.response?.data : err?.message;
      roomsError(errMsg);
    }
  };

  return (
    <View style={styles.container}>
      {rooms?.error && (
        <Notification
          message={rooms?.error}
          _type="error"
          clearErr={clearErr}
        />
      )}
      <ImageBackground
        resizeMode="cover"
        source={frontDeskImg}
        style={styles.image}>
        <View style={styles.paper}>
          <View>
            <Text testID="searchRoomsText" style={styles.title}>
              Search Rooms
            </Text>
          </View>
          <View style={styles.priceRow}>
            <View>
              <Text testID="priceText" style={styles.price}>
                {`Price: $${maxPrice}`}
              </Text>
            </View>
            <Slider
              testID="slider"
              style={styles.slider}
              minimumValue={100}
              maximumValue={600}
              minimumTrackTintColor={css.mainColorTrans}
              maximumTrackTintColor="#000"
              onValueChange={setMaxPrice}
              step={50}
              thumbTintColor={css.mainColor}
            />
          </View>
          <View style={styles.roomTypeRow}>
            <View>
              <Text style={styles.roomSelectTitle}> Room Type </Text>
            </View>
            <View style={styles.roomSelect}>
              <Select
                items={types}
                name="roomTypeSelect"
                selected={selectedRoom}
                setSelected={setSelectedRoom}
              />
            </View>
          </View>
          <View style={styles.capacityRow}>
            <View>
              <Text style={styles.capacityRowTitle}> Capacity </Text>
            </View>
            <View style={styles.capacityRowSelect}>
              <Select
                styling
                items={capacity}
                name="capacitySelect"
                selected={selectedCapacity}
                setSelected={setSelectedCapacity}
              />
            </View>
          </View>
          <View testID="petsCheckBox" style={styles.checkBoxRow}>
            <Check
              checkBoxColor="blackColor"
              leftTextStyle={styles.checkBoxStyle}
              state={pets}
              setState={setPets}
              leftText="Pets"
            />
          </View>
          <View testID="searchBtn" style={styles.searchBtn}>
            <Button
              color={css.mainColor}
              onPress={() => handleSearch()}
              title="SEARCH"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => ({
  rooms: state.rooms,
});

const mapDispatchToProps = dispatch => ({
  getRoomsList: payload => dispatch(getRooms(payload)),
  roomsError: payload => dispatch(setError(payload)),
  clearErr: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
