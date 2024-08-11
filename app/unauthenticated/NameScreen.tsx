import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Feather from "@expo/vector-icons/Feather";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { useSessionStore } from "../../store/store";
import { Controller, useForm } from "react-hook-form";
import { ZName } from "../../src/store/zod";
import { Name } from "../../src/store/types";
import { zodResolver } from "@hookform/resolvers/zod";
const NameScreen = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loser</Text>;
  }
  const [focus, setFocus] = useState(false);
  const { firstName, setFirstName, lastName, setLastName } = useSessionStore();
  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<Name>({
    resolver: zodResolver(ZName),
  });
  const onSubmit = (data: any) => {
    console.log(data);
    router.replace("../authenticated/Home");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.lgText}>Provide your name.</Text>
        <Text style={styles.smText}>One step Closer!</Text>
      </View>
      <View
        style={[
          styles.inputContainer,
          { marginTop: focus ? hp("0%") : hp("5%") },
        ]}>
        <Feather name="user" size={24} color="black" style={{ top: "2%" }} />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="First Name"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              onChangeText={onChange}
              value={value || ""}
              style={[styles.inputBox]}
            />
          )}
          name="firstName"
        />
        {/* <TextInput
          placeholder="First Name"
          style={[styles.inputBox]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        /> */}
      </View>
      {errors.firstName && (
        <Text style={[styles.err, { marginTop: wp("-8%") }]}>
          {errors.firstName!.message}
        </Text>
      )}
      <View style={[styles.inputContainer]}>
        <Feather name="user" size={24} color="black" style={{ top: "2%" }} />

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="First Name"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              onChangeText={onChange}
              value={value || ""}
              style={[styles.inputBox]}
            />
          )}
          name="lastName"
        />

        {/* <TextInput
          placeholder="Last Name"
          style={[styles.inputBox]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        /> */}
      </View>
      {errors.lastName && (
        <Text style={[styles.err, { marginTop: wp("-8%") }]}>
          {errors.lastName!.message}
        </Text>
      )}
      <Pressable
        style={({ pressed }) => [
          pressed ? { opacity: 0.8 } : {},
          styles.buttonBlue,
        ]}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>
          {isLoading ? "is Loading..." : "Sign Up"}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default NameScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f7",
    width: wp("100%"),
    height: hp("100%"),
    padding: 0,
    paddingLeft: wp("5%"),
    paddingRight: wp("5%"),
    flex: 1,
  },
  upperContainer: {},
  lgText: {
    fontSize: hp("5.1%"),
    minHeight: hp("17%"),

    fontFamily: "Poppins-SemiBold",
    color: "#0164fe",
    padding: 0,
  },
  smText: {
    minHeight: hp("20%"),
    fontSize: hp("3.3%"),
    padding: 0,
    fontFamily: "Poppins-SemiBold",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: hp("5%"),
  },
  inputBox: {
    fontFamily: "Poppins-Regular",
    color: "black",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    backgroundColor: "transparent",
    marginLeft: wp("2%"),
  },
  buttonBlue: {
    backgroundColor: "#0164fe",
    width: "100%",
    height: 60,
    marginTop: hp("20%"),
    borderRadius: 16,

    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    fontWeight: "600",
    color: "#ffff",
  },
  err: {
    color: "red",
  },
});
