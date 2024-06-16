import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Form = ({
  setIsVisible,
  setPrediction,
}: {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPrediction: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [cylinders, setCylinders] = useState("");
  const [displacement, setDisplacement] = useState("");
  const [horsepower, setHorsepower] = useState("");
  const [weight, setWeight] = useState("");
  const [acceleration, setAcceleration] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [origin, setOrigin] = useState("");

  const { mutate: handlePredict, isPending } = useMutation({
    mutationKey: ["predict"],
    mutationFn: async () => {
      const { data } = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/predict`,
        {
          cylinders,
          displacement,
          acceleration,
          horsepower,
          weight,
          modelYear,
          origin,
        }
      );
      return data;
    },
    onSuccess: (data) => {
      setPrediction(data.prediction);
      setIsVisible(true);
    },
  });

  const useTestValues1 = () => {
    setCylinders("4");
    setDisplacement("91.0");
    setHorsepower("53.0");
    setWeight("1795");
    setAcceleration("17.4");
    setModelYear("76");
    setOrigin("3");
  };

  const useTestValues2 = () => {
    setCylinders("4");
    setDisplacement("120.0");
    setHorsepower("79.0");
    setWeight("2625");
    setAcceleration("18.6");
    setModelYear("82");
    setOrigin("1");
  };

  const handleReset = () => {
    setCylinders("");
    setDisplacement("");
    setHorsepower("");
    setWeight("");
    setAcceleration("");
    setModelYear("");
    setOrigin("");
  };
  return (
    <View style={tw`mt-9 items-center gap-y-5`}>
      <View style={tw`gap-y-3 items-start w-[80%]`}>
        <Text style={tw`ml-2 text-base font-semibold text-white`}>
          Cylinders
        </Text>
        <TextInput
          style={tw`border w-full rounded-full px-4 py-2 bg-white`}
          placeholder="Enter number of cylinders"
          keyboardType="number-pad"
          value={cylinders}
          onChangeText={(text) => setCylinders(text)}
        />
      </View>
      <View style={tw`gap-y-3 items-start w-[80%]`}>
        <Text style={tw`ml-2 text-base font-semibold text-white`}>
          Displacement
        </Text>
        <TextInput
          style={tw`border w-full rounded-full px-4 py-2 bg-white`}
          placeholder="Enter displacement"
          value={displacement}
          onChangeText={(text) => setDisplacement(text)}
        />
      </View>
      <View style={tw`gap-y-3 items-start w-[80%]`}>
        <Text style={tw`ml-2 text-base font-semibold text-white`}>
          Horsepower
        </Text>
        <TextInput
          style={tw`border w-full rounded-full px-4 py-2 bg-white`}
          placeholder="Enter car's horsepower"
          keyboardType="number-pad"
          value={horsepower}
          onChangeText={(text) => setHorsepower(text)}
        />
      </View>
      <View style={tw`gap-y-3 items-start w-[80%]`}>
        <Text style={tw`ml-2 text-base font-semibold text-white`}>Weight</Text>
        <TextInput
          style={tw`border w-full rounded-full px-4 py-2 bg-white`}
          placeholder="Enter car's weight"
          keyboardType="number-pad"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
      </View>
      <View style={tw`gap-y-3 items-start w-[80%]`}>
        <Text style={tw`ml-2 text-base font-semibold text-white`}>
          Acceleration
        </Text>
        <TextInput
          style={tw`border w-full rounded-full px-4 py-2 bg-white`}
          placeholder="Enter car's acceleration"
          keyboardType="number-pad"
          value={acceleration}
          onChangeText={(text) => setAcceleration(text)}
        />
      </View>
      <View style={tw`gap-y-3 items-start w-[80%]`}>
        <Text style={tw`ml-2 text-base font-semibold text-white`}>
          Model Year
        </Text>
        <TextInput
          style={tw`border w-full rounded-full px-4 py-2 bg-white`}
          placeholder="Enter car's model year"
          keyboardType="number-pad"
          value={modelYear}
          onChangeText={(text) => setModelYear(text)}
        />
      </View>
      <View style={tw`gap-y-3 items-start w-[78%]`}>
        <Text style={tw`ml-2 text-base font-semibold text-white`}>Origin</Text>
        <TextInput
          style={tw`border w-full rounded-full px-4 py-2 bg-white`}
          placeholder="Enter car's origin"
          keyboardType="number-pad"
          value={origin}
          onChangeText={(text) => setOrigin(text)}
        />
      </View>

      <Pressable
        style={tw`${
          isPending ? "bg-blue-300" : "bg-blue-600"
        } w-[80%] items-center justify-center py-2.5 mb-1 mt-4 rounded-full`}
        onPress={() => handlePredict()}
        disabled={isPending}
      >
        <Text style={tw`text-white text-base font-medium`}>
          {isPending ? "Please wait..." : "Predict"}
        </Text>
      </Pressable>
      <Pressable
        style={tw`bg-red-500 w-[80%] items-center justify-center py-2.5 mb-1 rounded-full`}
        onPress={handleReset}
        disabled={isPending}
      >
        <Text style={tw`text-white text-base font-medium`}>Reset</Text>
      </Pressable>

      <View style={tw`mb-5`}>
        <Pressable
          style={tw`w-[80%] items-center justify-center py-2.5 rounded-full`}
          onPress={useTestValues1}
        >
          <Text style={tw`text-blue-400 text-base`}>Use Test Values 1</Text>
        </Pressable>

        <Pressable
          style={tw`w-[80%] items-center justify-center py-2.5 rounded-full`}
          onPress={useTestValues2}
        >
          <Text style={tw`text-blue-400 text-base`}>Use Test Values 2</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Form;
