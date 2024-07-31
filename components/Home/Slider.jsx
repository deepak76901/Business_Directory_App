import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../configs/FirebaseConfig";
import { getDocs, query, collection } from "firebase/firestore";

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    getSliderList();
  }, []);

  const getSliderList = async () => {
    setSliderList([]);

    const q = query(collection(db, "Slider"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setSliderList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <Text
        style={{
          fontFamily: "poppin-bold",
          fontSize: 20,
          paddingLeft: 20,
          paddingTop: 15,
          marginBottom: 5,
        }}
      >
        #Special For You
      </Text>
      <FlatList
        data={sliderList}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 20 }}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              width: 280,
              height: 140,
              borderRadius: 15,
              marginRight: 15,
            }}
          />
        )}
      ></FlatList>
    </View>
  );
}
