import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render home screen', () => {
    const component = <App />;

    const {getByText} = render(component);

    const home = getByText(/hostel/i);

    expect(home).toBeTruthy();
  });

  it('should render search rooms screen', async () => {
    const component = <App />;

    const {getByText} = render(component);
    const newScreen = getByText(/hostel/i);
    fireEvent.press(newScreen);

    await waitFor(() => {
      const roomsScreen = getByText(/search rooms/i);
      expect(roomsScreen).toBeTruthy();
    });
  });
});
