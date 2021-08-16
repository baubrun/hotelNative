import React, {useRef} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/SearchRooms';
import RoomsScreen from './screens/Rooms';
import RoomDetailScreen from './screens/RoomDetail';
import {css} from './css';
import {images, defaultRoom} from './images';

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
            name="roomDetail"
            options={{
              title: '',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: css.mainColorTrans,
              },
            }}>
            {props => (
              <RoomDetailScreen
                {...props}
                images={images}
                defaultRoom={defaultRoom}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="rooms"
            options={{
              title: 'Rooms',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: css.mainColorTrans,
              },
            }}>
            {props => (
              <RoomsScreen
                {...props}
                images={images}
                defaultRoom={defaultRoom}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
