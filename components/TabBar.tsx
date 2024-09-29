import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import FreshScreen from '../screens/FreshScreen';
import TrendingScreen from '../screens/TrendingScreen';
import { Colors } from '../utils/colors';

const Tab = createMaterialTopTabNavigator();

const MyTabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 50,
          backgroundColor: Colors.black, // Set the background color of the tab bar
        },
        tabBarItemStyle: {
          borderTopWidth: 3,
          borderColor: Colors.border,
        },
        tabBarLabelStyle: {
          fontWeight: '700',
          textTransform: 'capitalize',
          fontSize: 15,
        },
        tabBarActiveTintColor: Colors.blue, // Active tab text color
        tabBarInactiveTintColor: 'gray', // Inactive tab text color
        tabBarIndicatorStyle: { backgroundColor: Colors.blue, height: 3 }, // Active tab underline color
        swipeEnabled: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="Fresh"
        component={FreshScreen}
        options={{ title: 'Fresh' }}
      />
      <Tab.Screen
        name="Trending"
        component={TrendingScreen}
        options={{ title: 'Trending' }}
      />
    </Tab.Navigator>
  );
};

export default MyTabbar;
