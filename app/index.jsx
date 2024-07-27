import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-primary ">
      <Text className="font-bold text-3xl text-white mb-4">Hello User!!</Text>
      <StatusBar style="auto" />
      <Link to="/profile" href="/profile" className="bg-secondary-100 p-2 rounded-lg text-lg text-white">
        Go to Profile
      </Link>
    </View>
  );
}
