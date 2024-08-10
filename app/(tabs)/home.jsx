import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList } from "react-native";
import { useGlobalContext } from "../../context/GlobalProvider";
import { CarCard, EmptyState } from "../../components";

const Home = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
  });
  // const { data: posts, refetch } = useAppwrite(getAllPosts);
  // const { data: latestPosts } = useAppwrite(getLatestPosts);

  // const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = async () => {
  //   setRefreshing(true);
  //   await refetch();
  //   setRefreshing(false);
  // };

  const submit = async () => {
    // if (form.username === "" || form.email === "" || form.password === "") {
    //   Alert.alert("Error", "Please fill in all fields");
    // }
    // setSubmitting(true);
    // try {
    //   const result = await createUser(form.email, form.password, form.username);
    //   setUser(result);
    //   setIsLogged(true);
    //   router.replace("/home");
    // } catch (error) {
    //   Alert.alert("Error", error.message);
    // } finally {
    //   setSubmitting(false);
    // }
  };

  return (
    <SafeAreaView className="bg-biege h-full">
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <CarCard
            title={"BMW M5"}
            thumbnail={
              "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            creator={"BMW"}
            avatar={
              "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
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
        // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
};

export default Home;
