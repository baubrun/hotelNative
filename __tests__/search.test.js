import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import Search from '../screens/searchRooms/Search';

describe('Search Rooms page', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render search rooms text', () => {
    const component = <Search />;
    const {getByTestId} = render(component);
    const searchRoomsText = getByTestId('searchRoomsText');
    expect(searchRoomsText).toBeTruthy();
  });
  it('should render price text', () => {
    const component = <Search />;
    const {getByTestId} = render(component);
    const price = getByTestId('priceText');
    expect(price).toBeTruthy();
  });

  it('should render room type and guest pickers', async () => {
    const component = <Search />;
    const {getByTestId} = render(component);
    const roomSelect = getByTestId('roomTypeSelect');
    const guestSelect = getByTestId('guestSelect');
    expect(roomSelect).toBeTruthy();
    expect(guestSelect).toBeTruthy();
  });

  it('should render breakfast and pets checkboxes', async () => {
    const component = <Search />;
    const {getByTestId} = render(component);
    const petsCheckBox = getByTestId('petsCheckBox');
    const breakfastCheckBox = getByTestId('breakfastCheckBox');
    expect(petsCheckBox).toBeTruthy();
    expect(breakfastCheckBox).toBeTruthy();
  });

  it('should render search button', async () => {
    const component = <Search />;
    const {getByTestId} = render(component);
    const searchBtn = getByTestId('searchBtn');
    expect(searchBtn).toBeTruthy();
  });
});
