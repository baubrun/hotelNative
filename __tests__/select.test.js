import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';
import Select from '../components/Select';
import {roomTypes, guests} from '../data/searchData';

describe('Picker', () => {
  afterEach(() => {
    cleanup();
  });

  it('guest picker should be called', () => {
    const setNumGuestsMock = jest.fn();

    const component = (
      <Select
        styling
        items={guests}
        name="capacitySelect"
        selected=""
        setSelected={setNumGuestsMock}
      />
    );

    const {getByTestId} = render(component);
    const capacitySelect = getByTestId('capacitySelect');
    fireEvent(capacitySelect, 'onValueChange');
    expect(setNumGuestsMock).toHaveBeenCalled();
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
