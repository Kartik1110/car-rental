import { SafeAreaView, Text, View, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { icons } from "../../constants";
import { useGlobalContext } from "../../context/GlobalProvider";
import { InfoBox, DatePicker, CustomButton } from "../../components";

const ClientSearch = () => {
  const { user, posts } = useGlobalContext();
  const { id } = useLocalSearchParams();

  const submit = async () => {

  }

  return (
    <View className="w-full flex items-center justify-center px-4 bg-biege h-full">
      {/* <TouchableOpacity className="flex w-full items-end mb-10">
        <Image source={icons.logout} resizeMode="contain" className="w-6 h-6" />
      </TouchableOpacity> */}

      {/* <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center"> */}
        {/* <Image source={{ uri: user?.avatar }} className="w-[90%] h-[90%] rounded-lg" resizeMode="cover" /> */}
      {/* </View> */}

      <InfoBox title={user?.username} containerStyles="mt-5" titleStyles="text-4xl text-primary" />

      <View className="mt-5 flex flex-row">
        <InfoBox title="AED 0" subtitle="Total Charges " titleStyles="text-xl text-secondary" containerStyles="mr-10" />
        <InfoBox title="AED 1200" subtitle="Fines/Salik" titleStyles="text-xl text-secondary" />
      </View>

      <View className="mt-5 flex flex-col items-start w-full">
        <View className="flex flex-row items-center w-full justify-between">
          <Text className="text-primary text-base font-pmedium">Car Name</Text>
          <Text className="text-secondary-200 text-base font-pmedium">BMW M5</Text>
        </View>
        <View className="flex flex-row items-center w-full justify-between">
          <Text className="text-primary text-base font-pmedium">Charges per day</Text>
          <Text className="text-secondary-200 text-base font-pmedium">1200 AED</Text>
        </View>
        <View className="flex flex-row items-center w-full justify-between">
          <Text className="text-primary text-base font-pmedium">Start Date</Text>
          <Text className="text-secondary-200 text-base font-pmedium">10/08/2024</Text>
        </View>
      </View>

      <DatePicker
        title="End Date"
        // value={form.dateOfBirth}
        placeholder="Select end date"
        // handleDateChange={(e) => setForm({ ...form, dateOfBirth: e })}
        otherStyles="mt-7"
      />
      <CustomButton
        title="End Trip"
          handlePress={submit}
        //   isLoading={isSubmitting}
        containerStyles="mt-7 min-w-[50%]"
      />
    </View>
  );
};

export default ClientSearch;
