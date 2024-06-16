import { View, Text, Modal, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";

const PredictionModal = ({
  isVisible,
  setIsVisible,
  prediction,
}: {
  prediction: string;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal visible={isVisible} transparent>
      <Pressable
        onPress={() => setIsVisible(false)}
        style={tw`flex-1 bg-gray-100/30 justify-center items-center`}
      >
        <View style={tw`bg-black py-7 px-8 w-[80%] shadow-lg rounded-lg z-20`}>
          <Entypo
            name="cross"
            size={29}
            color="white"
            style={tw`absolute top-3 right-3`}
            onPress={() => setIsVisible(false)}
          />
          <Text style={tw`mt-8 text-2xl font-bold text-blue-400 text-center`}>
            Result
          </Text>

          <View style={tw`mt-5 flex-row justify-center items-center gap-x-2`}>
            <Text style={tw`text-justify text-white`}>
              The MPG for the given values is :
            </Text>
            <Text style={tw`text-base font-bold text-white`}>
              {parseFloat(prediction).toFixed(2)}
            </Text>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default PredictionModal;
