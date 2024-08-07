import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import OuterContainer from "../components/General/OuterContainer";
import UpperContainer from "../components/General/UpperContainer";
import InputContainer from "../components/General/InputContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Fontisto } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useSessionStore } from "../store/store";
import { Email, } from "../store/types";
import { ZEmail,} from "../store/zod";
import BlueButton from "../components/Buttons/BlueButton";

const phone = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });
  const router = useRouter();

  const { email, setEmail } = useSessionStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Email>({
    resolver: zodResolver(ZEmail),
  });
  const onSubmit = async (data: any) => {
    console.log(data);
    router.push("/unauthenticated/name");
  };

  return (
    <OuterContainer>
      <UpperContainer lgText="Provide your email." smText="One step Closer!" />
      <InputContainer>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Fontisto name="email" size={22} color="black" style={{ marginTop: -3, }}/>
          
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                inputMode="email"
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.textInput}
              />
            )}
            name="email"
          />
        </View>
        {errors.email && (
          <Text style={styles.err}>{errors.email.message}</Text>
        )}
        <BlueButton onPress={handleSubmit(onSubmit)}
        
         >
          <Text style={styles.buttonText}>
            {false ? "Loading..." : "Register"}
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
