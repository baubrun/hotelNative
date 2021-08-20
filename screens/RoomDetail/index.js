import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import Hero from '../../components/Hero';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import {css} from '../../css';
import {clearRoom, setError, clearError} from '../../redux/roomSlice';
import Spinner from '../../components/Spinner';

const RoomDetail = props => {
  const {room, loading, images, defaultRoom} = props;
  const [selectedRoom, setSelectedRoom] = useState({});

  useEffect(() => {
    setSelectedRoom(room);
  }, [room]);

  const moreImages = selectedRoom.images?.slice(1);
  return (
    <ScrollView style={styles.container}>
      {(loading || !selectedRoom?._id) && <Spinner />}
      {selectedRoom?._id && (
        <>
          <View testID="roomHero" style={styles.heroContainer}>
            <View style={styles.image}>
              <Image
                indicator={Progress.Circle}
                indicatorProps={{
                  color: css.mainColorTrans,
                }}
                imageStyle={styles.image}
                source={images[selectedRoom.images[0]]?.path || defaultRoom}
                resizeMode="cover"
              />
            </View>
            <View style={styles.hero}>
              <Hero title={selectedRoom?.slug} />
            </View>
          </View>
          <View style={styles.detailsContainer} testID="detailInfo">
            <View style={styles.detailsInfo}>
              <View>
                <Text style={styles.title}>Details</Text>
              </View>
              <View>
                <Text>{selectedRoom?.description}</Text>
              </View>
            </View>
            <View style={styles.detailsInfo}>
              <View>
                <Text style={styles.title}>Info</Text>
              </View>
              <View>
                <Text
                  style={
                    styles.textRow
                  }>{`Price: $${selectedRoom?.price}`}</Text>
                <Text style={styles.textRow}>
                  Max capacity:
                  {selectedRoom?.capacity > 1
                    ? `\t${selectedRoom?.capacity} people`
                    : `\t${selectedRoom?.capacity} person`}
                </Text>
                <Text style={styles.textRow}>{`${
                  selectedRoom?.pets ? 'Pets' : 'No pets'
                } allowed`}</Text>
              </View>
            </View>
          </View>

          <View style={styles.extrasContainer} testID="extras">
            <View>
              <Text style={styles.title}>Extras</Text>
            </View>
            {selectedRoom?.extras.map((item, idx) => {
              return (
                <View key={idx}>
                  <Text style={styles.textRow}>{`- ${item}`}</Text>
                </View>
              );
            })}
          </View>
        </>
      )}
      <View testID="roomImages">
        <View>
          <Text style={[styles.title, styles.moreImages, styles.textRow]}>
            More Images...
          </Text>
        </View>
        {moreImages?.map(img => {
          return (
            <View key={img} style={styles.image}>
              <Image
                indicator={Progress.Circle}
                indicatorProps={{
                  color: css.mainColorTrans,
                }}
                imageStyle={styles.image}
                source={images[img]?.path}
                resizeMode="cover"
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  room: state.rooms.room,
  loading: state.rooms.loading,
});

const mapDispatchToProps = dispatch => ({
  showToaster: payload => dispatch(setError(payload)),
  clearErr: () => dispatch(clearError()),
  resetRoom: () => dispatch(clearRoom()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomDetail);
