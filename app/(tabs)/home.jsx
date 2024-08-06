import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView, Dimensions, Text } from "react-native";
import { CustomButton, FormField, SearchInput } from "../../components";

const Home = () => {
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
      <ScrollView>
        <View className="flex my-6 px-4 space-y-6">
          <View className="flex justify-between items-start flex-row mb-6">
            <View>
              <Text className="font-pmedium text-sm text-primary">Welcome to</Text>
              <Text className="text-2xl font-psemibold text-primary">Autobreeze</Text>
            </View>
          </View>
          <SearchInput />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
