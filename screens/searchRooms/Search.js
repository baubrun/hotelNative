import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import Slider from '@react-native-community/slider';
import Select from '../../components/Select';
import Check from '../../components/Check';
import {roomTypes, guests} from '../../data/searchData';
import {styles} from './styles';
import {css} from '../../css';

const Search = () => {
  const [maxPrice, setMaxPrice] = useState(299);
  const [roomsType, setRoomsType] = useState('');
  const [numGuests, setNumGuests] = useState('');
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  return (
    <View>
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
          minimumValue={299}
          maximumValue={599}
          minimumTrackTintColor={css.mainColorTrans}
          maximumTrackTintColor="#000"
          onValueChange={setMaxPrice}
          step={50}
          thumbTintColor={css.mainColor}
        />
      </View>
      <View style={styles.roomTypeRow}>
        <View>
          <Text style={styles.roomSelectTitle}>Room Type</Text>
        </View>
        <View style={styles.roomSelect}>
          <Select
            items={roomTypes}
            name="roomTypeSelect"
            selected={roomsType}
            setSelected={setRoomsType}
          />
        </View>
      </View>
      <View style={styles.guestRow}>
        <View>
          <Text style={styles.guestRowTitle}> Guests </Text>
        </View>
        <View style={styles.guestRowSelect}>
          <Select
            styling
            items={guests}
            name="guestSelect"
            selected={numGuests}
            setSelected={setNumGuests}
          />
        </View>
      </View>
      <View testID="breakfastCheckBox" style={styles.checkBoxRow}>
        <Check
          checkBoxColor="mainColor"
          leftTextStyle={styles.checkBoxStyle}
          state={breakfast}
          setState={setBreakfast}
          leftText="Breakfast"
        />
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
        <Button title="SEARCH" color={css.mainColor} />
      </View>
    </View>
  );
};

export default Search;
