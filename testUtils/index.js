import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {NavigationContainer} from '@react-navigation/native';

export const capacity = ['1', '2', '5', '10'];
export const roomTypes = ['single', 'double', 'familyexport '];
/**
 * wrap Provider and NavigationContainer around components
 * @param {JSX.Element} children
 * @returns JSX.Element
 */
export const Wrapper = ({children}) => (
  <Provider store={store}>
    <NavigationContainer>{children}</NavigationContainer>
  </Provider>
);
