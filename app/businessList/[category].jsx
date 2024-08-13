import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";

export default function BusinessListByCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();

  /* Use to get Business List by Category. */
  const getBusinessList = async () => {
    const q = query(
      collection(db, "Business List"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => console.log(doc.data()));
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTitle: category });
    getBusinessList();
  }, []);
  return (
    <View>
      <Text>{category}</Text>
    </View>
  );
}
