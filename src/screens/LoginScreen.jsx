import {useNavigation} from '@react-navigation/native';
import {
  View,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Animated, {FadeInUp, FadeInDown} from 'react-native-reanimated';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-white h-full w-full">
      <StatusBar barStyle="light-content" />
      <Image
        className="h-full w-full absolute"
        source={require('../../assets/images/background.png')}
      />
  
      {/* lights */}
      <View className="absolute flex-row justify-around w-full">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require('../../assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require('../../assets/images/light.png')}
        />
      </View>

      {/* title § form alanı */}
      <View className="h-full flex w-full justify-around pt-40 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.delay(200).duration(1000).springify()}
            className="text-white font-bold tracking-wider text-4xl">
            Login
          </Animated.Text>
        </View>
        {/* form alanı */}
        <View className="flex item-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className=" w-full p-5 bg-black/5 rounded-2xl">
            <TextInput placeholder="E-mail" placeholderTextColor={'gray'} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className=" w-full p-5 bg-black/5 rounded-2xl">
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="w-full">
            <TouchableOpacity className="w-full p-3 mb-3 bg-sky-400 rounded-xl ">
              <Text className="text-2xl font-bold text-center text-white">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(800).duration(1000).springify()}
            className="flex-row justify-center">
            <Text>Don't have an account?</Text>
            <TouchableOpacity
            onPress={()=> navigation.push("SignUp")}>
              <Text className="text-sky-600">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
