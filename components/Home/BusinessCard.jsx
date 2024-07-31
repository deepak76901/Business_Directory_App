import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function BusinessCard({ business }) {
  return (
    <View
      style={{
        marginRight: 15,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 12,
        width: 220,
      }}
    >
      <Image
        source={{ uri: business.imageurl }}
        style={{ width: 200, height: 130, borderRadius: 8 }}
      />
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontFamily: "poppin-med" }}>{business.name}</Text>
        <Text style={{ fontFamily: "poppin", fontSize: 12, color: "#626363" }}>
          {business.address}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/star.png")}
            style={{ width: 16, height: 16 }}
          />
          <Text style={{ fontSize: 15, fontFamily: "poppin" }}>4.5</Text>
        </View>
        <Text
          style={{
            backgroundColor: Colors.PRIMARY,
            color: "#fff",
            padding: 4,
            borderRadius: 6,
            width: 80,
            textAlign: "center",
            fontSize: 13,
          }}
        >
          {business.category}
        </Text>
      </View>
    </View>
  );
}
