import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

const AppText = ({children, style, ...otherProps}: appText) => {
  return (
    <>
      <Text style={[styles.text, style]} {...otherProps}>
        {children}
      </Text>
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'black',
  },
});

type appText = {
  children: ReactNode;
  style?: TextStyle;
};
export default AppText;
