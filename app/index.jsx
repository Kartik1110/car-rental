import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-bold text-3xl">Hello!!</Text>
      <StatusBar style="auto" />
      <Link to="/profile" href="/profile" className="bg-indigo-700 p-2 rounded-lg text-lg text-white">
        Go to Profile
      </Link>
    </View>
  );
}
