import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = (props) => {
  return (
    <Pressable
      testID="Button:Button:ClickMe"
      onPress={props.onPress}
      style={styles.btn}
    >
      <Text>Button</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 100,
    borderRadius: 12,
    backgroundColor: "#FFE04B",
  },
});
