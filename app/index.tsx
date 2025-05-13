import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <>
      <SafeAreaView className="items-center justify-center flex-1">
        <Text className="mb-5 text-xl">There is a home page</Text>

        <Link
          href="/sign-in"
          className="p-3 font-bold text-white bg-orange-500 rounded-md"
        >
          Go To Sign In
        </Link>

        <Link
          href="/sign-up"
          className="p-3 font-bold text-white bg-orange-500 rounded-md"
        >
          Go To Sign Up
        </Link>

        <Link
          href="/home"
          className="p-3 font-bold text-white bg-orange-500 rounded-md"
        >
          Go To Home page
        </Link>
      </SafeAreaView>
    </>
  );
};

export default Home;
