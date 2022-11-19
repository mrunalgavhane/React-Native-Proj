import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./screens/Login";
import SignUp from "./screens/Signup";
import Home from "./screens/Home";
import Transfer from "./screens/Transfer";
import Deposit from "./screens/Deposit";
import Withdraw from "./screens/Withdraw";
import Statement from "./screens/Statement";

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
      <Stack.Screen name='Login' component={Login}></Stack.Screen>
      <Stack.Screen name='Signup' component={SignUp}></Stack.Screen>
      <Stack.Screen name='Home' component={Home}></Stack.Screen>
      <Stack.Screen name='Deposit' component={Deposit}></Stack.Screen>
      <Stack.Screen name='Withdraw' component={Withdraw}></Stack.Screen>
      <Stack.Screen name='Transfer' component={Transfer}></Stack.Screen>
      <Stack.Screen name='Statement' component={Statement}></Stack.Screen>
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