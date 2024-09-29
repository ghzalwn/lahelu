import { Text, View } from 'react-native';
import LaheluFeed from '../components/LaheluFeed';
import { Colors } from '../utils/colors';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black,
      }}
    >
      <LaheluFeed />
    </View>
  );
};

export default HomeScreen;
