import React from 'react';
import GifList from './Screens/GifList';
import {SafeAreaView} from 'react-native';
import SearchScreen from './Screens/SearchScreen';
import FlashMessage from 'react-native-flash-message';
import FeedbackScreen from './Screens/FeedbackScreen';
import 'react-native-gesture-handler';
import MainDrawerNavigator from './navigation/MainDrawerNavigator';
function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainDrawerNavigator />
      {/* <FeedbackScreen /> */}
      {/* <GifList /> */}
      {/* <SearchScreen /> */}
      {/* GLOBAL FLASH MESSAGE COMPONENT INSTANCE */}
      <FlashMessage position="top" />
    </SafeAreaView>
  );
}

export default App;
