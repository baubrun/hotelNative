import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/searchRooms/Search';
// import Notification from './components/Notification';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
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
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
