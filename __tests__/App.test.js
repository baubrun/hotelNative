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

  it('should render home page', () => {
    const component = <App />;

    const {getByText} = render(component);

    const home = getByText(/hostel/i);

    expect(home).toBeTruthy();
  });

  it('should render search rooms page', async () => {
    const component = <App />;

    const {getByText} = render(component);
    const newPage = getByText(/hostel/i);
    fireEvent.press(newPage);

    await waitFor(() => {
      const roomsPage = getByText(/search rooms/i);
      expect(roomsPage).toBeTruthy();
    });
  });
});
