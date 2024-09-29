import { Text, View } from 'react-native';
import { Colors } from '../utils/colors';
import LaheluFeed from '../components/LaheluFeed';

const FreshScreen = () => {
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

export default FreshScreen;
