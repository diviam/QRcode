import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import HomePage from './src/screens/HomePage';
import MainPage from './src/screens/MainPage';
// import QRScanner from './screens/QRScanner';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
        {/* <Stack.Screen name="QRScanner" component={QRScanner} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
