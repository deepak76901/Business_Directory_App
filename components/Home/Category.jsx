import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import CategoryItem from "./CategoryItem";

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, "Category"));
    const listSnapshot = await getDocs(q);
    listSnapshot.forEach((doc) =>
      setCategoryList((prev) => [...prev, doc.data()])
    );
  };

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "poppin-bold",
            fontSize: 18,
          }}
        >
          Category
        </Text>
        <Text
          style={{
            fontFamily: "poppin-med",
            fontSize: 15,
            color: Colors.PRIMARY,
          }}
        >
          View All
        </Text>
      </View>
      <FlatList
        horizontal
        data={categoryList}
        style={{ marginLeft: 10 }}
        renderItem={({ item, index }) => (
          <CategoryItem
            onCategoryPress={(value) => console.log(value)}
            category={item}
            key={index}
          />
        )}
      />
    </View>
  );
}
