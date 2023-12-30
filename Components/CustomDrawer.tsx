import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDrawerStatus} from '@react-navigation/drawer';
import {useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from './AppText';
const CustomDrawer = ({navigation, state}: any) => {
  const status = useDrawerStatus();

  const menu = [
    {
      name: 'Feedback',
      icon: 'menu',
      destination: 'FeedbackScreen',
      iconType: 'MaterialCommunityIcons',
    },
    {
      name: 'Search Gif',
      icon: 'menu',
      destination: 'SearchScreen',
      iconType: 'MaterialCommunityIcons',
    },
    {
      name: 'Gif List',
      icon: 'menu',
      iconType: 'MaterialCommunityIcons',
      destination: 'GifListScreen',
    },
  ];

  useEffect(() => {
    if (status == 'open') {
      StatusBar.setBackgroundColor('lightblue');
      StatusBar.setBarStyle('dark-content');
    } else {
      StatusBar.setBackgroundColor('#e6e6e6');
      StatusBar.setBarStyle('dark-content');
    }
  }, [status]);

  function getBackgroundColor(route: string) {
    return getActiveRouteState(state.routes, state.index, route)
      ? 'lightblue'
      : 'white';
  }
  return (
    <View style={styles.container}>
      <View style={{flex: 1, marginTop: '45%', paddingHorizontal: 16}}>
        {menu.map(item => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              marginBottom: 8,
              borderRadius: 8,
              paddingHorizontal: 8,
            }}
            onPress={() => navigation.navigate(item.destination)}>
            <MaterialCommunityIcons
              color={'black'}
              name={item.icon}
              size={20}
              style={{marginRight: 8, paddingVertical: 8}}
            />
            <AppText style={{alignSelf: 'center'}}>{item.name}</AppText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const getActiveRouteState = function (routes: any, index: any, name: any) {
  return routes[index].name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    borderTopRightRadius: 50,
  },
});

export default CustomDrawer;
