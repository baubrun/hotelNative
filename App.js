import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/Home';
import RoomsScreen from './screens/Rooms';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';
// import Notification from './components/Notification';

const App = () => {
  const Tab = createMaterialBottomTabNavigator();
  const iconSize = 26;
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        inactiveColor="#ccc"
        barStyle={styles.bottomBar}>
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

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
});

export default App;
