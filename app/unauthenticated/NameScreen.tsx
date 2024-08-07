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
const NameScreen = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });
  const [focus, setFocus] = useState(false);
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
        <TextInput
          placeholder="First Name"
          style={[styles.inputBox]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </View>
      <View style={[styles.inputContainer]}>
        <Feather name="user" size={24} color="black" style={{ top: "2%" }} />
        <TextInput
          placeholder="Last Name"
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
          router.push("../authenticated/Home");
        }}>
        <Text style={styles.buttonText}>Generate OTP</Text>
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
});
