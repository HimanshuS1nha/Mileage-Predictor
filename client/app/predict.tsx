import { View, Text, ScrollView, ImageBackground } from "react-native";
import React, { useState } from "react";
import SafeView from "@/components/SafeView";
import tw from "twrnc";
import Form from "@/components/Form";
import { StatusBar } from "expo-status-bar";
import PredictionModal from "@/components/PredictionModal";

const Predict = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prediction, setPrediction] = useState("");
  return (
    <>
      <SafeView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={require("../assets/images/bg.webp")}>
            <Text style={tw`text-white text-2xl font-bold text-center pt-6`}>
              Mileage Predictor
            </Text>
            <Form setIsVisible={setIsVisible} setPrediction={setPrediction} />

            <PredictionModal
              isVisible={isVisible}
              prediction={prediction}
              setIsVisible={setIsVisible}
            />
          </ImageBackground>
        </ScrollView>
      </SafeView>

      <StatusBar style="light" backgroundColor="#1c2229" />
    </>
  );
};

export default Predict;
