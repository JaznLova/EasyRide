import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";


export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });
  const CustomDrawerContent = (props: any) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          labelStyle={{ fontFamily: 'Poppins-SemiBold' }}
          icon={({ color, size }) => (
            <AntDesign name="logout" size={size - 2} color={color} />
          )}
          label={"Logout"}
          onPress={() => {
            router.push("./Home");
          }}
        />
      </DrawerContentScrollView>
    );
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          drawerActiveTintColor: "#0164fe",
          drawerActiveBackgroundColor: "#f6f6f7",
          drawerLabelStyle: { marginLeft: wp("-1.5%") },
        }}>
        <Drawer.Screen
          name="Home" // This is the name of the page and must match the url from root
          options={{
            headerStyle: {},
            drawerLabelStyle: {fontFamily: 'Poppins-SemiBold'},
            headerTitle: "",
            headerTransparent: true,
            drawerLabel: "Home",
            drawerIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
            lazy: true,
          }}
        />
        <Drawer.Screen
          name="Booking" // This is the name of the page and must match the url from root
          options={{
            drawerLabelStyle: {fontFamily: 'Poppins-SemiBold'},
            drawerLabel: "Bookings",
            drawerIcon: ({ color, size }) => (
              <AntDesign name="book" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Upgrade" // This is the name of the page and must match the url from root
          options={{
            drawerLabelStyle: {fontFamily: 'Poppins-SemiBold'},
            drawerLabel: "Upgrade",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="crown-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ProfileAndSettings" // This is the name of the page and must match the url from root
          options={{
            drawerLabelStyle: {fontFamily: 'Poppins-SemiBold'},
            drawerLabel: "Profile and Settings",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
