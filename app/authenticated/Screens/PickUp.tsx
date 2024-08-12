import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TextInput } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const PickUp = () => {
  
  const DATA = [
    { key: 1, l1: "National College", l2: "iadwuwdad iuwad" },
    { key: 2, l1: "National College", l2: "iadwuwdad iuwad" },
    { key: 3, l1: "National College", l2: "iadwuwdad iuwad" },
    { key: 4, l1: "National College", l2: "iadwuwdad iuwad" },
  ];

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("../../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loser</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={() => router.back()}>
          <Ionicons
            name="chevron-back-sharp"
            size={hp("3.5%")}
            color="black"
            style={{ maxWidth: wp("10%") }}
          />
        </Pressable>
        <Text style={styles.searchText}>Search</Text>
      </View>
      <View style={{ marginLeft: wp("3%"), marginTop: wp("3%") }}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.locationContainer}>
            <FontAwesome6
              name="location-dot"
              size={hp("3%")}
              color="#0164fe"
              style={{
                marginRight: wp("3%"),
                marginTop: "3.5%",
                marginLeft: "1%",
              }}
            />
            <View style={styles.locationInnerContainer}>
              <Text style={styles.locationLabel}>{item.l1}</Text>
              <Text
                numberOfLines={1}
                style={styles.locationName}
                ellipsizeMode="tail">
                {item.l2}
              </Text>
            </View>
          </View>
          )}
        />
      </View>
    </View>
  );
};

export default PickUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f7",
    width: wp("100%"),
    height: hp("100%"),
    padding: 0,
    paddingLeft: wp("3%"),
    paddingRight: wp("5%"),
    paddingTop: hp("2%"),
    flex: 1,
  },
  searchText: {
    marginLeft: "34%",
    fontFamily: "Poppins-Medium",
    fontSize: wp("5%"),
  },
  searchInput: {
    color: "grey",
    marginTop: hp("2.5%"),
    marginBottom: hp("2%"),
    backgroundColor: "white",
    borderRadius: wp("50%"),
    paddingLeft: wp("6%"),
    height: hp("5.5%"),
    fontFamily: "Poppins-SemiBold",
  },
  locationContainer: {
    marginTop: hp("1.4%"),
    flexDirection: "row",
    alignContent: "center",
    // backgroundColor:'blue',
    // alignItems:'center',
    height: hp("6.5%"),
  },
  locationInnerContainer: {
    justifyContent: "space-between",
  },
  vehicleContainer: {},
  locationLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: wp("3.6%"),
  },
  locationName: {
    fontSize: wp("3.6%"),
    fontFamily: "Poppins-Medium",
    color: "grey",
    // flexWrap:
  },
});
