import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessCard from "./BusinessCard";

export default function PopularBusiness() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    setList([]);
    const q = query(collection(db, "Business List"),limit(10));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => setList((prev) => [...prev, doc.data()]));
  };
  return (
    <View style={{marginVertical:12}}>
      <Text
        style={{
          fontFamily: "poppin-bold",
          fontSize: 18,
          paddingLeft: 20,
        }}
      >
        Popular Businessess
      </Text>

      <FlatList
        data={list}
        horizontal
        style={{ paddingLeft: 20 }}
        renderItem={({ item, index }) => <BusinessCard business={item} key={index} />}
      />
    </View>
  );
}
