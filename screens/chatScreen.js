import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { FlashList } from "@shopify/flash-list";
import { FontAwesome } from "@expo/vector-icons";
import Emojis from "../components/Emojis";

const ChatScreen = () => {
  const params = useRoute()?.params;
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [content, setContent] = useState([]);
  const FlashListRef = React.useRef(null);
  const bottomSheetRef = useRef(null);
  const [selected, setSelected] = useState("");

  const onChangeText = (text) => {
    // add selected emoji

    if (selected) {
      setMessage((prev) => prev + selected);
      setSelected("");
    } else {
      setMessage(text);
    }
  };

  const onSend = () => {
    if (!message) return;
    setMessages([
      ...messages,
      {
        content: message,
        timestamp: new Date().getTime(),
      },
    ]);
    setMessage("");
  };

  // function renderEmojisWithSize(text, emojiSize) {
  //   const emojiRegex = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;

  //   // check and see if it contains text characters
  //   if (!emojiRegex.test(text)) {
  //     return <Text>{text}</Text>;
  //   }

  //   // let chunks = text.split(emojiRegex);
  //   // let nodes = [];
  //   // for (let i = 0; i < chunks.length; i++) {
  //   //   if (i % 2 === 0) {
  //   //     nodes.push(<Text key={i}>{chunks[i]}</Text>);
  //   //   } else {
  //   //     nodes.push(
  //   //       <Text key={i} style={{ fontSize: emojiSize }}>
  //   //         {chunks[i]}
  //   //       </Text>
  //   //     );
  //   //   }
  //   // }
  //   // return <View style={styles.emojiContainer}>{nodes}</View>;
  //   return (
  //     <View style={{ flexDirection: "row" }}>
  //       {text.split(emojiRegex).map((part, index) => {
  //         if (index % 2 === 0) {
  //           return <Text key={index}>{part}</Text>;
  //         } else {
  //           return (
  //             <Text key={index} style={{ fontSize: emojiSize }}>
  //               {part}
  //             </Text>
  //           );
  //         }
  //       })}
  //     </View>
  //   );
  // }

  const renderItem = ({ item }) => {
    const date = new Date(item.timestamp);
    let timeString = `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
    return (
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          margin: 10,
          borderRadius: 10,
          maxWidth: Dimensions.get("window").width / 2,
          alignSelf: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Text>{item?.content}</Text>
        <Text style={{ textAlign: "right", color: "gray" }}>{timeString}</Text>
      </View>
    );
  };

  const onContentSizeChange = () => {
    if (FlashListRef.current && messages.length > 0) {
      FlashListRef.current.scrollToEnd({
        animated: true,
      });
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://freetestapi.com/api/v1/posts");
      const data = await response.json();
      setContent(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS ? "padding" : undefined}
      >
        {/* header */}
        <ChatHeader user={params?.user} />
        <ImageBackground
          source={require("../assets/jeremy-bishop-G9i_plbfDgk-unsplash.jpg")}
          imageStyle={styles.imageStyle}
          style={{ flex: 1 }}
        >
          <FlashList
            ref={FlashListRef}
            data={params?.user?.id === 2 ? content : messages}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainerStyle}
            estimatedItemSize={10}
            inverted
            onContentSizeChange={onContentSizeChange}
          />
        </ImageBackground>
        <BlurView intensity={300} style={styles.chatInput}>
          <Pressable
            onPress={() => {
              Keyboard.dismiss();
              bottomSheetRef.current?.expand();
            }}
          >
            <FontAwesome name="smile-o" size={24} color="black" />
          </Pressable>
          <TextInput
            value={message}
            onChangeText={onChangeText}
            placeholder="Type your message here..."
            style={styles.input}
            returnKeyType="send"
            onSubmitEditing={() => onSend()}
          />
          <Pressable onPress={onSend}>
            <FontAwesome name="send" size={24} color="black" />
          </Pressable>
        </BlurView>
      </KeyboardAvoidingView>
      <Emojis bottomSheetRef={bottomSheetRef} setSelected={setMessage} />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  absolute: {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    zIndex: 100,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight + 5,
    width: Dimensions.get("window").width,
  },
  input: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "white",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  chatInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  contentContainerStyle: {
    padding: 10,
  },
  imageStyle: {
    // opacity: 0.5,
    height: "auto",
    flex: 1,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
  },
  container: {
    flexDirection: "row",
    gap: 10,
  },
  lastseen: {
    fontSize: 14,
    color: "#A7A5A5",
  },
});

const ChatHeader = ({ user }) => {
  // console.log("user", user);
  return (
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
            <Image source={{ uri: user?.avatar }} style={styles.avatar} />
          </Pressable>
          <View>
            <Text style={styles.name}>{user?.name}</Text>
            <Text style={styles.lastseen}>Last seen recently</Text>
          </View>
        </View>
      </View>
    </BlurView>
  );
};
