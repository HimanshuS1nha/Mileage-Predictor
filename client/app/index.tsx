import { Text, View, Image } from "react-native";
import tw from "twrnc";
import SafeView from "@/components/SafeView";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Index() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/predict");
    }, 500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <SafeView style={tw`items-center justify-center gap-y-5`}>
      <Image
        source={require("../assets/images/logo.jpg")}
        style={tw`w-32 h-32 rounded-full`}
      />
      <Text style={tw`text-white text-2xl font-bold`}>Mileage Predictor</Text>
    </SafeView>
  );
}
