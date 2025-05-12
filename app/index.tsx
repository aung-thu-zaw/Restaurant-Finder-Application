import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <>
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="mb-5 text-xl">There is a home page</Text>

        <Link
          href="/home"
          className="text-white bg-orange-500 font-bold p-3 rounded-md"
        >
          Go To Home page
        </Link>
      </SafeAreaView>
    </>
  );
};

export default Home;
