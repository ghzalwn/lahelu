import Reac from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { IFeed } from '../interface/feed';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Colors } from '../utils/colors';

import VideoPlayer from './VideoPlayer';

const ItemFeed = ({ item }: { item: IFeed }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.timestamp}>· {item.hour}</Text>
        </View>
      </View>
      <MaterialIcons name="more-horiz" size={24} color={Colors.white} />
    </View>

    <Text style={styles.caption}>{item.caption}</Text>

    <VideoPlayer />

    <View style={styles.actionContainer}>
      <TouchableOpacity style={styles.sawerButton}>
        <MaterialIcons name="paid" size={16} color="white" />
        <Text style={styles.buttonText}>Sawer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.hashtagButton}>
        <Text style={styles.buttonText}>#</Text>
        <Text style={styles.buttonText}>Sawer</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.footer}>
      <View style={styles.voteContainer}>
        <View style={styles.voteButton}>
          <FontAwesome name="chevron-up" size={20} color="white" />
          <Text style={styles.voteCount}>25</Text>
        </View>
        <View style={styles.voteButton}>
          <MaterialIcons name="arrow-downward" size={20} color="white" />
        </View>
        <View style={styles.commentButton}>
          <MaterialIcons name="chat" size={20} color="white" />
          <Text style={styles.voteCount}>2</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.shareButton}>
        <FontAwesome name="share" size={20} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);

export default ItemFeed;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: Colors.black,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  usernameContainer: {
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.white,
  },
  timestamp: {
    fontSize: 13,
    color: Colors.silver,
  },
  caption: {
    padding: 10,
    fontSize: 18,
    fontWeight: '700',
    color: Colors.white,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  sawerButton: {
    flexDirection: 'row',
    backgroundColor: Colors.orange,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  hashtagButton: {
    flexDirection: 'row',
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  voteContainer: {
    flexDirection: 'row',
    marginLeft: 5,
    alignItems: 'center',
  },
  voteButton: {
    flexDirection: 'row',
    borderWidth: 0.8,
    borderColor: Colors.white,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  voteCount: {
    color: 'white',
    fontWeight: '700',
    marginLeft: 5,
  },
  commentButton: {
    flexDirection: 'row',
    borderWidth: 0.8,
    borderColor: Colors.white,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  shareButton: {
    marginHorizontal: 15,
    borderWidth: 0.8,
    borderColor: Colors.white,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
