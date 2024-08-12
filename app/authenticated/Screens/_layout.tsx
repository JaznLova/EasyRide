import { router, Stack } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";

const Screen = () => {
  return (
    <Stack>
      <Stack.Screen
        name="PickUp"
        options={{
          headerShown: false,
          // headerLeft: () => (
          //   <Pressable onPress={() => router.back()}>
          //     <Ionicons name="chevron-back-sharp" size={24} color="black" />
          //   </Pressable>
          // ),
          // headerTitle: "Search",
          // headerTransparent: true,
          // headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default Screen;
