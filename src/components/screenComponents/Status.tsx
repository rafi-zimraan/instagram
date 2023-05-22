import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useNavigation} from '@react-navigation/native';

const Status = ({route, navigation}) => {
  navigation = useNavigation();

  const {name} = route.params;
  const {image} = route.params;
  const {status} = route.params;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.mainBox}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <Image
        source={status}
        style={{
          width: '100%',
          height: 730,
          position: 'absolute',
          top: 20,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
        }}
      />
      {/* -------------------------------------------------------------- */}
      <View style={styles.lineStatus}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
            borderColor: 'transparent',
            borderRadius: 20,
          }}></Animated.View>
      </View>
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}
      <View style={styles.containerStatusBox}>
        <View style={styles.statusImageBox}>
          <Image source={image} style={styles.statusImage} />
        </View>
        {/* ------------------------------------------------------------- */}
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{color: 'white', fontSize: 15, paddingHorizontal: 10}}>
              {name}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity style={{marginRight: -15}}>
              <Icon name="dots-vertical" size={25} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
        {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}
      </View>
      {/* --------------------------------------------------------------- */}
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Kirim pesan"
          placeholderTextColor={'white'}
          style={styles.textInput}
        />
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <TouchableOpacity>
            <Icon
              name={'heart-outline'}
              size={30}
              color={'white'}
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="send-outline" size={30} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: 'black',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  lineStatus: {
    height: 3,
    width: '93%',
    borderWidth: 0.5,
    backgroundColor: 'silver',
    position: 'absolute',
    top: 28,
    borderColor: 'transparent',
    borderRadius: 25,
  },
  onLineStatus: {},
  containerStatusBox: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 22,
    left: 0,
    width: '90%',
  },
  statusImageBox: {
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusImage: {
    borderRadius: 100,
    backgroundColor: 'orange',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  textInputContainer: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    width: '75%',
    height: 47,
    borderColor: 'white',
    borderWidth: 0.5,
    paddingLeft: 20,
    borderRadius: 25,
    marginRight: 10,
    color: 'white',
  },
});
