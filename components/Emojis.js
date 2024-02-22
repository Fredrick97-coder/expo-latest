import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  BottomSheetScrollView,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import { Easing } from "react-native-reanimated";
import { FontAwesome } from "@expo/vector-icons";
import { emojisPack } from "../package/emoji";
import { FlatGrid, SimpleGrid } from "react-native-super-grid";

const Emojis = ({ bottomSheetRef, setSelected }) => {
  const [recent, setRecent] = useState({});
  const [searchVal, setSearchVal] = useState("");
  const [emojisSearchMatch, setEmojisSearchMatch] = useState([]);
  const [isEmojiMatch, setIsEmojiMatch] = useState(false);
  const [activeEmojiCat, setActiveEmojiCat] = useState(0);
  const footerRef = useRef(null);
  // ref
  const inputRef = useRef(null);
  const bottomSheetScrollRef = useRef(null);

  const snapPoints = useMemo(() => ["25%", "50%", "95%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    // console.log("handleSheetChanges", index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        animatedIndex={0}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const animationConfig = useMemo(
    () => ({
      duration: 300,
      // easing: Easing.out(Easing.cubic),
    }),
    []
  );

  const onClose = () => {
    bottomSheetRef.current?.close();
  };

  const handleEmojiSelect = (emo) => {
    // console.log("emoji selected: ", emo);
    setSelected((prev) => prev + (emo.length > 1 ? emo + " " : emo + " "));
    setRecent((prev) => {
      let newRecent = prev;
      newRecent[emo] = newRecent[emo] ? newRecent[emo] + 1 : 1;
      return newRecent;
    });
    onClose();
  };

  const onChangeText = (text) => {
    setSearchVal(text);

    /**
     * put all the search match in
     * one array and then set the state
     * if search matches any emoji
     * set isEmojiMatch to true else
     * set false
     *
     */
    let matches = [];
    text?.length &&
      emojisPack.forEach((emoji) => {
        emoji?.set?.forEach((emo) => {
          if (emo?.label.toLowerCase().includes(text.toLowerCase())) {
            console.log("emo: ", emo);
            matches.push(emo);
          } else {
          }
        });
      });

    setEmojisSearchMatch(matches);
  };

  // const handleScroll = (event) => {
  //   const offsetY = event.nativeEvent.contentOffset.y;
  //   let newActiveEmojiCat = 0;

  //   // Find the category whose header is currently in view
  //   for (let i = 0; i < emojisPack.length; i++) {
  //     const categoryHeaderPosition = i * 66; // Assuming each category has a height of 66
  //     if (offsetY >= categoryHeaderPosition) {
  //       newActiveEmojiCat = i;
  //     } else {
  //       break; // Exit loop once we find the category that is not in view
  //     }
  //   }

  //   console.log(newActiveEmojiCat);

  //   setActiveEmojiCat(newActiveEmojiCat);
  // };

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    let newActiveEmojiCat = 0;

    // Find the category whose header is currently in view
    for (let i = 0; i < emojisPack.length; i++) {
      const categoryHeaderPosition = i * 66; // Assuming each category has a height of 66
      if (offsetY >= categoryHeaderPosition) {
        newActiveEmojiCat = i;
      } else {
        break; // Exit loop once we find the category that is not in view
      }
    }

    // console.log(newActiveEmojiCat);

    // setActiveEmojiCat(newActiveEmojiCat);
    // footerRef.current?.scrollToIndex({
    //   index: newActiveEmojiCat,
    //   animated: true,
    // });
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      enablePanDownToClose
      enableOverDrag
      animateOnMount={true}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      onClose={onClose}
      animationConfigs={animationConfig}
      onAnimate={handleSheetChanges}
      // containerStyle={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      backdropComponent={renderBackdrop}
      handleStyle={{
        backgroundColor: "#262626",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
      handleIndicatorStyle={{
        backgroundColor: "#ccc",
      }}
      style={{
        backgroundColor: "#262626",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
      backgroundStyle={{
        backgroundColor: "#262626",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <BottomSheetView
        onTouchStart={() => Keyboard.dismiss()}
        style={{ height: 70, backgroundColor: "#262626" }}
      >
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={20} color="#ccc" />
          <TextInput
            placeholderTextColor={"#ccc"}
            placeholder="Search"
            style={styles.input}
            ref={inputRef}
            value={searchVal}
            onChangeText={onChangeText}
          />
        </View>
      </BottomSheetView>
      <BottomSheetFlatList
        ref={bottomSheetScrollRef}
        onScroll={handleScroll}
        style={{ flex: 1, paddingHorizontal: 20, marginBottom: 10 }}
        data={emojisSearchMatch?.length < 1 && !searchVal && emojisPack}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: emoji, index }) => (
          <View key={index}>
            <Text key={index} style={{ fontSize: 12, color: "#ccc" }}>
              {emoji?.category?.toUpperCase()}
            </Text>
            <SimpleGrid
              itemDimension={30}
              data={emoji?.set}
              renderItem={({ item }) => (
                <Pressable onPress={() => handleEmojiSelect(item?.emoji)}>
                  <Text style={{ fontSize: 30 }}>{item?.emoji}</Text>
                </Pressable>
              )}
            />
          </View>
        )}
        ListHeaderComponent={
          emojisSearchMatch?.length < 1 &&
          !searchVal &&
          recent &&
          Object.keys(recent).length > 0 && (
            <View>
              <Text style={{ fontSize: 12, color: "#ccc" }}>
                {" "}
                {`Recent Reactions`.toUpperCase()}
              </Text>
              <SimpleGrid
                itemDimension={30}
                data={Object.keys(recent)}
                renderItem={({ item }) => (
                  <Pressable onPress={() => handleEmojiSelect(item)}>
                    <Text style={{ fontSize: 30 }}>{item}</Text>
                  </Pressable>
                )}
              />
            </View>
          )
        }
        ListEmptyComponent={
          emojisSearchMatch?.length > 0 && (
            <View>
              <Text style={{ fontSize: 12, color: "#ccc" }}>
                {`Search Results`.toUpperCase()}
              </Text>
              <SimpleGrid
                itemDimension={30}
                data={emojisSearchMatch}
                renderItem={({ item }) => (
                  <Pressable onPress={() => handleEmojiSelect(item?.emoji)}>
                    <Text style={{ fontSize: 30 }}>{item?.emoji}</Text>
                  </Pressable>
                )}
              />
            </View>
          )
        }
      />

      <View style={styles.footerContainer}>
        <BottomSheetFlatList
          ref={footerRef}
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 20,
            marginBottom: 10,
            gap: 10,
          }}
          showsHorizontalScrollIndicator={false}
          data={emojisPack}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: { catEmoji }, index }) => (
            <Pressable
              key={index}
              onPress={() => {
                bottomSheetScrollRef.current?.scrollToIndex({
                  index: index,
                  animated: true,
                });
                setActiveEmojiCat(index);
              }}
              style={[
                styles.footer,
                {
                  backgroundColor:
                    activeEmojiCat === index ? "#4C4C4CA3" : "#262626",
                },
              ]}
            >
              {catEmoji && <Text style={{ fontSize: 20 }}>{catEmoji}</Text>}
            </Pressable>
          )}
        />
      </View>
    </BottomSheet>
  );
};

export default Emojis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4C4C4CA3",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 7,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: "white",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#262626",
    alignItems: "center",
    marginBottom: 20,
  },
  footer: {
    padding: 10,
    borderRadius: 10,
  },
});
