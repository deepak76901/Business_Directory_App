import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function CategoryItem({ category, onCategoryPress }) {
  return (
    <TouchableOpacity onPress={() => onCategoryPress(category)}>
      <View
        style={{
          backgroundColor: Colors.ICONBG,
          padding: 10,
          borderRadius: 99,
          marginRight: 15,
        }}
      >
        <Image
          source={{ uri: category.iconUrl }}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          textAlign: "center",
          fontFamily: "poppin-med",
          marginTop: 6,
        }}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
