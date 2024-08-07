import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { OtpInput } from "react-native-otp-entry";
import { router } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts } from "expo-font";

const OtpScreen = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.innerContainer}>
          <Text style={[styles.text, { color: "black" }]}>
            Type the verification code we've sent you.
          </Text>
        </View>
        <OtpInput
          numberOfDigits={6}
          focusColor={"#0165ff"}
          type="numeric"
          secureTextEntry={true}
          onTextChange={(text) => {
            text.length === 6 && router.push("/unauthenticated/NameScreen");
          }}
          theme={{ pinCodeContainerStyle: {} }}
        />
      </View>
      <View style={styles.innerContainer}>
        <Pressable>
          <Text
            style={[
              styles.text,
              {
                // borderBottomColor: "#0164fe",
                // borderBottomWidth: 1,
                fontSize: hp("2.2%"),
                minWidth: '50%'
              },
            ]}>
            Resend Code
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;

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
  innerContainer: {
    width: wp("70%"),
    minHeight: hp("20%"),

    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: hp("4%"),
    // paddingBottom: hp('2%')
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: hp("2.6%"),
    width: "100%",
    minHeight: hp("12%"),
    color: "#0164fe",
    padding: 10,
    // backgroundColor: 'yellow',
    paddingBottom: hp("2%"),
    marginBottom: 10,
  },
  // otpBoxes: {},
});
