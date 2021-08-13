import React, {useRef} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/SearchRooms/Search';
import RoomsScreen from './screens/Rooms';
import RoomScreen from './screens/Room';
import {css} from './css';

const App = () => {
  const Stack = createStackNavigator();
  const navigationRef = useRef();
  useReduxDevToolsExtension(navigationRef);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="search"
            component={SearchScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="rooms"
            component={RoomsScreen}
            options={{
              title: 'Rooms',
              headerStyle: {
                backgroundColor: css.mainColorTrans,
              },
            }}
          />
          <Stack.Screen
            name="room"
            component={RoomScreen}
            options={{
              title: 'Room',
              headerTintColor: css.whiteColor,
              headerStyle: {
                backgroundColor: css.blackColorTrans,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
