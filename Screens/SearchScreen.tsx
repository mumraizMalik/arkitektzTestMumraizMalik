import React, {memo, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import Screen from '../Components/Screen';
import Header from '../Components/Header';
import AppText from '../Components/AppText';
import ImageComponent from '../Components/ImageLoader';
import {searchGifData} from '../services/Api';
import RenderItem from '../Components/GifItem';
import AppTextInput from '../Components/AppTextInput';
import {displayMsg} from '../services/utility';
const SearchScreen = ({navigation}) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [listFooterLoading, setlistFooterLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const currentOffset = useRef(0);

  const getImagesList = async (offset: number) => {
    console.log({offset: offset, search: searchText});
    const response = await searchGifData(searchText, offset).catch(e => {
      console.log('searchGifData', e);
      displayMsg();
    });
    if (response.data?.meta?.status == 200) {
      const newitems: [] = response.data.data;
      if (offset == 0) setList(response?.data?.data);
      else {
        setList([...list, ...newitems]);
      }
      setLoading(false);
    } else {
      displayMsg(response.data?.meta?.msg);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (currentOffset.current > 0) setlistFooterLoading(true);
    else setlistFooterLoading(false);
  }, [list]);
  const loadMoreItem = () => {
    // As according to documentation maximum offset is 3245
    if (currentOffset.current < 3245) {
      currentOffset.current = currentOffset.current + 15;
      getImagesList(currentOffset.current);
    } else setlistFooterLoading(false);
  };

  const renderList = ({item}) => {
    return <RenderItem item={item} />;
  };
  const listFooterLoader = () => {
    return (
      <>
        {listFooterLoading && (
          <View style={{marginVertical: 8}}>
            <ActivityIndicator size={25} color={'black'} />
          </View>
        )}
      </>
    );
  };
  const handelSearch = () => {
    setLoading(true);
    currentOffset.current = 0;
    console.log('currentOffset.curren', currentOffset.current);
    getImagesList(0);
  };
  return (
    <Screen>
      <Header onPress={navigation.toggleDrawer} title={'Images List'} />
      <AppText style={{marginTop: 32}}>Search</AppText>
      <AppTextInput
        icon="search1"
        onPress={handelSearch}
        onChangeText={setSearchText}
      />
      <FlatList
        data={list}
        renderItem={renderList}
        keyExtractor={item => item?.id}
        ListFooterComponent={listFooterLoader}
        showsVerticalScrollIndicator={false}
        onRefresh={() => {
          setLoading(true);
          setList([]);
          currentOffset.current = 0;
          getImagesList(0);
        }}
        refreshing={loading}
        onEndReachedThreshold={0}
        onEndReached={loadMoreItem}
        disableIntervalMomentum={true}
      />
    </Screen>
  );
};

export default SearchScreen;
