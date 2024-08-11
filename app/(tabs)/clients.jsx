import { useState } from "react";
import { SafeAreaView, View, FlatList, RefreshControl } from "react-native";
import { ClientCard, SearchInput, EmptyState } from "../../components";
import useAppwrite from "../../lib/useAppwrite";
import { getAllClients } from "../../lib/appwrite";

const Clients = () => {
  const { data, refetch } = useAppwrite(getAllClients);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-biege h-full mt-5">
      <FlatList
        data={data}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <ClientCard
            id={item.$id}
            name={item.fullname}
            phone={item.phone}
            avatar={
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <SearchInput placeholder={"Search for a client"} />
          </View>
        )}
        ListEmptyComponent={() => <EmptyState title="No Clients Found" subtitle="No Clients added yet" />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
};

export default Clients;
