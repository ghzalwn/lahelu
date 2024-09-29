import React, { useEffect, useState } from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { IFeed } from '../interface/feed';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Colors } from '../utils/colors';

import VideoPlayer from './VideoPlayer';
import { generateMockData } from '../data/listFeed';
import ItemFeed from './ItemFeed';

const LaheluFeed = () => {
  const [dataListFeed, setDataListFeed] = useState<IFeed[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 10; // Number of items to load per request

  // Function to load more data
  const loadMoreData = async () => {
    if (loading) return; // Prevent multiple requests
    setLoading(true);
    const newData = generateMockData(page, limit);
    setDataListFeed((prevData) => [...prevData, ...newData]);
    setPage((prevPage) => prevPage + 1);
    setLoading(false);
  };

  // Load initial data on mount
  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <View style={{ width: '100%' }}>
      <FlatList
        data={dataListFeed}
        renderItem={({ item }) => <ItemFeed item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false} // Hides vertical scroll indicator
      />
    </View>
  );
};
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

export default LaheluFeed;
