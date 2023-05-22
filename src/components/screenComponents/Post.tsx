import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Post = () => {
  const postInfo = [
    {
      postTitle: 'el.g.11',
      postPersonImage: require('../../assets/Images/GLogo.png'),
      profilImage: require('../../assets/Images/GLogo.png'),
      postImage: require('../../assets/Images/igv.png'),
      likes: 10878,
      isLiked: false,
      isClicked: false,
      postContent: 'Increase Daily Productivity In Ramdhan ! ',
      timePost: '30 menit yang lalu',
      comment: 'Lihat semua 875 komentar',
    },
    {
      postTitle: 'jokowi',
      postPersonImage: require('../../assets/Images/jokowidodo.jpg'),
      profilImage: require('../../assets/Images/GLogo.png'),
      postImage: require('../../assets/Images/jokowidodo.jpg'),
      likes: 900634,
      isLiked: false,
      isClicked: false,
      postContent: 'ini adalah anak yang akan merubah masa depan!',
      timePost: '1 minggu yang lalu',
      comment: 'Lihat semua 100.433 komentar',
    },
    {
      postTitle: 'raffinagita1717',
      postPersonImage: require('../../assets/Images/raffinagita1717.jpg'),
      profilImage: require('../../assets/Images/GLogo.png'),
      postImage: require('../../assets/Images/7.jpg'),
      likes: 45753,
      isLiked: false,
      isClicked: false,
      postContent: 'Ketemu anak jaksel nieh guys!',
      timePost: '1 minggu yang lalu',
      comment: 'Lihat semua 283.643 komentar',
    },
    {
      postTitle: 'prabowo',
      postPersonImage: require('../../assets/Images/prabowosubianto.jpg'),
      profilImage: require('../../assets/Images/GLogo.png'),
      postImage: require('../../assets/Images/prabowoPost.jpg'),
      likes: 70053,
      isLiked: false,
      isClicked: false,
      postContent: 'Baris berbaris adalah latihan dasar untuk lebih disiplin!',
      timePost: '3 minggu yang lalu',
      comment: 'Lihat semua 100.433 komentar',
    },
    {
      postTitle: 'aagym',
      postPersonImage: require('../../assets/Images/aagymm.jpg'),
      profilImage: require('../../assets/Images/GLogo.png'),
      postImage: require('../../assets/Images/4.jpg'),
      likes: 70053,
      isLiked: false,
      isClicked: false,
      postContent:
        'Saya sedang bersama para santri Daarut Tauhid jakarta yang Luar biasa !',
      timePost: '3 minggu yang lalu',
      comment: 'Lihat semua 100.433 komentar',
    },
    {
      postTitle: 'mastercorbuzier',
      postPersonImage: require('../../assets/Images/mastercorbuzier.jpg'),
      profilImage: require('../../assets/Images/GLogo.png'),
      postImage: require('../../assets/Images/deddyPost.jpg'),
      likes: 99053,
      isLiked: false,
      isClicked: false,
      postContent: 'Nantikan kehadirannya segera !',
      timePost: '3 minggu yang lalu',
      comment: 'Lihat semua 840.033 komentar',
    },
    {
      postTitle: 'aniesbaswedan',
      postPersonImage: require('../../assets/Images/aniesbaswedan.jpg'),
      profilImage: require('../../assets/Images/GLogo.png'),
      postImage: require('../../assets/Images/anisPost.jpg'),
      likes: 2890953,
      isLiked: false,
      isClicked: false,
      postContent: '2024 akan menjadi tahun kemenangan!',
      timePost: '1 bulan yang lalu',
      comment: 'Lihat semua 1.033.769 komentar',
    },
    {
      postTitle: 'khaby00',
      postPersonImage: require('../../assets/Images/khaby00.jpg'),
      profilImage: require('../../assets/Images/GLogo.png'),
      postImage: require('../../assets/Images/khobyPost.jpg'),
      likes: 99053,
      isLiked: false,
      isClicked: false,
      postContent: 'Are you raedy ?',
      timePost: '3 minggu yang lalu',
      comment: 'Lihat semua 840.033 komentar',
    },
    {
      postTitle: 'jeromepolin',
      postPersonImage: require('../../assets/Images/jeromepolin.jpg'),
      profilImage: require('../../assets/Images/GLogo.png'),
      postImage: require('../../assets/Images/jeromePost.jpg'),
      likes: 96853,
      isLiked: false,
      isClicked: false,
      postContent: 'Ayo Tahun ini kita liburan guys!',
      timePost: '3 minggu yang lalu',
      comment: 'Lihat semua 840.033 komentar',
    },
    {
      postTitle: 'bbcnews',
      postPersonImage: require('../../assets/Images/bbcnews.jpg'),
      profilImage: require('../../assets/Images/GLogo.png'),
      postImage: require('../../assets/Images/bbcPost.jpg'),
      likes: 65853,
      isLiked: false,
      isClicked: false,
      postContent: 'TikTok to be banned on UK government phones!',
      timePost: '3 minggu yang lalu',
      comment: 'Lihat semua 840.033 komentar',
    },
    {
      postTitle: 'alafasy',
      postPersonImage: require('../../assets/Images/alafasyy.jpg'),
      profilImage: require('../../assets/Images/GLogo.png'),
      postImage: require('../../assets/Images/alafasyPost.jpg'),
      likes: 97953,
      isLiked: false,
      isClicked: false,
      postContent: 'أحلى سهرة مع القارئ الشيخ ناصر القطامي ',
      timePost: '3 minggu yang lalu',
      comment: 'Lihat semua 840.033 komentar',
    },
    {
      postTitle: 'fatihkarim',
      postPersonImage: require('../../assets/Images/fatihkarimm.jpg'),
      profilImage: require('../../assets/Images/GLogo.png'),
      postImage: require('../../assets/Images/fatihkarimPostt.png'),
      likes: 98053,
      isLiked: false,
      isClicked: false,
      postContent: 'Luar biasa Alhamdulliiah saya bisa ketemu!',
      timePost: '3 minggu yang lalu',
      comment: 'Lihat semua 840.033 komentar',
    },
    {
      postTitle: 'fatihkarim',
      postPersonImage: require('../../assets/Images/fatihkarimm.jpg'),
      profilImage: require('../../assets/Images/GLogo.png'),
      postImage: require('../../assets/Images/fatihkarimPost2.jpg'),
      likes: 79679,
      isLiked: false,
      isClicked: false,
      postContent:
        'Founder startup bidang Design cerita banyak     ke saya termasuk tentang Pondok IT , Menakjubkan!',
      timePost: '3 minggu yang lalu',
      comment: 'Lihat semua 840.033 komentar',
    },
  ];

  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setlike] = useState(data.isLiked);
        const [click, setclick] = useState(data.isClicked);
        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 10,
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity style={styles.imageProfil}>
                  <Image
                    source={data.postPersonImage}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 100,
                      resizeMode: 'cover',
                      backgroundColor: 'white',
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    paddingLeft: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'black',
                      marginLeft: 5,
                    }}>
                    {data.postTitle}{' '}
                  </Text>
                </View>
                <MaterialIcons name="verified" size={15} color={'#3498db'} />
              </View>
              <TouchableOpacity>
                <Icon name="dots-vertical" size={20} color={'black'} />
              </TouchableOpacity>
            </View>
            <View style={{position: 'relative'}}>
              <Image
                source={data.postImage}
                style={{
                  width: 420,
                  height: 420,
                  position: 'relative',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                justifyContent: 'space-between',
                backgroundColor: 'white',
              }}>
              <TouchableOpacity onPress={() => setlike(!like)}>
                <Icon
                  name={like ? 'cards-heart' : 'heart-outline'}
                  size={28}
                  style={{paddingRight: 10, color: like ? 'red' : 'black'}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <IonIcons
                  name="chatbubble-outline"
                  size={25}
                  color={'black'}
                  style={{paddingRight: 10}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather
                  name="send"
                  size={25}
                  color={'black'}
                  style={{paddingRight: 10}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setclick(!click)}>
                <IonIcons
                  name={click ? 'bookmark' : 'bookmark-outline'}
                  size={25}
                  color={'black'}
                  style={{marginLeft: 250}}
                />
              </TouchableOpacity>
            </View>
            <View style={{paddingLeft: 15}}>
              <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
                {like ? data.likes + 1 : data.likes} suka
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                }}>
                <Text style={{fontWeight: 'bold'}}>{data.postTitle} </Text>
                {data.postContent}
              </Text>
              {/* ---------------------------- */}
              <View style={{marginTop: 5}}>
                <Text>{data.comment}</Text>
              </View>
              {/* ------------------------------- */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.profilImage}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 100,
                  }}
                />
                <TextInput
                  placeholder="Tambahkan komentar...."
                  style={{paddingLeft: 10}}
                />
              </View>
              <Text style={{fontSize: 10}}>
                {data.timePost}
                <Text style={{fontWeight: '500', color: 'black'}}>
                  {' '}
                  Lihat terjemahan
                </Text>
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  imageProfil: {
    width: 48,
    height: 48,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
