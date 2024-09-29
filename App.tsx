import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icons from Expo
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabbar from './components/TabBar';
import { Colors } from './utils/colors';

const Stack = createNativeStackNavigator();

// Stack Navigator that includes the Tab Navigator
function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.black,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Tabs"
        component={MyTabbar}
        options={{
          title: 'LAHELU', // Header title above tabs
          headerTitle: () => (
            <View>
              <Image
                source={require('./assets/logo-header.png')}
                style={{ width: 90, height: 40 }}
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: Colors.black, // Background color of the header
          },
        }}
      />
    </Stack.Navigator>
  );
}

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
