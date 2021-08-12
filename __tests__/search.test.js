import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import Search from '../screens/searchRooms/Search';

describe('Search Rooms page', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render price text', () => {
    const component = <Search />;
    const {getByText} = render(component);
    const price = getByText(/price: \$299/i);
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
});
