import { colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
          <View>
            <Text>Location</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 4,
              }}
            >
              <Ionicons
                name="location-sharp"
                size={20}
                color={colors.primary}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  marginLeft: 6,
                  color: colors.boldText,
                }}
              >
                Bangkok, Thailand
              </Text>
            </View>
          </View>
          <View>
            <Text className="text-xl">Alert</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
