import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react-native';
import {CommonActions, NavigationAction} from '@react-navigation/native';
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
});
