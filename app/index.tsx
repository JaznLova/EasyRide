import { Redirect } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { useSessionStore } from "./store/store";

export default function Page() {
  // const session = useSessionStore((state) => state.session);
  return (
<GestureHandlerRootView style={{ flex: 1 }}>
<Redirect
      // href={'/unauthenticated/OtpScreen'}
      // href={'/unauthenticated/PhoneNumber'}
      // href={'/unauthenticated/NameScreen'}
      href={'/authenticated/Home'}
    />
</GestureHandlerRootView>
  );
}
 