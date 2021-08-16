import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import {css} from '../../css';

const Room = props => {
  const {item, images, defaultRoom} = props;

  if (!item?.images?.[0]) {
    return (
      <View testID="room-error">
        <Text>items not loaded</Text>
      </View>
    );
  }

  return (
    <View style={styles.roomContainer} testID="room">
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          indicator={Progress.Circle}
          indicatorProps={{
            color: css.mainColorTrans,
          }}
          imageStyle={styles.image}
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
