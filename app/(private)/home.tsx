import GlobalFilterSearchBar from "@/components/GlobalFilterSearchBar";
import RestaurantCard from "@/components/RestaurantCard";
import RestaurantCategoryCard from "@/components/RestaurantCategoryCard";
import { colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const restaurantCategories = [
    {
      id: "0",
      name: "All Places",
      image: "https://cdn-icons-png.flaticon.com/512/7845/7845744.png",
      active: true,
    },
    {
      id: "1",
      name: "Bakery",
      image: "https://cdn-icons-png.flaticon.com/128/3081/3081967.png",
      active: false,
    },
    {
      id: "2",
      name: "Seafood",
      image: "https://cdn-icons-png.flaticon.com/512/7780/7780156.png",
      active: false,
    },
    {
      id: "3",
      name: "Fast Food",
      image: "https://cdn-icons-png.flaticon.com/512/9417/9417083.png",
      active: false,
    },
    {
      id: "4",
      name: "BBQ",
      image: "https://cdn-icons-png.flaticon.com/512/9229/9229279.png",
      active: false,
    },
    {
      id: "5",
      name: "Sushi",
      image: "https://cdn-icons-png.flaticon.com/512/2252/2252075.png",
      active: false,
    },
    {
      id: "6",
      name: "Cafe",
      image: "https://cdn-icons-png.flaticon.com/512/6602/6602190.png",
      active: false,
    },
    {
      id: "7",
      name: "Vegetarian",
      image: "https://cdn-icons-png.flaticon.com/512/10552/10552112.png",
      active: false,
    },
    {
      id: "8",
      name: "Pizza",
      image: "https://cdn-icons-png.flaticon.com/512/1404/1404945.png",
      active: false,
    },
    {
      id: "9",
      name: "Asian",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046791.png",
      active: false,
    },
    {
      id: "10",
      name: "Desserts",
      image: "https://cdn-icons-png.flaticon.com/512/3081/3081949.png",
      active: false,
    },
  ];

  const recommendationRestaurants = [
    {
      id: "1",
      name: "Sunset Grill",
      location: "Bangkok, Thailand",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=60",
      isFavorite: false,
      isOpen: true,
      distanceKm: 2.5,
    },
    {
      id: "2",
      name: "Ocean Breeze Seafood",
      location: "Phuket, Thailand",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=60",
      isFavorite: true,
      isOpen: false,
      distanceKm: 4.2,
    },
    {
      id: "3",
      name: "Green Garden Cafe",
      location: "Chiang Mai, Thailand",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=800&q=60",
      isFavorite: false,
      isOpen: true,
      distanceKm: 1.8,
    },
    {
      id: "4",
      name: "Fire BBQ House",
      location: "Bangkok, Thailand",
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=60",
      isFavorite: true,
      isOpen: true,
      distanceKm: 3.0,
    },
    {
      id: "5",
      name: "Urban Sushi Spot",
      location: "Pattaya, Thailand",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1579613832124-4d7efbdf3d4b?auto=format&fit=crop&w=800&q=60",
      isFavorite: false,
      isOpen: false,
      distanceKm: 5.1,
    },
    {
      id: "6",
      name: "The Pizza Joint",
      location: "Chiang Rai, Thailand",
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1601924582971-c6f9b24d8c15?auto=format&fit=crop&w=800&q=60",
      isFavorite: false,
      isOpen: true,
      distanceKm: 1.1,
    },
    {
      id: "7",
      name: "Spice Indian Kitchen",
      location: "Bangkok, Thailand",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1589308078056-f3a333f0e2be?auto=format&fit=crop&w=800&q=60",
      isFavorite: true,
      isOpen: true,
      distanceKm: 2.3,
    },
    {
      id: "8",
      name: "Thai Vegan Delight",
      location: "Bangkok, Thailand",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1612874742489-61fd6003cc0e?auto=format&fit=crop&w=800&q=60",
      isFavorite: false,
      isOpen: false,
      distanceKm: 3.7,
    },
    {
      id: "9",
      name: "Cafe Mocha Corner",
      location: "Hua Hin, Thailand",
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
      isFavorite: false,
      isOpen: true,
      distanceKm: 2.0,
    },
    {
      id: "10",
      name: "Dessert Island",
      location: "Chiang Mai, Thailand",
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=60",
      isFavorite: true,
      isOpen: true,
      distanceKm: 0.8,
    },
  ];

  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <View className="flex flex-row items-center mb-5">
            <Ionicons name="location-sharp" size={20} color={colors.primary} />
            <Text className="ml-1 text-lg font-bold">Bangkok, Thailand</Text>
          </View>

          <View className="mb-5">
            <GlobalFilterSearchBar />
          </View>

          <View className="mb-8">
            <FlatList
              data={restaurantCategories}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
              renderItem={({ item }) => (
                <RestaurantCategoryCard category={item} />
              )}
            />
          </View>

          <View className="mb-8">
            {/* Title and See All */}
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-semibold">Recommendations</Text>

              <TouchableOpacity
                onPress={() => console.log("See all")}
                className="flex-row items-center justify-center"
              >
                <Text className="mr-1 text-sm font-semibold text-orange-600">
                  See All
                </Text>
                <Ionicons name="arrow-forward" size={16} color={"#EA580C"} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={recommendationRestaurants}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-4" />}
              renderItem={({ item }) => <RestaurantCard restaurant={item} />}
            />
          </View>

          <View>
            {/* Title and See All */}
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-semibold">
                Nearby your location
              </Text>

              <TouchableOpacity
                onPress={() => console.log("See all")}
                className="flex-row items-center justify-center"
              >
                <Text className="mr-1 text-sm font-semibold text-orange-600">
                  See All
                </Text>
                <Ionicons name="arrow-forward" size={16} color={"#EA580C"} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={recommendationRestaurants}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-4" />}
              renderItem={({ item }) => <RestaurantCard restaurant={item} />}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
