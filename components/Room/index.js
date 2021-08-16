import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import {css} from '../../css';
import {getRoom, setError, clearError} from '../../redux/roomSlice';
import Notification from '../Notification';

const Room = props => {
  const {
    item,
    images,
    defaultRoom,
    navigation,
    error,
    showToaster,
    clearErr,
    getRoomDetail,
  } = props;

  if (!item?.images?.[0]) {
    return (
      <View testID="room-error">
        <Notification message={error} _type="error" clearErr={clearErr} />
      </View>
    );
  }

  const handleRoomDetail = async () => {
    try {
      await getRoomDetail(item?._id);
      navigation.navigate('roomDetail', {id: item?.slug});
    } catch (err) {
      const errMsg = err?.response ? err.response?.data : err?.message;
      showToaster(errMsg);
    }
  };
  return (
    <View style={styles.roomContainer} testID="room">
      {error && (
        <Notification message={error} _type="error" clearErr={clearErr} />
      )}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          indicator={Progress.Circle}
          indicatorProps={{
            color: css.mainColorTrans,
          }}
          imageStyle={styles.image}
          source={images[item.images?.[0]].path || defaultRoom}
          resizeMode="cover"
        />
        <View testID="price" style={styles.priceContainer}>
          <Text style={styles.priceText}>{`$${item?.price}`}</Text>
          <Text style={styles.priceText}>per night</Text>
        </View>
        <View style={styles.featuresContainer}>
          <TouchableOpacity
            style={styles.featuresBtn}
            testID="featureBtn"
            title={`${item?.slug}`}
            onPress={() => handleRoomDetail()}>
            <Text style={styles.featuresText}>Features</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View testID="roomInfo" style={styles.roomInfo}>
        <Text style={styles.roomInfoText}>{item?.name}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  error: state.rooms.error,
});

const mapDispatchToProps = dispatch => ({
  getRoomDetail: payload => dispatch(getRoom(payload)),
  showToaster: payload => dispatch(setError(payload)),
  clearErr: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
