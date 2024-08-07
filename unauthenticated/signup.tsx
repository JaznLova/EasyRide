import { useRouter } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import { useSessionStore } from "../store/store";
import { ZFormSignUp } from "../store/zod";
import { FormSignUp } from "../store/types";

export default function SignUp() {
  const router = useRouter();
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
  } = useSessionStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSignUp>({
    resolver: zodResolver(ZFormSignUp),
  });
  const onSubmit = (data: any) => {
    console.log(data);
    router.push("/unauthenticated/otp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.largeText}>Join us today</Text>
        <Text style={styles.smallText}>Let us make your journey easier!</Text>
      </View>

      <View style={styles.middleContainer}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.err}>{errors.email.message}</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              keyboardType="number-pad"
              placeholder="Phone Number"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="phoneNumber"
        />
        {errors.phoneNumber && (
          <Text style={styles.err}>{errors.phoneNumber.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="firstName"
        />
        {errors.firstName && (
          <Text style={styles.err}>{errors.firstName.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Last name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="lastName"
        />
        {errors.lastName && (
          <Text style={styles.err}>{errors.lastName.message}</Text>
        )}

        <Pressable style={[styles.buttonBlue]} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.redirect}>
            Already have an account?
            <Pressable
              style={({ pressed }) => [pressed ? { opacity: 0.7 } : {}]}
              onPress={() => {
                router.push("/unauthenticated/signin");
              }}>
              <Text style={styles.signIn}> Sign In</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    paddingLeft: 25,
    paddingRight: 25,
    flex: 1,
  },
  upperContainer: {
    // backgroundColor: "yellow",
    paddingTop: 75,
    flex: 1,
    maxWidth: 250,
    maxHeight: 180,
  },
  middleContainer: {
    // backgroundColor: "yellow",
    top: "22%",
  },
  bottomContainer: {},
  largeText: {
    fontSize: 38,
    fontWeight: "700",
    color: "#0164fe",
  },
  smallText: {
    paddingTop: 5,
    fontSize: 25,
    fontWeight: "500",
  },
  input: {
    flexGrow: 1,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "#606263",
  },
  buttonBlue: {
    backgroundColor: "#0164fe",
    width: "100%",
    height: 60,
    marginTop: 8,
    borderRadius: 16,

    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#ffff",
  },
  redirect: {
    marginTop: 5,
    justifyContent: "center",
  },
  signIn: {
    color: "#0164fe",
    fontWeight: "500",
    // marginTop: 50,
  },
  err: {
    color: "red",
  },
});
