import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
// import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  // const { loading, isLogged } = useGlobalContext();

  // if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-biege h-full">
      {/* <Loader isLoading={loading} /> */}

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          {/* <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" /> */}

          <View className="relative mt-5">
            <Text className="text-3xl text-primary font-bold text-center">
              Find car rental{"\n"}
              and driver services{" "}
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("(auth)/sign-in")}
            containerStyles="w-full mt-7"
          />

          {/* <CustomButton
            title="Tabs"
            handlePress={() => router.push("/home")}
            containerStyles="w-full mt-7"
          /> */}
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
