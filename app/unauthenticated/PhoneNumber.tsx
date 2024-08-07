import { useFonts } from "expo-font";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

const PhoneNumber = () => {
  const [focus, setFocus] = useState(false);
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.lgText}>Join us today!</Text>
        <Text style={styles.smText}>Let us make your journey easier.</Text>
      </View>
      <View
        style={[
          styles.inputContainer,
          { marginTop: focus ? hp("5%") : hp("10%") },
        ]}>
        <Feather name="phone" size={24} color="black" style={{ top: "2%" }} />
        <TextInput
          placeholder="Phone Number"
          style={[styles.inputBox]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          pressed ? { opacity: 0.8 } : {},
          styles.buttonBlue,
        ]}
        onPress={() => {
          router.push("./OtpScreen");
        }}>
        <Text style={styles.buttonText}>Generate OTP</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PhoneNumber;
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
  upperContainer: {
    maxWidth: wp("70%"),
  },
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
    textAlignVertical: "top",
    flexDirection: "row",
    marginTop: hp("10%"),

    gap: wp("2%"),
  },
  inputBox: {
    fontFamily: "Poppins-Regular",
    color: "black",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    backgroundColor: "transparent",
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
});
