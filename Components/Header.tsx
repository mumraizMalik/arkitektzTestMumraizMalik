import React from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from './AppText';
const Header = ({
  title,
  style,
  iconName = 'menu',
  iconSize = 30,
  onPress,
}: header) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={'black'}
        />
      </TouchableOpacity>

      <AppText style={{marginLeft: 32}}>{title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;

type header = {
  title: string;
  style?: ViewStyle;
  iconName?: string;
  iconSize?: number;
  onPress?: () => void;
};
