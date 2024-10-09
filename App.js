import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import Forget_Password from './screens/Forget_Password';
import Onboard from './screens/Onboard';
import Verify_Forgot_Password from './screens/Verify_Forget_Password';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarIcon: () => {
            <MaterialCommunityIcons name='home' size={20}/>
          }
        }}
      >
        <Stack.Screen 
          name='Onboarding'
          component={Onboard}
          options={{
            headerShown: false,
            
          }}
        />
        <Stack.Screen 
          name='Login'
          component={Login}
          options={{
            // headerShown: false,
          }}
        />
        <Stack.Screen 
          name='Register'
          component={Register}
          options={{
            // headerShown: false,
          }}
        />
        <Stack.Screen 
          name='Forget-Password'
          component={Forget_Password}
          options={{
            // headerShown: false,
          }}
        />
        <Stack.Screen 
          name='Verify-Forgot-Password'
          component={Verify_Forgot_Password}
          options={{
            // headerShown: false,
          }}
        />
      </Stack.Navigator>
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
