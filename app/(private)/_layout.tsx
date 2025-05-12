import { colors } from "@/constants/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";

const PrivateLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.white,
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.lightText,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <AntDesign size={18} name="home" color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ color }) => (
              <AntDesign size={18} name="search1" color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            tabBarIcon: ({ color }) => (
              <AntDesign size={18} name="hearto" color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <AntDesign size={18} name="user" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default PrivateLayout;
