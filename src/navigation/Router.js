import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { StoreContext } from '../context/store-context';

import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

const Stack = createNativeStackNavigator();

export default function Router() {
  const { customer } = useContext(StoreContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {customer ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}