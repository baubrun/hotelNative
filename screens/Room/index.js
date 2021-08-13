import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {defaultRoom} from '../../data/';
import {styles} from './roomStyle';

const Room = props => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const {item} = props;

  return (
    <View style={styles.roomContainer} testID="room">
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          source={item.images[0] || defaultRoom}
          resizeMode="cover"
        />

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{`$${item.price}`}</Text>
          <Text style={styles.priceText}>per night</Text>
        </View>
        <View style={styles.featuresContainer}>
          <TouchableOpacity
            style={styles.featuresBtn}
            testID="featureBtn"
            title={`${item.slug}`}>
            <Text style={styles.featuresText}>Features</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.roomInfo}>
        <Text style={styles.roomInfoText}>{item.name}</Text>
      </View>
    </View>
  );
};

export default Room;
