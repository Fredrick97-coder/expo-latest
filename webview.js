// components/LinkPreview.js
import React from "react";
import { View, Text } from "react-native";
import WebView from "react-native-webview";

const LinkPreview = ({ url }) => {
  return (
    <View>
      <Text>Website Preview:</Text>
      <WebView source={{ uri: url }} style={{ height: 200 }} />
    </View>
  );
};

export default LinkPreview;
