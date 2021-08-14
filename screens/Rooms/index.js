import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import Room from '../Room';
import {formatData} from '../../utils';
import {css} from '../../css';
import {styles} from './styles';

const renderItem = ({item}) => <Room item={item} />;

const Rooms = props => {
  const {rooms} = props;

  const foundRooms = formatData(rooms.rooms);
  if (rooms.loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={css.mainColor} />
      </View>
    );
  }

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
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  rooms: state.rooms,
});
export default connect(mapStateToProps, null)(Rooms);
