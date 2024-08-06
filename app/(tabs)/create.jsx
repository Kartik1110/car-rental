import { useState } from "react";
import { Dimensions, ScrollView, SafeAreaView, View, Text, Alert } from "react-native";
import { CustomButton, FormField, DatePicker } from "../../components";

const Create = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    emiratesID: "",
    dateOfBirth: "",
    name: "",
    model: "",
    startDate: "",
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
    const { fullName, email, phoneNumber, address, emiratesID, dateOfBirth, name, model, startDate } = form;

    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !address ||
      !emiratesID ||
      !dateOfBirth ||
      !name ||
      !model ||
      !startDate
    ) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

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
    <SafeAreaView className="bg-biege h-full p-4">
      <ScrollView>
        <View
          style={{
            minHeight: Dimensions.get("window").height - 150,
          }}
        >
          <Text className="text-2xl text-primary mt-7 font-bold">Add a new client</Text>
          <FormField
            title="Full Name"
            value={form.fullName}
            handleChangeText={(e) => setForm({ ...form, fullName: e })}
            placeholder="Enter full name"
            otherStyles="mt-7"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            placeholder="Enter email"
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Phone Number"
            value={form.phoneNumber}
            handleChangeText={(e) => setForm({ ...form, phoneNumber: e })}
            placeholder="Enter phone number"
            otherStyles="mt-7"
            keyboardType="phone-pad"
          />

          <FormField
            title="Address"
            value={form.address}
            handleChangeText={(e) => setForm({ ...form, address: e })}
            placeholder="Enter address"
            otherStyles="mt-7"
          />

          <FormField
            title="Emirates ID"
            value={form.emiratesID}
            handleChangeText={(e) => setForm({ ...form, emiratesID: e })}
            placeholder="Enter Emirates ID"
            otherStyles="mt-7"
          />

          <DatePicker
            title="Date of Birth"
            value={form.dateOfBirth}
            placeholder="Select date of birth"
            handleDateChange={(e) => setForm({ ...form, dateOfBirth: e })}
            otherStyles="mt-7"
          />

          <CustomButton title="Add Client" handlePress={submit} containerStyles="mt-7" isLoading={isSubmitting} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
