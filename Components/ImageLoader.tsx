import React, {memo, useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';

const ImageLoader = ({image}) => {
  const [loader, serLoader] = useState(false);
  return (
    <View style={{backgroundColor: 'black'}}>
      <Image
        style={{height: 80, width: 80}}
        source={{uri: image}}
        onLoadStart={() => serLoader(true)}
        onLoadEnd={() => serLoader(false)}
      />
      {loader && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size={12} color={'white'} />
        </View>
      )}
    </View>
  );
};

const ImageComponent = memo(ImageLoader);
export default ImageComponent;
