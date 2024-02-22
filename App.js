import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Button,
} from "react-native";
import { WebView } from "react-native-webview";
import Animated, {
  Easing,
  SlideInDown,
  SlideInLeft,
  SlideOutDown,
  SlideOutLeft,
} from "react-native-reanimated";
import * as Linking from "expo-linking";
import { AntDesign } from "@expo/vector-icons";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Files from "./components/files";
import Comments from "./components/fake";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatHome from "./screens/chatHome";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChatScreen from "./screens/chatScreen";
import Animation1 from "./components/animations/animation1";
import Album from "./components/Album";

const { width } = Dimensions.get("window");

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Animation1">
            <Stack.Screen
              name="Animation1"
              options={{ headerShown: false }}
              component={Files}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
