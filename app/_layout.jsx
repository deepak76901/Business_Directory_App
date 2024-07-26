import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import LoginScreen from "../components/LoginScreen";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "poppin-bold": require("./../assets/fonts/Poppins-Bold.ttf"),
    "poppin-med": require("./../assets/fonts/Poppins-Medium.ttf"),
    poppin: require("./../assets/fonts/Poppins-Regular.ttf"),
    "poppin-sBold": require("./../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <SignedIn>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  );
}
