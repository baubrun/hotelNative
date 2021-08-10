import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/Home';
import RoomsScreen from './screens/Rooms';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';
import Notification from './components/Notification';

const App = () => {
  const Tab = createMaterialBottomTabNavigator();
  const iconSize = 26;
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        inactiveColor="#ccc">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="home" color={color} size={iconSize} />
            ),
          }}
        />
        <Tab.Screen
          name="Rooms"
          component={RoomsScreen}
          options={{
            tabBarLabel: 'Rooms',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="hotel" color={color} size={iconSize} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* <Notification /> */}
    </NavigationContainer>
  );
};

export default App;
