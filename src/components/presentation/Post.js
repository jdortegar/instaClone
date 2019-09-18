import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from '../../config';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      screenWidth: Dimensions.get('window').width,
      liked: false
    };
  }

  likeToogle() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);

    const imageSelection =
      this.props.item % 2 === 0
        ? 'https://lh3.googleusercontent.com/MRDfol9-SA1kTIG8ZyvjLsOYLdbqARw-XdgTRz-Ftmw5N848dA9bbjCI2eGw1KGZqdEmo7omsWCY123-buJoit4_xg'
        : 'https://lh3.googleusercontent.com/AtTxYU3o4gmb-Z-TBj02EKS8AxCZB4voK5fQ7ZFXaxpkn4N8WHyUD_aJ415k_xB4xqN8zIluQXWY3WFUvSi0BvUr_KM';

    const imageUri = imageSelection + '=s' + imageHeight + '-c';

    const heartIconColor = this.state.liked ? 'rgb(252,61,57)' : null;

    return (
      <View style={{ flex: 1, width: 100 + '%' }}>
        <View style={styles.userBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  'https://lh3.googleusercontent.com/hU_kIXwFP2msufRfgDLxfVDG7UeT60K2GYlPY-5qydRdvHy_Ycyr3q5aI56JgGIOpr5YsGB6YHWLh4YvY36-t5E80y0'
              }}
            />
            <Text style={{ marginLeft: 10 }}>David Ortega</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={() => this.likeToogle()}>
          <Image
            style={{ width: this.state.screenWidth, height: 400 }}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <Image
            style={[styles.icon, { height: 40, width: 40, tintColor: heartIconColor }]}
            source={config.images.heartIcon}
          />
          <Image style={[styles.icon, { height: 38, width: 38 }]} source={config.images.bubbleIcon} />
          <Image
            resizeMode="stretch"
            style={[styles.icon, { height: 40, width: 35 }]}
            source={config.images.arrowIcon}
          />
        </View>
        <View style={styles.iconBar}>
          <Image style={[styles.icon, { height: 30, width: 30 }]} source={config.images.heartIcon} />
          <Text>120 likes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + '%',
    height: 50,
    marginTop: 20,
    backgroundColor: 'rgb(250,250,250)',
    borderBottomColor: 'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },

  userBar: {
    width: 100 + '%',
    height: config.styleConstants.rowHeight,
    backgroundColor: 'rgb(255,255,255)',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },

  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + '%',
    borderColor: 'rgb(233,233,233)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginLeft: 5
  }
});

export default Post;
