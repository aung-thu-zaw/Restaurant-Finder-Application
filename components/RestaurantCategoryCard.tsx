import React from "react";
import { Image, Text, View } from "react-native";

type Category = {
  id: number | string;
  name: string;
  image: string;
  active: boolean;
};

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <>
      <View
        className={`border rounded-xl p-3 flex flex-row items-center justify-center shadow-card ${
          category.active
            ? "bg-orange-600 border-orange-600"
            : "bg-white border-gray-200"
        }`}
      >
        <Image
          source={{ uri: category.image }}
          resizeMode="contain"
          className="w-5 h-5 mr-2"
        />

        <Text
          className={`text-sm  ${
            category.active
              ? "text-white font-semibold"
              : "font-medium text-gray-600"
          }`}
        >
          {category.name}
        </Text>
      </View>
    </>
  );
};

export default React.memo(CategoryCard);
