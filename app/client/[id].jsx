import { SafeAreaView, Text, View, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { icons } from "../../constants";
import { useGlobalContext } from "../../context/GlobalProvider";
import { InfoBox, DatePicker, CustomButton } from "../../components";
import { useEffect, useState } from "react";
import { getClientById } from "../../lib/appwrite";

const ClientSearch = () => {
  const { user, posts } = useGlobalContext();
  const { id } = useLocalSearchParams();
  const [clientData, setClientData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const submit = async () => {
    // Your submit logic here
  };

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const data = await getClientById(id);
        setClientData(data);
      } catch (error) {
        console.error("Error fetching client data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClientData();
  }, [id]);

  if (isLoading) {
    return (
      <View className="w-full flex items-center justify-center px-4 bg-biege h-full">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="w-full flex items-center justify-center px-4 bg-biege h-full">
      <InfoBox title={clientData?.fullname} containerStyles="mt-5" titleStyles="text-4xl text-primary" />

      <View className="mt-5 flex flex-row">
        <InfoBox title="AED 0" subtitle="Total Charges " titleStyles="text-xl text-secondary" containerStyles="mr-10" />
        <InfoBox title="AED 1200" subtitle="Fines/Salik" titleStyles="text-xl text-secondary" />
      </View>

      <View className="mt-5 flex flex-col items-start w-full">
        <View className="flex flex-row items-center w-full justify-between">
          <Text className="text-primary text-base font-pmedium">Car Name</Text>
          <Text className="text-secondary-200 text-base font-pmedium">{clientData?.carname || "N/A"}</Text>
        </View>
        <View className="flex flex-row items-center w-full justify-between">
          <Text className="text-primary text-base font-pmedium">Charges per day</Text>
          <Text className="text-secondary-200 text-base font-pmedium">1200 AED</Text>
        </View>
        <View className="flex flex-row items-center w-full justify-between">
          <Text className="text-primary text-base font-pmedium">Start Date</Text>
          <Text className="text-secondary-200 text-base font-pmedium">"N/A"</Text>
        </View>
      </View>

      <DatePicker
        title="End Date"
        value={clientData?.endDate}
        placeholder="Select end date"
        handleDateChange={(e) => setClientData({ ...clientData, endDate: e })}
        otherStyles="mt-7"
      />
      <CustomButton
        title="End Trip"
        handlePress={submit}
        containerStyles="mt-7 min-w-[50%]"
      />
    </View>
  );
};

export default ClientSearch;
