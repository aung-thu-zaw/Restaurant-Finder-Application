import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Restaurant = {
  id: number | string;
  name: string;
  location: string;
  rating: number;
  image: string;
  isFavorite: boolean;
  isOpen: boolean;
  distanceKm: number;
};

const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({
  restaurant,
}) => {
  const [liked, setLiked] = useState<boolean>(restaurant.isFavorite);

  return (
    <View className="w-64 bg-white rounded-xl overflow-hidden shadow-sm p-3 border border-gray-200">
      <View className="relative">
        <Image
          source={{ uri: restaurant.image }}
          className="h-36 w-full rounded-md"
          resizeMode="cover"
        />

        <View className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded-full flex-row items-center">
          <Ionicons name="star" size={12} color="#F59E0B" />
          <Text className="ml-1 text-xs font-medium text-gray-800">
            {restaurant.rating}
          </Text>
        </View>
      </View>

      <View className="mt-3">
        <View className="flex-row justify-between items-center">
          <Text className="text-md font-semibold text-gray-800">
            {restaurant.name}
          </Text>

          <TouchableOpacity onPress={() => setLiked(!liked)}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={20}
              color={liked ? "#EA580C" : "gray"}
            />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center mt-2">
          <Ionicons name="location-sharp" size={14} color="#EA580C" />
          <Text className="text-sm text-gray-600 ml-1">
            {restaurant.location}
          </Text>
        </View>

        <View className="flex-row items-center mt-3 justify-between">
          <Text
            className={`text-xs font-medium ${
              restaurant.isOpen ? "text-green-600" : "text-red-500"
            }`}
          >
            {restaurant.isOpen ? "Open Now" : "Closed"}
          </Text>

          <Text className="text-xs font-medium text-gray-500">
            {restaurant.distanceKm.toFixed(1)} km away
          </Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(RestaurantCard);
