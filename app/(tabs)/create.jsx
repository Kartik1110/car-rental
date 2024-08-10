import { useState, useCallback } from "react";
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
    issueDate: "",
    expiryDate: "",
    dateOfBirth: "",
    name: "",
    model: "",
    startDate: "",
  });

  const handleChangeText = useCallback((name, value) => {
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }, []);

  const submit = async () => {
    if (Object.values(form).some((value) => !value)) {
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
          <Text className="text-2xl font-semibold text-primary mt-10 font-psemibold">Add a new client</Text>
          {[
            { name: 'fullName', title: 'Full Name', placeholder: 'Enter full name', keyboardType: undefined },
            { name: 'email', title: 'Email', placeholder: 'Enter email', keyboardType: 'email-address' },
            { name: 'phoneNumber', title: 'Phone Number', placeholder: 'Enter phone number', keyboardType: 'phone-pad' },
            { name: 'address', title: 'Address', placeholder: 'Enter address', keyboardType: undefined },
            { name: 'emiratesID', title: 'Emirates ID', placeholder: 'Enter Emirates ID', keyboardType: undefined },
          ].map((field) => (
            <FormField
              key={field.name}
              title={field.title}
              value={form[field.name]}
              handleChangeText={(e) => handleChangeText(field.name, e)}
              placeholder={field.placeholder}
              otherStyles="mt-7"
              keyboardType={field.keyboardType}
            />
          ))}
          {[
            { name: 'dateOfBirth', title: 'Date of Birth', placeholder: 'Select date of birth' },
            { name: 'issueDate', title: 'Issue date', placeholder: 'Select issue date' },
            { name: 'expiryDate', title: 'Expiry date', placeholder: 'Select expiry date' },
          ].map((field) => (
            <DatePicker
              key={field.name}
              title={field.title}
              value={form[field.name]}
              placeholder={field.placeholder}
              handleDateChange={(e) => handleChangeText(field.name, e)}
              otherStyles="mt-7"
            />
          ))}
          <CustomButton title="Add Client" handlePress={submit} containerStyles="mt-7" isLoading={isSubmitting} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
