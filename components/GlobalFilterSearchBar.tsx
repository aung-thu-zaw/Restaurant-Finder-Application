import Ionicons from "@expo/vector-icons/Ionicons";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const GlobalFilterSearchBar = () => {
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    openNow: false,
    hasDelivery: false,
    topRated: false,
  });

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Search Bar */}
      <View className="border border-gray-200 rounded-xl px-3 py-1.5 flex-row items-center">
        <Ionicons name="search" size={18} color="#6B7280" />

        <TextInput
          className="ml-2 flex-1"
          placeholder="Search restaurants"
          placeholderTextColor="#6B7280"
        />

        <TouchableOpacity onPress={() => setShowFilters(true)}>
          <Ionicons name="options" size={20} color="#4B5563" />
        </TouchableOpacity>
      </View>

      {/* Dropdown Filter Panel as Modal */}
      <Modal
        visible={showFilters}
        animationType="slide"
        transparent
        onRequestClose={() => setShowFilters(false)}
      >
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.3)" }}
          onPress={() => setShowFilters(false)}
        >
          <View
            style={{
              backgroundColor: "white",
              margin: 20,
              borderRadius: 10,
              padding: 20,
              marginTop: 120,
              shadowColor: "#000",
              shadowOpacity: 0.25,
              shadowRadius: 10,
              elevation: 5,
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 16, marginBottom: 12 }}
            >
              Filters
            </Text>

            {[
              { key: "openNow", label: "Open Now" },
              { key: "hasDelivery", label: "Has Delivery" },
              { key: "topRated", label: "Top Rated" },
            ].map((item) => (
              <View
                key={item.key}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Checkbox
                  value={filters[item.key as keyof typeof filters]}
                  onValueChange={() =>
                    toggleFilter(item.key as keyof typeof filters)
                  }
                  color={
                    filters[item.key as keyof typeof filters]
                      ? "#4B5563"
                      : undefined
                  }
                />
                <Text style={{ marginLeft: 8 }}>{item.label}</Text>
              </View>
            ))}

            <TouchableOpacity
              onPress={() => setShowFilters(false)}
              style={{
                backgroundColor: "#4B5563",
                padding: 10,
                borderRadius: 6,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>Apply</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

export default GlobalFilterSearchBar;
