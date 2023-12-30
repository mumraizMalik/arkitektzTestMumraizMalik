import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

import {ViewStyle} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function AppTextInput({
  backgroundStyle,
  textStyle,
  onPress,
  icon,
  ...otherProps
}: AppTextInputProps) {
  return (
    <View style={[styles.container, backgroundStyle]}>
      <TextInput
        placeholderTextColor={'gray'}
        style={[styles.textInput, textStyle]}
        {...otherProps}
      />
      {icon && (
        <TouchableOpacity onPress={onPress} style={{padding: 8}}>
          <AntDesign name={icon} size={16} color={'black'} />
        </TouchableOpacity>
      )}
    </View>
  );
}

export interface AppTextInputProps extends TextInputProps {
  onPress?: () => void;
  icon?: string;
  textStyle?: TextStyle;
  backgroundStyle?: ViewStyle;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  textInput: {
    flex: 1,
    padding: 0,
    color: 'black',
    fontSize: 12,
  },
});
