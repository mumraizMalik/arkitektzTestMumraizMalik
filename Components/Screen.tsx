import React from 'react';
import {StyleSheet, View} from 'react-native';

const Screen = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
});

export default Screen;
