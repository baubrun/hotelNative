import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {images, defaultRoom} from '../../images';
import {styles} from './roomStyle';

const Room = props => {
  const {item} = props;

  return (
    <View style={styles.roomContainer} testID="room">
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          source={images[item.images[0]].path || defaultRoom}
          resizeMode="cover"
        />

        <View testID="price" style={styles.priceContainer}>
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

      <View testID="roomInfo" style={styles.roomInfo}>
        <Text style={styles.roomInfoText}>{item.name}</Text>
      </View>
    </View>
  );
};

export default Room;
