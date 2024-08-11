import React, { useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts } from "expo-font";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Home = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loser</Text>;
  }
  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log("handleSheetChanges", index);
  // }, []);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        snapPoints={["25%", "50%"]}
        ref={bottomSheetRef}
        // onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.gmContainer}>Good Morning Ibanez! </Text>
          <View style={styles.locationContainer}>
            <SimpleLineIcons
              name="location-pin"
              size={hp("3%")}
              color="#0164fe"
              style={{ marginRight: wp("3%"), marginTop: "3.5%" }}
            />
            <View style={styles.locationInnerContainer}>
              <Text style={styles.locationLabel}>Pick Up </Text>
              <Text
                numberOfLines={1}
                style={styles.locationName}
                ellipsizeMode="tail">
                Gandhi Bazaar
              </Text>
            </View>
          </View>
          <View style={styles.locationContainer}>
          <FontAwesome6 name="location-dot"
              size={hp("3%")}
              color="#0164fe"
              style={{ marginRight: wp("3%"), marginTop: "3.5%",marginLeft:'1%' }} />
            <View style={styles.locationInnerContainer}>
              <Text style={styles.locationLabel}>Drop-Off </Text>
              <Text
                numberOfLines={1}
                style={styles.locationName}
                ellipsizeMode="tail">
                National College
              </Text>
            </View>
          </View>
          {/* <Text style={styles.srContainer}>Select Ride </Text>          */}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainer: {
    // backgroundColor: "#f6f6f7",
    width: wp("100%"),
    height: hp("100%"),
    padding: 0,
    paddingLeft: wp("5%"),
    paddingRight: wp("5%"),
    flex: 1,
  },
  gmContainer: {
    fontFamily: "Poppins-SemiBold",
    fontSize: wp("4.5%"),
    marginTop: hp("1%"),
  },
  srContainer: {
    fontFamily: "Poppins-Regular",
    fontSize: wp("3.5%"),
    marginTop: hp("1.4%"),
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

export default Home;
