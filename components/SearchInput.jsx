import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert, Text } from "react-native";

import { icons } from "../constants";

const SearchInput = ({ initialQuery, placeholder }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="space-y-2">
      <View className="flex flex-row items-center w-full h-16 px-4 bg-biege rounded-2xl border-2 border-black-200 focus:border-secondary">
        <TextInput
          className="flex-1 text-primary font-psemibold text-base"
          value={query}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={(e) => setQuery(e)}
        />

        <TouchableOpacity
          onPress={() => {
            if (query === "")
              return Alert.alert("Missing Query", "Please input something to search results across database");

            if (pathname.startsWith("/search")) router.setParams({ query });
            else router.push(`/search/${query}`);
          }}
        >
          <Image source={icons.search} className="w-6 h-6" resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
