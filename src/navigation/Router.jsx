import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreens from '../screens/SignUpScreens';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    
    <Stack.Navigator
    initialRouteName='Login'
    screenOptions={{
        headerShown:false
    }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreens} />
     
    </Stack.Navigator>
  )
}

export default Router