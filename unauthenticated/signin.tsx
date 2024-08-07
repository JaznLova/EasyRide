import { useRouter } from "expo-router";
import { useState } from "react";

import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";

export default function SignUp() {

  
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  return (
  
      <SafeAreaView style={styles.container}>
      
      <View style={styles.upperContainer}>
        <Text style={styles.largeText}>Let's sign you in</Text>
        <Text style={styles.smallText}>Welcome back.</Text>
        <Text style={styles.smallText}>You've been missed!</Text>
      </View>
  
      {/*  */}
      <View style={styles.middleContainer}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Phone Number"
          style={styles.input}
        />
        <Pressable style={styles.buttonBlue}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.redirect}>
            Don't have an account?
            <Pressable
              onPress={() => {
                router.push("/unauthenticated/signup");
              }}>
              <Text style={styles.signIn}> Sign Up</Text>
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
    // backgroundColor: "radial-gradient(circle, rgba(247,247,247,0.2712186925551471) 0%, rgba(197,198,208,1) 100%)",
    paddingLeft: 25,
    paddingRight: 25,
    flex: 1,
    // maxWidth: 1080px,s
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
    top: "30%",
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
});
