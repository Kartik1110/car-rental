import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const Dropdown = ({ title, options, otherStyles, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    handleChange(option)
  };

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {/* Title added similar to FormField */}
      {title && <Text className="text-base text-primary font-pmedium">{title}</Text>}

      <TouchableOpacity
        onPress={toggleDropdown}
        className="w-full h-16 px-4 bg-biege rounded-2xl border-2 focus:border-secondary flex flex-row items-center justify-between"
      >
        <Text className="text-base text-primary font-pmedium">{selectedOption}</Text>
        {/* Icon can be added here for dropdown arrow */}
      </TouchableOpacity>

      {isOpen && (
        <ScrollView className="z-20 w-full max-h-90 bg-biege border-2 border-black-200 rounded-2xl overflow-y-scroll">
          {options.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => selectOption(item.name)}
              className="w-full h-16 px-4 bg-biege rounded-2xl border-b-2 border-black-100 flex flex-row items-center"
            >
              <Text className="text-base text-primary font-pmedium">{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Dropdown;
