import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../Components/CustomDrawer';
import FeedbackScreen from '../Screens/FeedbackScreen';
import SearchScreen from '../Screens/SearchScreen';
import GifList from '../Screens/GifList';
const Drawer = createDrawerNavigator();
import {NavigationContainer} from '@react-navigation/native';
const MainDrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        defaultScreenOptions={{
          headerShown: false,
          drawerStatusBarAnimation: 'slide',
        }}
        screenOptions={{
          unmountOnBlur: true,
          headerShown: false,
          drawerType: 'front',
          drawerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name={'FeedbackScreen'}
          component={FeedbackScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name={'SearchScreen'}
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name={'GifListScreen'}
          component={GifList}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainDrawerNavigator;
