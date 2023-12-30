import React, {memo} from 'react';
import {View} from 'react-native';

import AppText from '../Components/AppText';
import ImageComponent from '../Components/ImageLoader';

const RenderItem = memo(({item}) => {
  return (
    <View
      key={item.id}
      style={{
        flexDirection: 'row',
        marginTop: 8,
        backgroundColor: 'pink',
      }}>
      <ImageComponent image={item?.images.downsized.url} />
      <View style={{flex: 1, paddingHorizontal: 8}}>
        <AppText numberOfLines={3}>{item?.title}</AppText>
      </View>
    </View>
  );
});
export default RenderItem;
