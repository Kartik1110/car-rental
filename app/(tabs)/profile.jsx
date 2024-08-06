import { View, Dimensions, ScrollView, SafeAreaView } from "react-native";
import { router } from "expo-router";
import { CustomButton } from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";
import { signOut } from "../../lib/appwrite";

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();

  return (
    <SafeAreaView className="bg-biege h-full p-4">
      <ScrollView>
        <View
          className="w-full flex h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 150,
          }}
        >
          <CustomButton
            title="Sign Out"
            handlePress={async () => {
              await signOut();
              setUser(null);
              setIsLogged(false);

              router.replace("/sign-in");
            }}
            otherStyles="mt-7"
          >
            Sign Out
          </CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
