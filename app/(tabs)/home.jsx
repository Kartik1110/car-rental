import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList, RefreshControl } from "react-native";
import { CarCard, EmptyState, Loader } from "../../components";
import { getAllCars } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";

const Home = () => {
  const { data, refetch, loading } = useAppwrite(getAllCars);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  if (loading) {
    return <Loader isLoading={loading} />;
  }

  return (
    <SafeAreaView className="bg-biege h-full">
      <FlatList
        data={data}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <CarCard title={item.name} thumbnail={item.imageUrl} number={item.number} avatar={item.imageUrl} />
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4">
            <View className="flex justify-between items-start flex-row">
              <View>
                <Text className="font-pmedium text-sm text-primary">Welcome to</Text>
                <Text className="text-2xl font-psemibold text-primary">Autobreeze</Text>
              </View>
            </View>
            {/* <SearchInput placeholder={"Search for a car"} /> */}
          </View>
        )}
        ListEmptyComponent={() => <EmptyState title="No Cars Found" subtitle="No Cars added yet" />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
};

export default Home;
