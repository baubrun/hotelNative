import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';
import Select from '../components/Select';
import {Wrapper, capacity, roomTypes} from '../testUtils';

describe('Picker', () => {
  afterEach(() => {
    cleanup();
  });

  it('guest picker should be called', () => {
    const setCapacityMock = jest.fn();

    const component = (
      <Wrapper>
        <Select
          styling
          items={capacity}
          name="capacitySelect"
          selected=""
          setSelected={setCapacityMock}
        />
      </Wrapper>
    );

    const {getByTestId} = render(component);
    const capacitySelect = getByTestId('capacitySelect');
    fireEvent(capacitySelect, 'onValueChange');
    expect(setCapacityMock).toHaveBeenCalled();
  });

  it('room type picker should be called', () => {
    const setRoomsTypeMock = jest.fn();

    const component = (
      <Select
        styling
        items={roomTypes}
        name="roomTypeSelect"
        selected=""
        setSelected={setRoomsTypeMock}
      />
    );

    const {getByTestId} = render(component);
    const roomTypeSelect = getByTestId('roomTypeSelect');
    fireEvent(roomTypeSelect, 'onValueChange');
    expect(setRoomsTypeMock).toHaveBeenCalled();
  });

  it('show throw error when setSelected prop missing ', () => {
    const err = 'props.setSelected is not a function';
    try {
      const component = (
        <Select styling items={roomTypes} name="roomTypeSelect" selected="" />
      );
      const {getByTestId} = render(component);
      const roomTypeSelect = getByTestId('roomTypeSelect');
      fireEvent(roomTypeSelect, 'onValueChange');
    } catch (error) {
      expect(error.message).toEqual(err);
    }
  });
});
