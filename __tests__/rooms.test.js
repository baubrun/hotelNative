import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import Rooms from '../screens/Rooms';
import {data} from '../testUtils/roomData';
import {Wrapper} from '../testUtils';
import {FlatList} from 'react-native';
import Room from '../components/Room';
import {images, defaultRoom} from '../images';

const eventData = {
  nativeEvent: {
    contentOffset: {
      y: 500,
    },
    contentSize: {
      height: 500,
      width: 100,
    },
    layoutMeasurement: {
      height: 100,
      width: 100,
    },
  },
};
describe('Rooms screen', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render empty-search view', () => {
    const {getByTestId} = render(
      <Wrapper>
        <Rooms />
      </Wrapper>,
    );
    expect(getByTestId('empty-search')).toBeTruthy();
  });

  it('should call flatList rooms with Room rendered', async () => {
    const onEndReached = jest.fn();
    const {getByTestId} = render(
      <Wrapper>
        <FlatList
          testID="rooms"
          data={data}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <Room item={item} images={images} defaultRoom={defaultRoom} />
          )}
          onEndReached={onEndReached}
        />
      </Wrapper>,
    );

    fireEvent.scroll(getByTestId('rooms'), eventData);
    expect(onEndReached).toHaveBeenCalled();
  });
});
