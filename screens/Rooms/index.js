import React from 'react';
import {connect} from 'react-redux';
import {View, FlatList, Text, ImageBackground} from 'react-native';
import Room from '../Room';
import {formatData} from '../../utils';
import {styles} from './styles';
import frontDeskImg from '../../images/front-desk.jpg';
import Spinner from '../../components/Spinner';

const Rooms = props => {
  const {rooms, images, defaultRoom} = props;

  const foundRooms = formatData(rooms?.rooms);

  if (rooms?.loading) {
    return <Spinner />;
  }

  if (foundRooms?.length < 1) {
    return (
      <View style={styles.container} testID="empty-search">
        <ImageBackground
          style={styles.image}
          source={frontDeskImg}
          resizeMode="cover">
          <View style={styles.emptySearch}>
            <Text style={styles.emptySearchText}> No matches found </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        testID="rooms"
        data={foundRooms}
        renderItem={({item}) => (
          <Room item={item} images={images} defaultRoom={defaultRoom} />
        )}
        keyExtractor={item => item?._id}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  rooms: state.rooms,
});
export default connect(mapStateToProps, null)(Rooms);
