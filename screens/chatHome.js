import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { FlashList } from "@shopify/flash-list";
import ConvoHeader from "../components/convoHeader";
const users = [
  {
    id: 1,
    name: "John Doe",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero veritatis magnam accusamus quidem doloribus incidunt quasi illum, perspiciatis cupiditate!",
    time: "2m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "John Doe",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero veritatis magnam accusamus quidem doloribus incidunt quasi illum, perspiciatis cupiditate!",
    time: "1m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "John Doe",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero veritatis magnam accusamus quidem doloribus incidunt quasi illum, perspiciatis cupiditate!",
    time: "5m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "John Doe",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero veritatis magnam accusamus quidem doloribus incidunt quasi illum, perspiciatis cupiditate!",
    time: "3m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "John Doe",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero veritatis magnam accusamus quidem doloribus incidunt quasi illum, perspiciatis cupiditate!",
    time: "6m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "John Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "John Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "John Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "John Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "John Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "John Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "John Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "John Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "John Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "John Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    name: "John Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2m",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// topbar links
const topLinks = ["All", "Reply", "Stories", "Birthday", "Best Friends", "New"];

const ChatHome = () => {
  const { navigate, setOptions } = useNavigation();
  const [isAtBottom, setIsAtBottom] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState(topLinks[0]);

  useLayoutEffect(() => {
    setOptions({
      header: () => <ConvoHeader />,
      headerShown: true,
    });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: item.avatar }}
          style={{ height: 50, width: 50, borderRadius: 100 }}
        />
        <Pressable
          onPress={() => navigate("ChatScreen", { user: item })}
          style={{
            marginLeft: 10,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                overflow: "hidden",
                flex: 1,
                color: "#ADACAC",
              }}
            >
              {item.message}
            </Text>
            <Text
              style={{
                color: "#ADACAC",
              }}
            >
              {item.time}
            </Text>
          </View>
        </Pressable>
      </View>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: "white", marginTop: 50 }}
        decelerationRate="fast"
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            flex: 1,
            gap: 10,
          }}
        >
          {topLinks.map((link) => (
            <Pressable
              style={{
                borderRadius: 50,
                padding: 5,
                backgroundColor: activeLink === link ? "#B6EDFC" : "white",
              }}
              key={link}
              onPress={() => setActiveLink(link)}
            >
              <Text
                key={link}
                style={{
                  color: "#ADACAC",

                  margin: 5,
                  fontWeight: "bold",
                }}
              >
                {link}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    );
  };

  const ItemSeparatorComponent = () => {
    return (
      <View
        style={{
          height: 0.5,
          backgroundColor: "#F0EEEE",
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* topbar */}
      <View style={styles.contentWrapper}>
        <FlashList
          data={users}
          estimatedItemSize={10}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onScroll={({ nativeEvent }) =>
            setIsAtBottom(
              nativeEvent.layoutMeasurement.height +
                nativeEvent.contentOffset.y >=
                nativeEvent.contentSize.height
            )
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isAtBottom) {
              console.log("You have reached the end of the list");
            }
          }}
          ListHeaderComponent={ListHeaderComponent}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatHome;

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#FAFAFA03",
    backgroundColor: "transparent",
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
