import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const OuterContainer = ({ children, ...props }: any) => {
  return (
    <SafeAreaView
      style={{
        paddingLeft: 22,
        paddingRight: 22,
        flex: 1,
        // backgroundColor: 'yellow'
      }}
      {...props}>
      {children}
    </SafeAreaView>
  );
};

export default OuterContainer;
