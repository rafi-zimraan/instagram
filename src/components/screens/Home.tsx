import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Strories from '../screenComponents/Strories';
import Post from '../screenComponents/Post';

const Home = () => {
  return (
    <View style={styles.mainBox}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}
        animated={true}
      />
      {/* --------------------------------------------------------------------------------------------- */}
      <View style={styles.navTopHome}>
        {/* ------------------------------- */}
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Text style={styles.InstagramFont}> Instagram el</Text>
          <Icon style={{}} name="chevron-down" size={30} color={'black'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginRight: 25,
          }}>
          <Icon
            name="heart-outline"
            size={30}
            color={'black'}
            style={{marginHorizontal: 20}}
          />
          <Icon name="chat-outline" size={30} color={'black'} />
        </View>
        {/* ------------------------------- */}
      </View>
      {/* ---------------------------------------------------------------------------------------------- */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <Strories />
        <Post />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainBox: {
    height: '100%',
    backgroundColor: 'white',
  },

  navTopHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 50,
    alignItems: 'center',
  },

  InstagramFont: {
    fontFamily: 'Instagram',

    color: 'black',
    fontSize: 30,
    paddingRight: 5,
  },
});
