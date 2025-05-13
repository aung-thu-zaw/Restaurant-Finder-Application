import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="justify-center flex-1 px-6 bg-white">
      <View className="mb-6">
        <Text className="text-2xl font-bold text-center text-gray-800">
          Welcome Back!
        </Text>
        <Text className="px-4 mt-2 text-base font-normal text-center text-gray-500">
          Sign in to find amazing restaurants nearby and pick up where you left
          off.
        </Text>
      </View>

      <View className="">
        <TextInput
          placeholder="Email"
          className="px-4 py-3 mb-3 text-base border border-gray-300 rounded-lg"
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          className="px-4 py-3 mb-3 text-base border border-gray-300 rounded-lg"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity className="py-3 bg-orange-500 rounded-lg">
          <Text className="text-base font-semibold text-center text-white">
            Sign In
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="mt-5 font-medium text-center text-gray-500">
        or sign up with
      </Text>

      <View className="flex-row justify-between mt-4">
        <TouchableOpacity className="flex-row items-center justify-center flex-1 p-3 mr-3 border border-gray-300 rounded-lg">
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
            }}
            className="w-5 h-5"
            resizeMode="contain"
          />
          <Text className="ml-2 text-sm text-gray-700">Google</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-center flex-1 p-3 ml-3 border border-gray-300 rounded-lg">
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
            }}
            className="w-5 h-5"
            resizeMode="contain"
          />
          <Text className="ml-2 text-sm text-gray-700">Facebook</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center mt-6">
        <Text className="text-gray-500">Don&#39;t have an account?</Text>
        <Link href="/sign-up" className="ml-1 font-semibold text-orange-500">
          Sign Up
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
