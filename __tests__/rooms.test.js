import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import Rooms from '../screens/Rooms';

describe('Rooms page', () => {
  afterEach(() => {
    cleanup();
  });

  // it('should render rooms list', () => {
  //     const component = < Rooms item={}/>;
  //     const {
  //         getByTestId
  //     } = render(component);
  //     const room = getByTestId('room');
  //     expect(room).toBeTruthy();
  // });
});
