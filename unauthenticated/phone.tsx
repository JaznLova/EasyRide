import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import OuterContainer from "../components/General/OuterContainer";
import UpperContainer from "../components/General/UpperContainer";
import InputContainer from "../components/General/InputContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSessionStore } from "../store/store";
import { Phone } from "../store/types";
import { ZPhone } from "../store/zod";
import BlueButton from "../components/Buttons/BlueButton";

const phone = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });
  const router = useRouter();

  const { phoneNumber, setPhoneNumber } = useSessionStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Phone>({
    resolver: zodResolver(ZPhone),
  });
  const onSubmit = async (data: any) => {
    console.log(data);
    router.push("/unauthenticated/otp");
  };

  return (
    <OuterContainer>
      <UpperContainer
        lgText="Join us today!"
        smText="Let us make your journey easier."
      />
      <InputContainer>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather
            name="phone"
            size={22}
            color="gray"
            style={{ marginTop: -3 }}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                inputMode="tel"
                placeholder="Phone Number"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.textInput}
              />
            )}
            name="phoneNumber"
          />
        </View>
        {errors.phoneNumber && (
          <Text style={styles.err}>{errors.phoneNumber.message}</Text>
        )}
        <BlueButton onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>
            {false ? "Loading..." : "Sign Up"}
          </Text>
        </BlueButton>
      </InputContainer>
    </OuterContainer>
  );
};

export default phone;

const styles = StyleSheet.create({
  textInput: {
    fontFamily: "Poppins-Medium",
    marginLeft: 9,
    flexGrow: 1,
    padding: 5,
    paddingLeft: 0,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    fontWeight: "600",
    color: "#ffff",
  },
  err: {
    fontFamily: "Poppins-Medium",
    color: "red",
  },
});
