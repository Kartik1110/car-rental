import { useState, useCallback, useEffect } from "react";
import { Dimensions, ScrollView, SafeAreaView, View, Text, Alert, Image } from "react-native";
import { CustomButton, FormField, DatePicker, Dropdown } from "../../components";
import { createClient, getAllCars } from "../../lib/appwrite";
import { useRouter } from "expo-router";
import useAppwrite from "../../lib/useAppwrite";
import icons from "../../constants/icons";

const Create = () => {
  const router = useRouter();
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
  });
  const [selectedCar, setSelectedCar] = useState({
    carname: "",
    carnumber: 0,
    carid: "",
  });

  const { data: cars } = useAppwrite(getAllCars);
  const carOptions = cars?.map((car) => ({ id: car.$id, name: car.name, number: car.number }));

  const handleChangeText = useCallback((name, value) => {
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }, []);

  const submit = async () => {
    const emptyFields = Object.entries(form)
      .filter(([key, value]) => !value)
      .map(([key]) => key);

    if (emptyFields.length > 0) {
      const fieldsString = emptyFields.join(", ");
      Alert.alert("Error", `Please fill in the following fields: ${fieldsString}`);
      return;
    }

    setSubmitting(true);
    try {
      const clientData = {
        fullname: form.fullName,
        email: form.email,
        phone: +form.phoneNumber,
        address: form.address,
        nationalid: form.emiratesID,
        issuedate: form.issueDate,
        expirydate: form.expiryDate,
        dateofbirth: form.dateOfBirth,
        carname: selectedCar.carname,
        // fix the car id and car number issue
        carnumber: selectedCar.carnumber,
        carid: selectedCar.carid,
      };
      await createClient(clientData);
      Alert.alert("Success", "Client added successfully", [
        { text: "OK", onPress: () => router.replace("/clients") },
      ]);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    console.log("selectedCar", selectedCar);
  }, [selectedCar]);

  return (
    <SafeAreaView className="bg-biege h-full p-4">
      <ScrollView>
        <View
          style={{
            minHeight: Dimensions.get("window").height - 150,
          }}
        >
          <Text className="text-2xl font-semibold text-primary mt-10 font-psemibold">
            Add a new client
          </Text>
          {[
            {
              name: "fullName",
              title: "Full Name",
              placeholder: "Enter full name",
              keyboardType: undefined,
            },
            {
              name: "email",
              title: "Email",
              placeholder: "Enter email",
              keyboardType: "email-address",
            },
            {
              name: "phoneNumber",
              title: "Phone Number",
              placeholder: "Enter phone number",
              keyboardType: "phone-pad",
            },
            {
              name: "address",
              title: "Address",
              placeholder: "Enter address",
              keyboardType: undefined,
            },
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
          <DatePicker
            title="Date of Birth"
            value={form.dateOfBirth}
            placeholder="Select date of birth"
            handleDateChange={(e) => handleChangeText("dateOfBirth", e)}
            otherStyles="mt-7"
          />

          <FormField
            title="Passport/ID"
            value={form.emiratesID}
            handleChangeText={(e) => handleChangeText("emiratesID", e)}
            placeholder="Enter Passport/ID"
            otherStyles="mt-7"
          />

          {/* <View className="mt-7">
            <Text className="text-base mb-3 text-primary font-pmedium">Upload a photo (optional)</Text>
            <View className="w-full h-[64px] px-4 bg-biege rounded-2xl border-2 border-black-200 flex justify-center items-center">
              <View className="w-14 h-[40px] border border-dashed border-secondary-100 flex justify-center items-center">
                <Image source={icons.upload} resizeMode="contain" alt="upload" className="w-1/2 h-1/2" />
              </View>
            </View>
          </View> */}

          <View className="flex flex-row justify-between">
            {[
              {
                name: "issueDate",
                title: "Issue date",
                placeholder: "Select issue date",
              },
              {
                name: "expiryDate",
                title: "Expiry date",
                placeholder: "Select expiry date",
              },
            ].map((field) => (
              <DatePicker
                key={field.name}
                title={field.title}
                value={form[field.name]}
                placeholder={field.placeholder}
                handleDateChange={(e) => handleChangeText(field.name, e)}
                otherStyles="mt-7 min-w-[150px]"
              />
            ))}
          </View>

          <FormField
            title="License Number"
            // value={form.licenseNumber}
            handleChangeText={(e) => handleChangeText("licenseNumber", e)}
            placeholder="Enter License Number"
            otherStyles="mt-7"
          />

          {/* <View className="mt-7">
            <Text className="text-base mb-3 text-primary font-pmedium">Upload a photo (optional)</Text>
            <View className="w-full h-[64px] px-4 bg-biege rounded-2xl border-2 border-black-200 flex justify-center items-center">
              <View className="w-14 h-[40px] border border-dashed border-secondary-100 flex justify-center items-center">
                <Image source={icons.upload} resizeMode="contain" alt="upload" className="w-1/2 h-1/2" />
              </View>
            </View>
          </View> */}
          <View className="flex flex-row justify-between">
            {[
              {
                name: "issueDate",
                title: "License Issue date",
                placeholder: "Select issue date",
              },
              {
                name: "expiryDate",
                title: "License Expiry date",
                placeholder: "Select expiry date",
              },
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
          </View>

          <Text className="mt-7 text-base text-primary font-pmedium text-center">Rental Information</Text>

          <Dropdown
            title="Select a car"
            options={carOptions}
            value={selectedCar.carname}
            handleChange={(e) => {
              console.log(e);
              setSelectedCar({ ...selectedCar, carname: e });
            }}
            otherStyles="mt-7"
          />

          <DatePicker
            title="Rental Date"
            value={form.rentalDate}
            placeholder="Select Rental Date"
            handleDateChange={(e) => handleChangeText("rentalDate", e)}
            otherStyles="mt-7"
          />

          <FormField
            title="Rental Location"
            // value={form.licenseNumber}
            handleChangeText={(e) => handleChangeText("licenseNumber", e)}
            placeholder="Enter Rental Location"
            otherStyles="mt-7"
          />

          <CustomButton
            title="Add Client"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
