import React, { useMemo, useState } from "react";
import { useDerivedValue } from "react-native-reanimated";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  Dimensions,
  StatusBar,
} from "react-native";
import { BlurView } from "expo-blur";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const ConvoHeader = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "transparent",
        shadowColor: "#E0E0E0AD",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={300}
        reducedTransparencyFallbackColor="white"
        // onTouchStart={() => console.log("touched")}
      >
        <View style={styles.header}>
          <View style={styles.container}>
            <Pressable style={styles.pressable}>
              <Image
                source={require("../assets/girl.png")}
                style={styles.avatar}
              />
            </Pressable>
            <Pressable style={styles.pressable}>
              <FontAwesome name="search" size={20} color="darkgray" />
            </Pressable>
          </View>
          <Text style={styles.title}>Chats</Text>
          <View style={styles.container}>
            <Pressable style={styles.pressable}>
              <Ionicons name="person-add" size={20} color="darkgray" />
            </Pressable>
            <Pressable style={styles.pressable}>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={20}
                color="darkgray"
              />
            </Pressable>
          </View>
        </View>
      </BlurView>
      <StatusBar translucent backgroundColor="transparent" barStyle="default" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 100,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight + 50,
    width: Dimensions.get("window").width,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#FAFAFA03",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  pressable: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: "#DEDEDE",
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flexDirection: "row",
    gap: 10,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
});

export default ConvoHeader;
