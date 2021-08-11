import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, fireEvent, cleanup} from '@testing-library/react-native';

import App from '../App';

afterEach(cleanup);

describe('Testing react navigation', () => {
  test('page contains hero', async () => {
    const component = <App />;

    const {findByText, findAllByText} = render(component);

    // const hero = await findAllByText(/rooms/i);
    const home = await findByText();

    // expect(hero).toBeTruthy();
    expect(home).toBeTruthy();
  });

  // test('clicking on one item takes you to the details screen', async () => {
  //   const component = <App />;

  //   const {findByText} = render(component);
  //   const toClick = await findByText('Item number 5');

  //   fireEvent(toClick, 'press');
  //   const newHeader = await findByText('Showing details for 5');
  //   const newBody = await findByText('the number you have chosen is 5');

  //   expect(newHeader).toBeTruthy();
  //   expect(newBody).toBeTruthy();
  // });
});
