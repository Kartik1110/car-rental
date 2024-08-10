import { ClientCard, SearchInput } from "../../components";
import { SafeAreaView, View, FlatList } from "react-native";

const Clients = () => {
  return (
    <SafeAreaView className="bg-biege h-full mt-5">
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <ClientCard
            id="1"
            title={"John Doe"}
            creator={"BMW"}
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
        ListEmptyComponent={() => <EmptyState title="No Cars Found" subtitle="No Cars added yet" />}
        // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
};

export default Clients;
