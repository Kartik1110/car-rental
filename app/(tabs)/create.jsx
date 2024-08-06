import { View, Text } from "react-native";
import React from "react";
import { Dimensions, ScrollView, SafeAreaView } from "react-native";

const Create = () => {
  return (
    <SafeAreaView className="bg-biege h-full p-4">
      <ScrollView>
        <View
          className="w-full flex h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 150,
          }}
        >
          <Text className="text-primary text-2xl">Create Page coming soon!!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
