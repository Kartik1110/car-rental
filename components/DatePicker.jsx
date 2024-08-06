import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { icons } from "../constants";

const DatePicker = ({
  title,
  value,
  placeholder,
  handleDateChange,
  otherStyles,
  ...props
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedDate) {
      handleDateChange(selectedDate);
    }
  };

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-primary font-pmedium">{title}</Text>

      <TouchableOpacity
        onPress={() => setShowPicker(true)}
        className="w-full h-16 px-4 bg-biege rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center"
      >
        <TextInput
          className="flex-1 text-primary font-psemibold text-base"
          value={value ? value.toDateString() : ''}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          editable={false}
          {...props}
        />
        <Image
          source={icons.calendar}
          className="w-6 h-6"
          resizeMode="contain"
        />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
