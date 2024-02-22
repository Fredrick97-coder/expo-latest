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

const { width } = Dimensions.get("window");

const App = () => {
  const [url, setUrl] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [display, setDisplay] = useState("none");
  const webViewRef = useRef(null);

  const handleSubmit = () => {
    if (!url) {
      Alert.alert("Please enter a text");
      return;
    }
    setPreviewVisible(false);

    // console.log(event.target.elements);

    // message data
    const message = {
      content: url,
      title,
      timeStamp: new Date(),
    };

    // receive message
    setMessages((prev) => [...prev, message]);
    setUrl("");
  };

  const isValidUrl = (url) => {
    // Regular expression to check if the value is a URL
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };

  const handleInputChange = (text) => {
    setUrl(text);
    setPreviewVisible(isValidUrl(text));
  };

  const onLoad = (syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    const { title, url } = nativeEvent;

    setTitle(title);
    setLink(url);

    // console.log("=> :", nativeEvent?.loading);
  };

  const onLoadProgress = (syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    const { title, url } = nativeEvent;

    setTitle(title);
    setLink(url);
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  // return (
  //   <TouchableWithoutFeedback style={{ flex: 1 }} onPress={hideKeyboard}>
  //     <SafeAreaView style={{ flex: 1 }}>
  //       <View style={{ marginHorizontal: 10 }}>
  //         <View
  //           style={{
  //             flexDirection: "row",
  //             justifyContent: "space-between",
  //             alignItems: "center",
  //             gap: 20,
  //             marginTop: 20,
  //             // borderBottomWidth: 1,
  //             // borderTopWidth: 1,
  //           }}
  //         >
  //           <TextInput
  //             style={{
  //               height: 40,
  //               borderColor: "#002053",
  //               borderWidth: 0.5,
  //               marginBottom: 10,
  //               paddingHorizontal: 10,
  //               borderRadius: 15,
  //               flex: 1,
  //             }}
  //             placeholder="Enter message"
  //             value={url}
  //             onChangeText={handleInputChange}
  //           />
  //           <TouchableOpacity
  //             onPress={handleSubmit}
  //             style={{
  //               backgroundColor: "#002053",
  //               padding: 10,
  //               borderRadius: 15,
  //               height: 40,
  //               alignItems: "center",
  //             }}
  //           >
  //             <Text style={{ color: "white" }}>Send</Text>
  //           </TouchableOpacity>
  //         </View>
  //         {previewVisible && (
  //           <RenderLinkPreview
  //             url={url}
  //             webViewRef={webViewRef}
  //             onLoad={onLoad}
  //             onLoadProgress={onLoadProgress}
  //             setError={setError}
  //             setIsLoading={setIsLoading}
  //             display={display}
  //           />
  //         )}

  //         {url && previewVisible && (
  //           <CardView>
  //             <View style={{ overflow: "hidden", flex: 1 }}>
  //               {isLoading && (
  //                 <Animated.Text
  //                   exiting={SlideOutLeft.springify().damping(24)}
  //                   style={{ color: "black" }}
  //                 >
  //                   {url}
  //                 </Animated.Text>
  //               )}
  //               {/* {previewVisible && <Text style={{ color: "black" }}>{error}</Text>} */}
  //               {previewVisible && !isLoading && (
  //                 <View
  //                   style={{
  //                     flexDirection: "row",
  //                     justifyContent: "flex-start",
  //                     alignItems: "center",
  //                     gap: 20,
  //                     flex: 1,
  //                   }}
  //                 >
  //                   <TouchableOpacity
  //                     style={{
  //                       backgroundColor: "#EBEBEB",
  //                       borderRadius: 5,
  //                       height: "100%",
  //                       width: 70,
  //                       alignItems: "center",
  //                       justifyContent: "center",
  //                     }}
  //                     // onPress={() => {
  //                     //   setDisplay("flex");
  //                     //   // webViewRef.current.reload();
  //                     // }}
  //                   >
  //                     <AntDesign name="link" size={24} color="black" />
  //                   </TouchableOpacity>

  //                   <Animated.View
  //                     entering={SlideInDown.springify().damping(24)}
  //                     exiting={SlideOutDown.springify().damping(24)}
  //                     style={styles.infoContainer}
  //                   >
  //                     <Text style={styles.infoTitleText}>{title}</Text>
  //                     <Text style={styles.infoText}>
  //                       {link
  //                         .trim("https://")
  //                         .replace("https://", "")
  //                         .split("/")[0] || "No description available."}
  //                     </Text>
  //                   </Animated.View>
  //                 </View>
  //               )}
  //             </View>
  //           </CardView>
  //         )}
  //         <Image
  //           source={{
  //             uri: "https://firebasestorage.googleapis.com/v0/b/gathr-ee48f.appspot.com/o/images%2F%2B2332400000003.832078291942635?alt=media&token=384206b4-6089-43d0-a529-283128dbf072",
  //           }}
  //           style={{ width: 200, height: 200, borderRadius: 0 }}
  //           loadingIndicatorSource={
  //             <Image
  //               source={{
  //                 uri: "https://firebasestorage.googleapis.com/v0/b/gathr-ee48f.appspot.com/o/images%2F%2B2332400000003.832078291942635?alt=media&token=384206b4-6089-43d0-a529-283128dbf072",
  //               }}
  //               style={{ width: 200, height: 200, borderRadius: 0 }}
  //             />
  //           }
  //           progressiveRenderingEnabled={true}
  //         />
  //         {/* Messages */}
  //         <View style={{ marginTop: 20 }}>
  //           <Text>Messages:</Text>
  //           {messages.map((message, index) => (
  //             <View
  //               key={index}
  //               style={{
  //                 backgroundColor: "#002053",
  //                 padding: 10,
  //                 borderRadius: 8,
  //                 height: 70,
  //                 marginTop: 10,
  //               }}
  //             >
  //               <>
  //                 {isValidUrl(message.content) ? (
  //                   <TouchableOpacity
  //                     onPress={() => Linking.openURL(message.content)}
  //                   >
  //                     <Text
  //                       style={{
  //                         color: isValidUrl(message.content) ? "cyan" : "white",
  //                         textAlign: "right",
  //                         textDecorationLine: isValidUrl(message.content)
  //                           ? "underline"
  //                           : undefined,
  //                       }}
  //                     >
  //                       {" "}
  //                       {message.content}
  //                     </Text>
  //                   </TouchableOpacity>
  //                 ) : (
  //                   <Text
  //                     style={{
  //                       color: "white",
  //                       textAlign: "right",
  //                     }}
  //                   >
  //                     {message.content}
  //                   </Text>
  //                 )}
  //               </>
  //               <Text style={{ textAlign: "right", color: "grey" }}>
  //                 {message.timeStamp.toDateString()}
  //               </Text>
  //               <Text style={{ textAlign: "right", color: "grey" }}>
  //                 {message.timeStamp.toLocaleTimeString()}
  //               </Text>
  //             </View>
  //           ))}
  //         </View>
  //       </View>
  //     </SafeAreaView>
  //   </TouchableWithoutFeedback>
  // );

  // ref
  const bottomSheetModalRef = useRef();

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const animationConfigs = useMemo(
    () => ({
      duration: 500,
      easing: Easing.bezier(0.33, 1, 0.68, 1),
    }),
    []
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <View style={styles.container}>
            <Button
              onPress={handlePresentModalPress}
              title="Present Modal"
              color="black"
            />
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              animationConfigs={animationConfigs}
              animateOnMount
              // onAnimate={() => console.log("animated")}
            >
              <View style={styles.contentContainer}>
                <Text>Awesome 🎉</Text>
              </View>
            </BottomSheetModal>
          </View>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default App;

const RenderLinkPreview = ({
  url,
  onLoad,
  onLoadProgress,
  webViewRef,
  setError,
  setIsLoading,
  display,
}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          display,
          position: "absolute",
          top: 0,
          left: 0,
          paddingHorizontal: 20,
          width: Dimensions.get("window").width - 40,
          height: Dimensions.get("window").height,
          justifyContent: "center",
          overflow: "hidden",
          zIndex: 100,
          width: "100%",
          backgroundColor: "#fcfcfc",
          paddingVertical: 5,
          justifyContent: "center",
          elevation: 5,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowRadius: 2,
          // overflow: "hidden",
        }}
      >
        <WebView
          ref={webViewRef}
          source={{ uri: url }}
          style={{ display, height: Dimensions.get("window").height / 2 }}
          originWhitelist={[
            "https://*",
            "http://*",
            "file://*",
            "javascript://*",
            "about://*",
          ]}
          onNavigationStateChange={(navState) => {
            // Keep track of going back navigation within component
            console.log(navState?.loading, ": state");
            setIsLoading(navState.loading);
          }}
          onError={
            (syntheticEvent) => {
              const { nativeEvent } = syntheticEvent;
              const { title, url, description } = nativeEvent;

              setError(description);
            }
            // onLoadProgress={onLoadProgress}
          }
          // style={{ display: "none" }}
          renderError={() => <View></View>}
          onLoadProgress={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            const { title, url } = nativeEvent;

            // console.log("=> :", nativeEvent?.loading);
            console.log("Load end :", nativeEvent?.loading);
          }}
          onLoad={onLoad}
          renderLoading={() => (
            <View>
              <Text>Loading...</Text>
            </View>
          )}
          onLoadEnd={
            (syntheticEvent) => {
              const { nativeEvent } = syntheticEvent;
              const { title, url } = nativeEvent;

              // Alert.alert("Loaded");

              console.log("Load end :", nativeEvent?.loading);
            }
            // onLoadProgress={onLoadProgress}
          }
          startInLoadingState={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
      {/* <WebView
          source={{ uri: url }}
          // javaScriptEnabled={true}
          // domStorageEnabled={true}
          renderError={() => (
            <View style={{ flex: 1, justifyContent: "center" }}>
            <Text>Website not available</Text>
            </View>
            )}
          /> */}
    </>
  );
};

const CardView = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  // container: {
  //   paddingHorizontal: 20,
  //   height: 70,
  //   width: "100%",
  //   backgroundColor: "#fcfcfc",
  //   paddingVertical: 5,
  //   justifyContent: "center",
  //   elevation: 5,
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowColor: "#000",
  //   shadowOpacity: 0.2,
  //   shadowRadius: 2,
  //   // overflow: "hidden",
  // },
  // infoContainer: {
  //   // marginTop: 16,
  // },
  // infoText: {
  //   fontSize: 16,
  // },
  // infoTitleText: {
  //   fontSize: 16,
  //   fontWeight: "700",
  // },

  // bottom sheet
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
