import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, FlatList, Text} from 'react-native';
import Room from '../Room';
import {getRooms} from '../../redux/roomSlice';
import {formatData} from '../../utils';

const renderItem = ({item}) => <Room item={item} />;

const Rooms = props => {
  const {getRoomsList, rooms} = props;
  // useEffect(() => {
  //   getRoomsList();
  // }, [getRoomsList]);
  const foundRooms = formatData(rooms.rooms);

  if (foundRooms?.length < 1) {
    return (
      <View testID="empty-search">
        <Text> No matches found. </Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={foundRooms}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  rooms: state.rooms,
});

const mapDispatchToProps = dispatch => ({
  getRoomsList: () => dispatch(getRooms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
