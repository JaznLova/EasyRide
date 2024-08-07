import { View, Text, SafeAreaView, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { OtpInput } from "react-native-otp-entry";
import { useRouter } from "expo-router";
import { useSessionStore } from "../store/store";

const otp = () => {
  const { email, phoneNumber, setEmail } = useSessionStore();

  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>OTP Verification</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.displayText}>OTP sent to {email}</Text>
        <OtpInput
          numberOfDigits={6}
          focusColor={"#0165ff"}
          onTextChange={(text) => {
            text.length === 6 && router.push('/unauthenticated/signup')
          }}
          />
          <Text style={styles.displayText}>Didn't get the OTP? <TouchableOpacity style={{marginTop: 5}}><Text style={{color: "#0165ff",marginTop: 5}}>Resend</Text></TouchableOpacity></Text>
          <Text style={[styles.displayText,{color: 'red'}]}>Error</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.displayText}>OTP sent to {phoneNumber}</Text>
        <OtpInput
          numberOfDigits={6}
          focusColor={"#0165ff"}
          onTextChange={(text) => {
            text.length === 6 && router.push('/unauthenticated/signup')
          }} 
          />
          <Text style={styles.displayText}>Didn't get the OTP? <TouchableOpacity style={{marginTop: 5}}><Text style={{color: "#0165ff",marginTop: 5}}>Resend</Text></TouchableOpacity></Text>
          <Text style={[styles.displayText,{color: 'red'}]}>Error</Text>
      </View>
    </SafeAreaView>
  );
};

export default otp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f6f6",
    // backgroundColor: "radial-gradient(circle, rgba(247,247,247,0.2712186925551471) 0%, rgba(197,198,208,1) 100%)",
    paddingLeft: 25,
    paddingRight: 25,
    flex: 1,
    
  },
  upperContainer: {
    paddingTop: 40,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#0165ff",
  },
  inputContainer: {
    gap: 1,
    width: "100%",
    marginTop: 50,
  },
  displayText: {
    marginBottom: 20,

  },
});
