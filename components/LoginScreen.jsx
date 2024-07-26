import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import useWarmUpBrowser from "@/hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <View style={styles.imageCont}>
        <Image
          style={{
            width: 250,
            height: 500,
            marginTop: 12,
            borderRadius: 10,
            borderWidth: 3,
            borderColor: "black",
          }}
          source={require("../assets/images/flipkart.png")}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.textCont}>
          Your Ultimate Community{" "}
          <Text style={{ color: Colors.PRIMARY }}>Business Directory</Text> App
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginVertical: 15,
            fontFamily: "poppin",
            textAlign: "center",
            color: Colors.GRAY,
          }}
        >
          Find your favourite business near you and post your own Business.
        </Text>
        <TouchableOpacity style={styles.btn} onPress={onPress} >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 16,
              fontFamily: "poppin",
            }}
          >
            Let's get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: { padding: 16, marginTop: -50, backgroundColor: "#fff" },
  textCont: { fontSize: 24, fontFamily: "poppin-bold", textAlign: "center" },
  imageCont: { marginTop: 50, display: "flex", alignItems: "center" },
  btn: { backgroundColor: Colors.PRIMARY, padding: 12, borderRadius: 14 },
});
