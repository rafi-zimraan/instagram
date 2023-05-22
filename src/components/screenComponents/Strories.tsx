import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';

const Strories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../../assets/Images/GLogo.png'),
      status: require('../../assets/Images/5.jpg'),
    },
    {
      id: 0,
      name: 'mastercorbuzier',
      image: require('../../assets/Images/mastercorbuzier.jpg'),
      status: require('../../assets/Images/1.jpg'),
    },
    {
      id: 0,
      name: 'jokowidodo',
      image: require('../../assets/Images/jokowidodo.jpg'),
      status: require('../../assets/Images/6.jpg'),
    },
    {
      id: 0,
      name: 'prabowosubianto',
      image: require('../../assets/Images/prabowosubianto.jpg'),
      status: require('../../assets/Images/4.jpg'),
    },
    {
      id: 0,
      name: 'jeromepolin',
      image: require('../../assets/Images/jeromepolin.jpg'),
      status: require('../../assets/Images/6.jpg'),
    },
    {
      id: 0,
      name: 'raffinagita1717',
      image: require('../../assets/Images/raffinagita1717.jpg'),
      status: require('../../assets/Images/7.jpg'),
    },
    {
      id: 0,
      name: 'aniesbaswedan',
      image: require('../../assets/Images/aniesbaswedan.jpg'),
      status: require('../../assets/Images/1.jpg'),
    },
    {
      id: 0,
      name: 'khaby00',
      image: require('../../assets/Images/khaby00.jpg'),
      status: require('../../assets/Images/9.jpg'),
    },
    {
      id: 0,
      name: 'sandiagauno',
      image: require('../../assets/Images/sandiagauno.jpg'),
      status: require('../../assets/Images/10.jpg'),
    },
    {
      id: 0,
      name: 'fatihkarim',
      image: require('../../assets/Images/fatihkarimm.jpg'),
      status: require('../../assets/Images/2.jpg'),
    },
    {
      id: 0,
      name: 'bintangemon',
      image: require('../../assets/Images/bintangemon.jpg'),
      status: require('../../assets/Images/10.jpg'),
    },
    {
      id: 0,
      name: 'bbcnews',
      image: require('../../assets/Images/bbcnews.jpg'),
      status: require('../../assets/Images/2.jpg'),
    },
    {
      id: 0,
      name: 'alafasy',
      image: require('../../assets/Images/alafasyy.jpg'),
      status: require('../../assets/Images/alafasyy.jpg'),
    },
    {
      id: 0,
      name: 'aagym',
      image: require('../../assets/Images/aagymm.jpg'),
      status: require('../../assets/Images/4.jpg'),
    },
    {
      id: 0,
      name: 'ariekuntung',
      image: require('../../assets/Images/ariekuntung.jpg'),
      status: require('../../assets/Images/7.jpg'),
    },
    {
      id: 0,
      name: 'elghifari',
      image: require('../../assets/Images/bangel.jpg'),
      status: require('../../assets/Images/bangel.jpg'),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
                status: data.status,
              })
            }>
            {/* ------------------------------------------------------------------------------------- */}
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Icon
                    name="plus-circle"
                    size={20}
                    color={'#3498db'}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              {/* ------------------------------------------------------------- */}

              <View style={styles.boxImageProfil}>
                <Image source={data.image} style={styles.imageProfile} />
              </View>
              {/* ------------------------------------------------------------- */}
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10,
                  opacity: data.id == 0 ? 1 : 0.5,
                  color: 'black',
                }}>
                {data.name}
              </Text>
            </View>
            {/* -------------------------------------------------------------------------------------- */}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Strories;

const styles = StyleSheet.create({
  boxImageProfil: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageProfile: {
    resizeMode: 'cover',
    width: '90%',
    height: '90%',
    borderRadius: 100,
    backgroundColor: 'orange',
  },
});
