import { View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

const ClientCard = ({ id, name, phone, avatar }) => {
  const handleViewInfo = () => {
    router.push(`/client/${id}`);
  };

  return (
    <TouchableOpacity onPress={handleViewInfo}>
      <View className="flex flex-col items-center px-4 my-4">
        <View className="flex flex-row gap-3 items-start">
          <View className="flex justify-center items-center flex-row flex-1">
            <View className="w-[52px] h-[52px] rounded-full border border-secondary flex justify-center items-center p-0.5">
              <Image source={{ uri: avatar }} className="w-full h-full rounded-full" resizeMode="cover" />
            </View>

            <View className="flex justify-center flex-1 ml-3 gap-y-1">
              <Text className="font-psemibold text-sm text-primary" numberOfLines={1}>
                {name}
              </Text>
              <Text className="text-xs text-secondary-200 font-pregular" numberOfLines={1}>
                {phone}
              </Text>
            </View>
          </View>

          {/* <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ClientCard;
